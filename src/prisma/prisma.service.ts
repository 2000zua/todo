import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const createPrismaClient = () => {
  const client = new PrismaClient({
    log: ['error', 'warn', 'query'],
  });
  return client;
};
  
type ExtendedPrismaClient = ReturnType<typeof createPrismaClient>;

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }
    
    async onModuleDestroy(){
        await this.$disconnect()
  }

}
