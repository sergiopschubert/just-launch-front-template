import { Logger } from '@kernelsoftware/shared';

export const logger = new Logger(
  process.env.LOG_LEVEL!,
  process.env.APPLICATION_NAME!
);
