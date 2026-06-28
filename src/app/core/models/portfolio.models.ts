export interface NavigationItem {
  readonly label: string;
  readonly target: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: IconName;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface ProfileConfig {
  readonly name: string;
  readonly shortName: string;
  readonly title: string;
  readonly headline: string;
  readonly typedTitles: readonly string[];
  readonly summary: readonly string[];
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly github: string;
  readonly linkedin: string;
  readonly resumePath: string;
  readonly profileImage: string;
  readonly socialLinks: readonly SocialLink[];
  readonly contactItems: readonly ContactItem[];
  readonly highlights: readonly Stat[];
  readonly skills: readonly SkillCategory[];
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly certifications: readonly Certification[];
  readonly projects: readonly Project[];
  readonly resume: ResumeContent;
  readonly footerText: string;
}

export interface ResumeContent {
  readonly title: string;
  readonly description: string;
  readonly previewTitle: string;
  readonly previewStack: string;
  readonly previewHighlights: readonly string[];
}

export interface SkillCategory {
  readonly title: string;
  readonly icon: IconName;
  readonly skills: readonly Skill[];
}

export interface Skill {
  readonly name: string;
  readonly level: number;
}

export interface Experience {
  readonly company: string;
  readonly role: string;
  readonly duration: string;
  readonly location: string;
  readonly client?: string;
  readonly responsibilities: readonly string[];
  readonly clientEngagements?: readonly ClientEngagement[];
  readonly technologies: readonly string[];
}

export interface ClientEngagement {
  readonly client: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
}

export interface Project {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly image: string;
  readonly stack: readonly string[];
  readonly features: readonly string[];
  readonly github?: string;
  readonly demo?: string;
}

export interface Education {
  readonly degree: string;
  readonly university: string;
  readonly duration: string;
  readonly location: string;
  readonly description: string;
  readonly highlights?: readonly string[];
}

export interface Certification {
  readonly name: string;
  readonly organization: string;
  readonly issueDate: string;
  readonly certificatePath: string;
}

export interface ContactItem {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly icon: IconName;
}

export type IconName =
  | 'arrow-up'
  | 'briefcase'
  | 'check'
  | 'code'
  | 'database'
  | 'download'
  | 'external-link'
  | 'github'
  | 'graduation'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'map-pin'
  | 'menu'
  | 'moon'
  | 'phone'
  | 'rocket'
  | 'server'
  | 'shield'
  | 'sun'
  | 'tool'
  | 'x';
