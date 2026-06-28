import { Injectable } from '@angular/core';
import { navigationItems, profileConfig } from '../data/profile.config';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly profile = profileConfig;
  readonly navigation = navigationItems;
  readonly socials = profileConfig.socialLinks;
  readonly stats = profileConfig.highlights;
  readonly skillCategories = profileConfig.skills;
  readonly experiences = profileConfig.experience;
  readonly projects = profileConfig.projects;
  readonly education = profileConfig.education;
  readonly certifications = profileConfig.certifications;
  readonly contactItems = profileConfig.contactItems;
}
