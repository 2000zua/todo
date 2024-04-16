import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { PrismaService } from './prisma/prisma.service';
import { join } from 'path';
import { useDeferStream } from '@graphql-yoga/plugin-defer-stream';
import { TaskModule } from './task/task.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaService } from './categoria/categoria.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      imports: [PrismaModule],
      inject: [PrismaService],
      useFactory: async (prisma: PrismaService) => ({
        autoSchemaFile: join(process.cwd(), 'schema.gql'),
        graphiql: true,
        maskedErrors: false,
        plugins: [useDeferStream()],
      }),
    }),
    PrismaModule,
    TaskModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [AppService, CategoriaService],
})
export class AppModule {}
