import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

export interface ContactFormPayload {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  async sendContactMessage(payload: ContactFormPayload): Promise<void> {
    const { publicKey, serviceId, templateId } = environment.emailJs;

    if (publicKey && serviceId && templateId) {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: payload.name,
          from_email: payload.email,
          subject: payload.subject,
          message: payload.message,
          reply_to: payload.email
        },
        { publicKey }
      );
      return;
    }

    const response = await fetch('https://formsubmit.co/ajax/tharun.m947@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        _subject: `Portfolio contact: ${payload.subject}`,
        _template: 'table'
      })
    });

    if (!response.ok) {
      throw new Error('Contact message failed.');
    }
  }
}
