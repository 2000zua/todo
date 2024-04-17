
import { Field, InputType } from "@nestjs/graphql";
import { Status } from "@prisma/client";


@InputType({description: "Tarefas_Criar"})
export class CriarTask {
    @Field()
    id?: number 

    @Field()
    tarefa?: string

    @Field()
    categoria_id?: number
 
    @Field()
    criado_em?: Date

    @Field()
    status?: Status
}

@InputType()
export class UpdateTask{
    @Field()
    tarefa?: string

    @Field()
    categoria_id?: number
   
    @Field()
    editado_em?: Date

    @Field()
    status?: Status
}

