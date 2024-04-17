
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarTask, UpdateTask } from './dto/task-task.input';
import { Status, Tarefas } from '@prisma/client';



@Injectable()
export class TaskService {
    constructor(
        private readonly prisma: PrismaService
        
    ){}

    async criar_task( categoria_id: number , dados: CriarTask): Promise<Tarefas>{
        try {
            const data = await this.prisma.tarefas.create({data: {
                tarefa: dados.tarefa,
                criado_em: dados.criado_em,
                status: Status.NAO_CONCLUIDO,
                categoriaId: categoria_id,
            }});

            if (data){
                /*const dt = await this.prisma.categoria.findUnique({where: {id: categoria_id}});
                const count = dt.count_tarefa++;

                // actualizar a variavel count_tarefas
                this.prisma.categoria.update(
                    {data: {count_tarefa: count},
                    where: {id: categoria_id}
                });*/

                // retonar todos os dados
                return await this.prisma.tarefas.findUnique({where: {id: data.id}, include: {Categoria: {}}});
            }

            return data;
        } catch (error) {
            throw new Error(`Erro ao criar a categoria: ${error}`);
        }
    }

    async apagar_task(id: number): Promise<Tarefas>{
        try {
            return await this.prisma.tarefas.delete({where:{id}});
        } catch (error) {
            throw new Error(`Erro ao criar a categoria: ${error}`);
        }
    }

    async find_one_task(id: number): Promise<Tarefas> {
        try {
            return await this.prisma.tarefas.findUnique({where:{id}});
        } catch (error) {
            throw new Error(`Erro ao pegar one tarefas: ${error}`);
        }
    }

    async find_all_task(): Promise<Tarefas[]>{
        try {
            return await this.prisma.tarefas.findMany({
                include:{
                    Categoria:{}
                    
                }
            });
        } catch (error) {
            throw new Error(`Erro ao pegar todos as tarefas: ${error}`);
        }
    }

    async update_task(id: number, dados: UpdateTask): Promise<Tarefas>{
        try {
            if (dados.status) {
                await this.prisma.tarefas.update({data: {status: dados.status}, where: {id}})
            }
            if (dados.tarefa) {
                await this.prisma.tarefas.update({data: {tarefa: dados.tarefa}, where:{id}})
            }
            if (dados.editado_em) {
                await this.prisma.tarefas.update({data: {editado_em: dados.editado_em}, where: {id}})
            }
            if (dados.categoria_id) {
                await this.prisma.tarefas.update({data:{categoriaId: dados.categoria_id}, where: {id}})
            }

            return await this.prisma.tarefas.findUnique({where: {id}, include: {Categoria: {}}});

        } catch (error) {
            throw new Error(`Erro ao criar a categoria: ${error}`);
        }
    }

}
