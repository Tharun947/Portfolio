import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconName } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-icon',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
