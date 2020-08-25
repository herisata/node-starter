import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env',
});
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  api: {
    prefix: '/api',
    port: parseInt(process.env.API_PORT, 10),
  },

  encryption: {
    /**
     * Your secret sauce
     */
    jwtSecret: process.env.SECRET,
  },
  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};
