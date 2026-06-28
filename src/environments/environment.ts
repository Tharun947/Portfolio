import { emailJsEnvironment } from './emailjs.generated';

export const environment = {
  production: false,
  emailJs: emailJsEnvironment
} as const;
