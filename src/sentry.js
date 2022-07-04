import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';

export function sentryInit() {
  Sentry.init({
    dsn: 'https://e3884810677840b4b3d8fcdba11e76b7@o1288499.ingest.sentry.io/6505470',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  });
}
