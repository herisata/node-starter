import { createConnection, Connection } from 'typeorm';

// load database using typeorm variables in .env
export default async (): Promise<Connection> => createConnection();
