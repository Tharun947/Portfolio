import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly theme = signal<ThemeMode>('dark');

  initializeTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeMode | null;
    const preferredTheme: ThemeMode = savedTheme ?? 'dark';
    this.setTheme(preferredTheme);
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: ThemeMode): void {
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('portfolio-theme', theme);
    }
  }
}
