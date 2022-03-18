import { createClient } from 'redis'

export const RedisClient = {
  provide: 'REDIS_CLIENT',
  useFactory: async () => {
    const client = createClient({
      url: 'redis://:mypassword@localhost:6379'
    });
    client.on('error', (err)=> console.log('Redis Client Error', err));
    
    try {
      await client.connect();
    } catch(error) {
      console.log(error)
    }
    return client;
  }
  
}