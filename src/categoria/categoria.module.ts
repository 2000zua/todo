import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaResolver } from './categoria.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CategoriaResolver, CategoriaService],
})
export class CategoriaModule {}
