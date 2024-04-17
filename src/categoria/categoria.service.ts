import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import {  Categoria } from "../@generated/index";
import { CriarCategoria, UpdateCategoria } from './dto/create-categoria.input';
import { GraphQLError } from 'graphql';

@Injectable()
export class CategoriaService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  async create(criarCategoria: CriarCategoria): Promise<Categoria>{
    try {
      const cheacked = await this.prisma.categoria.create({data: {
          titulo_cat: criarCategoria.titulo_cat,
        }});
        if (cheacked) {
          return this.prisma.categoria.findUnique({
            where: {
              id: cheacked.id
            }
          });
        }
      }catch(e){
        throw new Error(`Erro ao criar a categoria: ${e}`);
    }
  }

  async getAllCategoria(){
    try{
      return await this.prisma.categoria.findMany({
        include:{
          tarefas: {
            where: {
            }
          }
        }
      });
    }catch(e){
      throw new Error(`Erro ao pegar todas as categoria: ${e}`);
    }
  }

  async apagarCategoria(id: number): Promise<Boolean>{
    try{
      const task = await this.prisma.categoria.findUnique({where: {id}, select: {
        tarefas: {}
      }});

      if(task.tarefas.length > 0){
        return false;
      }else{
        const data = await this.prisma.categoria.delete({where: {id}});
        return (data)? true : false
      }
    }catch(e){
      throw new Error(`Erro ao apagar a categoria com Id: ${id}`);
    }
  }

  async update(id: number, dados: UpdateCategoria):Promise<Categoria> {
    try {
      const data = await this.prisma.categoria.update({ where: {id},
        data: {
          titulo_cat:  dados.titulo_cat
        },
        select: {
          tarefas:{
            
          }
        }
      });
    
      if (data){
        return this.prisma.categoria.findUnique({where: {id}});
      }else{
        throw new GraphQLError(
          `Id nao existe, erro ao editar`,
        );
      }
    } catch (error) {
      throw new Error(`Erro ao actualizarosa categoria: ${error}`);
    }
  }

  
  async one_Cat(id: number): Promise<Categoria>{
    try {
      return await this.prisma.categoria.findUnique(
        {where: { id: id }, include: { tarefas: { } }});
    } catch (error) {
      throw new Error(`Erro ao pegar uma categoria: ${error}`);
    }
  }
}
