# EnterprisePortfolio

Personal Angular portfolio for Tharun Venkadesh Manimaran.

## Personal content

Most profile content is managed in:

`src/app/core/data/profile.config.ts`

Replace the profile photo at:

`public/assets/images/profile.jpg`

The resume download uses:

`public/assets/resume/Tharun_Venkadesh_Resume.pdf`

To update the resume, replace that PDF file and keep the same filename.

Project GitHub links are configured in:

`src/app/core/data/profile.config.ts`

Find the `projects` array and paste each repository URL into the matching `github` field.

## Contact form setup

The contact form uses EmailJS when keys are configured and falls back to a free client-side FormSubmit endpoint for `tharun.m947@gmail.com`.

For the most reliable production setup, create an EmailJS service/template and set these environment variables before building locally or in Vercel:

```bash
NG_APP_EMAILJS_SERVICE_ID=your_service_id
NG_APP_EMAILJS_TEMPLATE_ID=your_template_id
NG_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

`npm run build` runs `scripts/set-emailjs-env.mjs`, which writes the Angular environment file used by the static app.

The first FormSubmit fallback email may require mailbox activation from FormSubmit.

## Certificate files

Certificate buttons point to PDFs in:

`public/assets/certificates/`

Replace the placeholder PDFs with the real certificates using the same filenames.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Vercel deployment

Use these settings when importing the project into Vercel:

```text
Framework Preset: Angular
Root Directory: outputs/enterprise-portfolio
Install Command: npm install
Build Command: npm run build
Output Directory: dist/enterprise-portfolio/browser
```

Add these environment variables in Vercel if you want EmailJS delivery instead of the FormSubmit fallback:

```text
NG_APP_EMAILJS_SERVICE_ID
NG_APP_EMAILJS_TEMPLATE_ID
NG_APP_EMAILJS_PUBLIC_KEY
```

`vercel.json` already includes the SPA rewrite to `index.html`.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
