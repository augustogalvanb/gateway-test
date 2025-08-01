import * as joi from 'joi';
import "dotenv/config";

interface EnvVars {
  NODE_ENV: string;
  PORT: number;
  NATS_URL: string;
  FRONT_URL?: string;
  BACK_URL?: string;
}

const envSchema = joi.object({
  NODE_ENV: joi.string()
    .valid('development', 'production', 'test')
    .required(),
  PORT: joi.number().default(3000),
  NATS_URL: joi.string().uri().required(),
  FRONT_URL: joi.string().uri().optional(),
  BACK_URL: joi.string().uri().optional()
}).unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Error en la configuración del entorno: ${error.message}`);
}
const envVars = value as EnvVars;

export const env = {
nodeEnv: envVars.NODE_ENV,
port: envVars.PORT,
natsUrl: envVars.NATS_URL,
frontUrl: envVars.FRONT_URL,
backUrl: envVars.BACK_URL
};
