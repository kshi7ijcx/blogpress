import { Client,Databases,Account } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6606a28bcbea5437d6e8');

export const account = new Account(client);
export const databases = new Databases(client);