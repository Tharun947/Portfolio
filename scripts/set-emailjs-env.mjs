import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const output = resolve('src/environments/emailjs.generated.ts');
const config = {
  serviceId: process.env['NG_APP_EMAILJS_SERVICE_ID'] ?? '',
  templateId: process.env['NG_APP_EMAILJS_TEMPLATE_ID'] ?? '',
  publicKey: process.env['NG_APP_EMAILJS_PUBLIC_KEY'] ?? ''
};

await mkdir(dirname(output), { recursive: true });
await writeFile(output, `export const emailJsEnvironment = ${JSON.stringify(config, null, 2)} as const;\n`);
