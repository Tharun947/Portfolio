import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnDestroy, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ThemeService } from '../../core/services/theme.service';
import { EmailService } from '../../core/services/email.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { TagComponent } from '../../shared/components/tag/tag.component';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, IconComponent, SectionHeadingComponent, StatCardComponent, TagComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('sectionReveal', [
      transition(':enter', [
        query('.reveal', [
          style({ opacity: 0, transform: 'translateY(22px)' }),
          stagger(80, animate('520ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly formBuilder = inject(FormBuilder);
  private readonly emailService = inject(EmailService);
  readonly portfolio = inject(PortfolioService);
  readonly themeService = inject(ThemeService);

  readonly activeSection = signal('home');
  readonly isMenuOpen = signal(false);
  readonly typedTitle = signal<string>('');
  readonly submitted = signal(false);
  readonly isSending = signal(false);
  readonly submissionMessage = signal('');
  readonly submissionState = signal<'idle' | 'success' | 'error'>('idle');
  readonly currentYear = new Date().getFullYear();
  readonly themeIcon = computed(() => (this.themeService.theme() === 'dark' ? 'sun' : 'moon'));

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(12)]]
  });

  private typingIndex = 0;
  private typingCharacterIndex = 0;
  private isDeletingTitle = false;
  private typingTimer: number | undefined;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.runTypingAnimation();
    } else {
      this.typedTitle.set(this.portfolio.profile.typedTitles[0]);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const current = [...this.portfolio.navigation]
      .reverse()
      .map((item) => document.getElementById(item.target))
      .filter((section): section is HTMLElement => Boolean(section))
      .find((section) => section.getBoundingClientRect().top <= 130);

    if (current) {
      this.activeSection.set(current.id);
    }
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      window.clearTimeout(this.typingTimer);
    }
  }

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection.set(target);
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  async submitContactForm(): Promise<void> {
    if (this.isSending()) {
      return;
    }

    this.submitted.set(true);
    this.submissionMessage.set('');
    this.submissionState.set('idle');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending.set(true);

    try {
      await this.emailService.sendContactMessage(this.contactForm.getRawValue());
      this.contactForm.reset();
      this.submissionState.set('success');
      this.submissionMessage.set('Thanks. Your message has been sent successfully.');
    } catch {
      this.submissionState.set('error');
      this.submissionMessage.set('I could not send this message right now. Please email me directly at tharun.m947@gmail.com.');
    } finally {
      this.isSending.set(false);
    }
  }

  private runTypingAnimation(): void {
    const titles = this.portfolio.profile.typedTitles;
    const currentTitle = titles[this.typingIndex];
    const nextText = this.isDeletingTitle
      ? currentTitle.slice(0, this.typingCharacterIndex - 1)
      : currentTitle.slice(0, this.typingCharacterIndex + 1);

    this.typedTitle.set(nextText);
    this.typingCharacterIndex = nextText.length;

    let delay = this.isDeletingTitle ? 24 : 42;

    if (!this.isDeletingTitle && nextText === currentTitle) {
      delay = 620;
      this.isDeletingTitle = true;
    } else if (this.isDeletingTitle && nextText === '') {
      this.isDeletingTitle = false;
      this.typingIndex = (this.typingIndex + 1) % titles.length;
      delay = 110;
    }

    this.typingTimer = window.setTimeout(() => this.runTypingAnimation(), delay);
  }
}
