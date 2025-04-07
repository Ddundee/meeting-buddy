import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().min(1000),
    DATABASE_URL: z.string(),
    ENV: z
        .union([
            z.literal('development'),
            z.literal('testing'),
            z.literal('production'),
        ])
        .default('development'),
});

const env = envSchema.parse(process.env);

export default env;