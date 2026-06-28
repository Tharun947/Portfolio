import { emailJsEnvironment } from './emailjs.generated';

export const environment = {
  production: true,
  emailJs: emailJsEnvironment
} as const;
