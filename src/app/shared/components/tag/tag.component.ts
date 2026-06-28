import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: '<span>{{ label() }}</span>',
  styles: `
    span {
      align-items: center;
      background: var(--chip);
      border: 1px solid var(--border);
      border-radius: 999px;
      color: var(--text);
      display: inline-flex;
      font-size: 0.78rem;
      font-weight: 700;
      min-height: 2rem;
      padding: 0.35rem 0.75rem;
    }
  `
})
export class TagComponent {
  readonly label = input.required<string>();
}
