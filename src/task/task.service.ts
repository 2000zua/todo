import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarTask } from './dto/task-task.input';
import { Status, Tarefas } from '@prisma/client';
import { count } from 'console';


@Injectable()
export class TaskService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async criar_task( categoria_id: number , dados: CriarTask): Promise<Tarefas>{
        try {
            const data = await this.prisma.tarefas.create({data: {
                tarefa: dados.tarefa,
                criado_em: new Date(),
                status: Status.NAO_CONCLUIDO,
                categoriaId: categoria_id,
            }});

            if (data){
                const dt = this.prisma.categoria.findUnique({where: {id: categoria_id}});
                const count = (await dt).count_tarefa++;

                // actualizar a variavel count_tarefas
                this.prisma.categoria.update(
                    {data: {count_tarefa: count},
                    where: {id: categoria_id}
                });

                // retonar todos os dados
                return await this.prisma.tarefas.findUnique({where: {id: data.id}});
            }
        } catch (error) {
            throw new Error(`Erro ao criar a categoria: ${error}`);
        }
    }

}
