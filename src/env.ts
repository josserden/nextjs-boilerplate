import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Shared environment variables.
   * Available on both server and client.
   */
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },

  /**
   * Server-side environment variables.
   * Not available on the client — will throw if accessed in browser.
   */
  server: {},

  /**
   * Client-side environment variables.
   * Must be prefixed with NEXT_PUBLIC_.
   */
  client: {
    // NEXT_PUBLIC_API_URL: z.url(),
  },

  /**
   * Destructure all variables from process.env to ensure they are included in the bundle.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
});
