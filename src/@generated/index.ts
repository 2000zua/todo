import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum TarefasScalarFieldEnum {
    id = "id",
    tarefa = "tarefa",
    status = "status",
    criado_em = "criado_em",
    editado_em = "editado_em",
    categoriaId = "categoriaId"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum Status {
    CONCLUIDO = "CONCLUIDO",
    NAO_CONCLUIDO = "NAO_CONCLUIDO"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum CategoriaScalarFieldEnum {
    id = "id",
    count_tarefa = "count_tarefa",
    titulo_cat = "titulo_cat"
}

registerEnumType(CategoriaScalarFieldEnum, { name: 'CategoriaScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(Status, { name: 'Status', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(TarefasScalarFieldEnum, { name: 'TarefasScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCategoria {
    @Field(() => CategoriaCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoriaCountAggregate>;
    @Field(() => CategoriaAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CategoriaAvgAggregate>;
    @Field(() => CategoriaSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CategoriaSumAggregate>;
    @Field(() => CategoriaMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoriaMinAggregate>;
    @Field(() => CategoriaMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoriaMaxAggregate>;
}

@ArgsType()
export class CategoriaAggregateArgs {
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => [CategoriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoriaOrderByWithRelationInput>;
    @Field(() => CategoriaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoriaCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoriaCountAggregateInput>;
    @Field(() => CategoriaAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoriaAvgAggregateInput>;
    @Field(() => CategoriaSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategoriaSumAggregateInput>;
    @Field(() => CategoriaMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoriaMinAggregateInput>;
    @Field(() => CategoriaMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoriaMaxAggregateInput>;
}

@InputType()
export class CategoriaAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count_tarefa?: true;
}

@ObjectType()
export class CategoriaAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    count_tarefa?: number;
}

@InputType()
export class CategoriaAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count_tarefa?: keyof typeof SortOrder;
}

@InputType()
export class CategoriaCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count_tarefa?: true;
    @Field(() => Boolean, {nullable:true})
    titulo_cat?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CategoriaCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    count_tarefa!: number;
    @Field(() => Int, {nullable:false})
    titulo_cat!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CategoriaCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count_tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    titulo_cat?: keyof typeof SortOrder;
}

@ObjectType()
export class CategoriaCount {
    @Field(() => Int, {nullable:false})
    tarefas?: number;
}

@InputType()
export class CategoriaCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:false})
    titulo_cat!: string;
}

@InputType()
export class CategoriaCreateNestedOneWithoutTarefasInput {
    @Field(() => CategoriaCreateWithoutTarefasInput, {nullable:true})
    @Type(() => CategoriaCreateWithoutTarefasInput)
    create?: InstanceType<typeof CategoriaCreateWithoutTarefasInput>;
    @Field(() => CategoriaCreateOrConnectWithoutTarefasInput, {nullable:true})
    @Type(() => CategoriaCreateOrConnectWithoutTarefasInput)
    connectOrCreate?: InstanceType<typeof CategoriaCreateOrConnectWithoutTarefasInput>;
    @Field(() => CategoriaWhereUniqueInput, {nullable:true})
    @Type(() => CategoriaWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
}

@InputType()
export class CategoriaCreateOrConnectWithoutTarefasInput {
    @Field(() => CategoriaWhereUniqueInput, {nullable:false})
    @Type(() => CategoriaWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
    @Field(() => CategoriaCreateWithoutTarefasInput, {nullable:false})
    @Type(() => CategoriaCreateWithoutTarefasInput)
    create!: InstanceType<typeof CategoriaCreateWithoutTarefasInput>;
}

@InputType()
export class CategoriaCreateWithoutTarefasInput {
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:false})
    titulo_cat!: string;
}

@InputType()
export class CategoriaCreateInput {
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:false})
    titulo_cat!: string;
    @Field(() => TarefasCreateNestedManyWithoutCategoriaInput, {nullable:true})
    tarefas?: InstanceType<typeof TarefasCreateNestedManyWithoutCategoriaInput>;
}

@ArgsType()
export class CategoriaGroupByArgs {
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => [CategoriaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoriaOrderByWithAggregationInput>;
    @Field(() => [CategoriaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoriaScalarFieldEnum>;
    @Field(() => CategoriaScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CategoriaScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoriaCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoriaCountAggregateInput>;
    @Field(() => CategoriaAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoriaAvgAggregateInput>;
    @Field(() => CategoriaSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategoriaSumAggregateInput>;
    @Field(() => CategoriaMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoriaMinAggregateInput>;
    @Field(() => CategoriaMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoriaMaxAggregateInput>;
}

@ObjectType()
export class CategoriaGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:false})
    titulo_cat!: string;
    @Field(() => CategoriaCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoriaCountAggregate>;
    @Field(() => CategoriaAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CategoriaAvgAggregate>;
    @Field(() => CategoriaSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CategoriaSumAggregate>;
    @Field(() => CategoriaMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoriaMinAggregate>;
    @Field(() => CategoriaMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoriaMaxAggregate>;
}

@InputType()
export class CategoriaMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count_tarefa?: true;
    @Field(() => Boolean, {nullable:true})
    titulo_cat?: true;
}

@ObjectType()
export class CategoriaMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:true})
    titulo_cat?: string;
}

@InputType()
export class CategoriaMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count_tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    titulo_cat?: keyof typeof SortOrder;
}

@InputType()
export class CategoriaMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count_tarefa?: true;
    @Field(() => Boolean, {nullable:true})
    titulo_cat?: true;
}

@ObjectType()
export class CategoriaMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:true})
    titulo_cat?: string;
}

@InputType()
export class CategoriaMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count_tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    titulo_cat?: keyof typeof SortOrder;
}

@InputType()
export class CategoriaNullableRelationFilter {
    @Field(() => CategoriaWhereInput, {nullable:true})
    is?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => CategoriaWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CategoriaWhereInput>;
}

@InputType()
export class CategoriaOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    count_tarefa?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    titulo_cat?: keyof typeof SortOrder;
    @Field(() => CategoriaCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoriaCountOrderByAggregateInput>;
    @Field(() => CategoriaAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoriaAvgOrderByAggregateInput>;
    @Field(() => CategoriaMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoriaMaxOrderByAggregateInput>;
    @Field(() => CategoriaMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoriaMinOrderByAggregateInput>;
    @Field(() => CategoriaSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategoriaSumOrderByAggregateInput>;
}

@InputType()
export class CategoriaOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    count_tarefa?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    titulo_cat?: keyof typeof SortOrder;
    @Field(() => TarefasOrderByRelationAggregateInput, {nullable:true})
    tarefas?: InstanceType<typeof TarefasOrderByRelationAggregateInput>;
}

@InputType()
export class CategoriaScalarWhereWithAggregatesInput {
    @Field(() => [CategoriaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoriaScalarWhereWithAggregatesInput>;
    @Field(() => [CategoriaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoriaScalarWhereWithAggregatesInput>;
    @Field(() => [CategoriaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoriaScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    count_tarefa?: InstanceType<typeof BigIntNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    titulo_cat?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CategoriaSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count_tarefa?: true;
}

@ObjectType()
export class CategoriaSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
}

@InputType()
export class CategoriaSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count_tarefa?: keyof typeof SortOrder;
}

@InputType()
export class CategoriaUncheckedCreateWithoutTarefasInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:false})
    titulo_cat!: string;
}

@InputType()
export class CategoriaUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    count_tarefa?: bigint | number;
    @Field(() => String, {nullable:false})
    titulo_cat!: string;
    @Field(() => TarefasUncheckedCreateNestedManyWithoutCategoriaInput, {nullable:true})
    tarefas?: InstanceType<typeof TarefasUncheckedCreateNestedManyWithoutCategoriaInput>;
}

@InputType()
export class CategoriaUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    count_tarefa?: InstanceType<typeof NullableBigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoriaUncheckedUpdateWithoutTarefasInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    count_tarefa?: InstanceType<typeof NullableBigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoriaUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    count_tarefa?: InstanceType<typeof NullableBigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TarefasUncheckedUpdateManyWithoutCategoriaNestedInput, {nullable:true})
    tarefas?: InstanceType<typeof TarefasUncheckedUpdateManyWithoutCategoriaNestedInput>;
}

@InputType()
export class CategoriaUpdateManyMutationInput {
    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    count_tarefa?: InstanceType<typeof NullableBigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoriaUpdateOneWithoutTarefasNestedInput {
    @Field(() => CategoriaCreateWithoutTarefasInput, {nullable:true})
    @Type(() => CategoriaCreateWithoutTarefasInput)
    create?: InstanceType<typeof CategoriaCreateWithoutTarefasInput>;
    @Field(() => CategoriaCreateOrConnectWithoutTarefasInput, {nullable:true})
    @Type(() => CategoriaCreateOrConnectWithoutTarefasInput)
    connectOrCreate?: InstanceType<typeof CategoriaCreateOrConnectWithoutTarefasInput>;
    @Field(() => CategoriaUpsertWithoutTarefasInput, {nullable:true})
    @Type(() => CategoriaUpsertWithoutTarefasInput)
    upsert?: InstanceType<typeof CategoriaUpsertWithoutTarefasInput>;
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    disconnect?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    delete?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => CategoriaWhereUniqueInput, {nullable:true})
    @Type(() => CategoriaWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
    @Field(() => CategoriaUpdateToOneWithWhereWithoutTarefasInput, {nullable:true})
    @Type(() => CategoriaUpdateToOneWithWhereWithoutTarefasInput)
    update?: InstanceType<typeof CategoriaUpdateToOneWithWhereWithoutTarefasInput>;
}

@InputType()
export class CategoriaUpdateToOneWithWhereWithoutTarefasInput {
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => CategoriaUpdateWithoutTarefasInput, {nullable:false})
    @Type(() => CategoriaUpdateWithoutTarefasInput)
    data!: InstanceType<typeof CategoriaUpdateWithoutTarefasInput>;
}

@InputType()
export class CategoriaUpdateWithoutTarefasInput {
    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    count_tarefa?: InstanceType<typeof NullableBigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoriaUpdateInput {
    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    count_tarefa?: InstanceType<typeof NullableBigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TarefasUpdateManyWithoutCategoriaNestedInput, {nullable:true})
    tarefas?: InstanceType<typeof TarefasUpdateManyWithoutCategoriaNestedInput>;
}

@InputType()
export class CategoriaUpsertWithoutTarefasInput {
    @Field(() => CategoriaUpdateWithoutTarefasInput, {nullable:false})
    @Type(() => CategoriaUpdateWithoutTarefasInput)
    update!: InstanceType<typeof CategoriaUpdateWithoutTarefasInput>;
    @Field(() => CategoriaCreateWithoutTarefasInput, {nullable:false})
    @Type(() => CategoriaCreateWithoutTarefasInput)
    create!: InstanceType<typeof CategoriaCreateWithoutTarefasInput>;
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
}

@InputType()
export class CategoriaWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [CategoriaWhereInput], {nullable:true})
    AND?: Array<CategoriaWhereInput>;
    @Field(() => [CategoriaWhereInput], {nullable:true})
    OR?: Array<CategoriaWhereInput>;
    @Field(() => [CategoriaWhereInput], {nullable:true})
    NOT?: Array<CategoriaWhereInput>;
    @Field(() => BigIntNullableFilter, {nullable:true})
    count_tarefa?: InstanceType<typeof BigIntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFilter>;
    @Field(() => TarefasListRelationFilter, {nullable:true})
    tarefas?: InstanceType<typeof TarefasListRelationFilter>;
}

@InputType()
export class CategoriaWhereInput {
    @Field(() => [CategoriaWhereInput], {nullable:true})
    AND?: Array<CategoriaWhereInput>;
    @Field(() => [CategoriaWhereInput], {nullable:true})
    OR?: Array<CategoriaWhereInput>;
    @Field(() => [CategoriaWhereInput], {nullable:true})
    NOT?: Array<CategoriaWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => BigIntNullableFilter, {nullable:true})
    count_tarefa?: InstanceType<typeof BigIntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    titulo_cat?: InstanceType<typeof StringFilter>;
    @Field(() => TarefasListRelationFilter, {nullable:true})
    tarefas?: InstanceType<typeof TarefasListRelationFilter>;
}

@ObjectType()
export class Categoria {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:true})
    count_tarefa!: bigint | null;
    @Field(() => String, {nullable:false})
    titulo_cat!: string;
    @Field(() => [Tarefas], {nullable:true})
    tarefas?: Array<Tarefas>;
    @Field(() => CategoriaCount, {nullable:false})
    _count?: InstanceType<typeof CategoriaCount>;
}

@ArgsType()
export class CreateManyCategoriaArgs {
    @Field(() => [CategoriaCreateManyInput], {nullable:false})
    @Type(() => CategoriaCreateManyInput)
    data!: Array<CategoriaCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCategoriaArgs {
    @Field(() => CategoriaCreateInput, {nullable:false})
    @Type(() => CategoriaCreateInput)
    data!: InstanceType<typeof CategoriaCreateInput>;
}

@ArgsType()
export class DeleteManyCategoriaArgs {
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
}

@ArgsType()
export class DeleteOneCategoriaArgs {
    @Field(() => CategoriaWhereUniqueInput, {nullable:false})
    @Type(() => CategoriaWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCategoriaOrThrowArgs {
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => [CategoriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoriaOrderByWithRelationInput>;
    @Field(() => CategoriaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoriaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoriaScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCategoriaArgs {
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => [CategoriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoriaOrderByWithRelationInput>;
    @Field(() => CategoriaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoriaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoriaScalarFieldEnum>;
}

@ArgsType()
export class FindManyCategoriaArgs {
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
    @Field(() => [CategoriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoriaOrderByWithRelationInput>;
    @Field(() => CategoriaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoriaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoriaScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCategoriaOrThrowArgs {
    @Field(() => CategoriaWhereUniqueInput, {nullable:false})
    @Type(() => CategoriaWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCategoriaArgs {
    @Field(() => CategoriaWhereUniqueInput, {nullable:false})
    @Type(() => CategoriaWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCategoriaArgs {
    @Field(() => CategoriaUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoriaUpdateManyMutationInput)
    data!: InstanceType<typeof CategoriaUpdateManyMutationInput>;
    @Field(() => CategoriaWhereInput, {nullable:true})
    @Type(() => CategoriaWhereInput)
    where?: InstanceType<typeof CategoriaWhereInput>;
}

@ArgsType()
export class UpdateOneCategoriaArgs {
    @Field(() => CategoriaUpdateInput, {nullable:false})
    @Type(() => CategoriaUpdateInput)
    data!: InstanceType<typeof CategoriaUpdateInput>;
    @Field(() => CategoriaWhereUniqueInput, {nullable:false})
    @Type(() => CategoriaWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCategoriaArgs {
    @Field(() => CategoriaWhereUniqueInput, {nullable:false})
    @Type(() => CategoriaWhereUniqueInput)
    where!: Prisma.AtLeast<CategoriaWhereUniqueInput, 'id'>;
    @Field(() => CategoriaCreateInput, {nullable:false})
    @Type(() => CategoriaCreateInput)
    create!: InstanceType<typeof CategoriaCreateInput>;
    @Field(() => CategoriaUpdateInput, {nullable:false})
    @Type(() => CategoriaUpdateInput)
    update!: InstanceType<typeof CategoriaUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BigIntNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntNullableFilter>;
}

@InputType()
export class BigIntNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedBigIntNullableFilter>;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBigIntNullableFilter>;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBigIntNullableFilter>;
}

@InputType()
export class DateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class EnumStatusNullableFilter {
    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;
    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;
    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;
    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStatusNullableFilter>;
}

@InputType()
export class EnumStatusNullableWithAggregatesFilter {
    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;
    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;
    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;
    @Field(() => NestedEnumStatusNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStatusNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumStatusNullableFilter>;
    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumStatusNullableFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBigIntNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntNullableFilter>;
}

@InputType()
export class NestedBigIntNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedBigIntNullableFilter>;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBigIntNullableFilter>;
    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBigIntNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedEnumStatusNullableFilter {
    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;
    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;
    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;
    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStatusNullableFilter>;
}

@InputType()
export class NestedEnumStatusNullableWithAggregatesFilter {
    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;
    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;
    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;
    @Field(() => NestedEnumStatusNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStatusNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumStatusNullableFilter>;
    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumStatusNullableFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableBigIntFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: bigint | number;
    @Field(() => String, {nullable:true})
    increment?: bigint | number;
    @Field(() => String, {nullable:true})
    decrement?: bigint | number;
    @Field(() => String, {nullable:true})
    multiply?: bigint | number;
    @Field(() => String, {nullable:true})
    divide?: bigint | number;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class NullableEnumStatusFieldUpdateOperationsInput {
    @Field(() => Status, {nullable:true})
    set?: keyof typeof Status;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateTarefas {
    @Field(() => TarefasCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TarefasCountAggregate>;
    @Field(() => TarefasAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TarefasAvgAggregate>;
    @Field(() => TarefasSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TarefasSumAggregate>;
    @Field(() => TarefasMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TarefasMinAggregate>;
    @Field(() => TarefasMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TarefasMaxAggregate>;
}

@ArgsType()
export class CreateManyTarefasArgs {
    @Field(() => [TarefasCreateManyInput], {nullable:false})
    @Type(() => TarefasCreateManyInput)
    data!: Array<TarefasCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTarefasArgs {
    @Field(() => TarefasCreateInput, {nullable:false})
    @Type(() => TarefasCreateInput)
    data!: InstanceType<typeof TarefasCreateInput>;
}

@ArgsType()
export class DeleteManyTarefasArgs {
    @Field(() => TarefasWhereInput, {nullable:true})
    @Type(() => TarefasWhereInput)
    where?: InstanceType<typeof TarefasWhereInput>;
}

@ArgsType()
export class DeleteOneTarefasArgs {
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstTarefasOrThrowArgs {
    @Field(() => TarefasWhereInput, {nullable:true})
    @Type(() => TarefasWhereInput)
    where?: InstanceType<typeof TarefasWhereInput>;
    @Field(() => [TarefasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TarefasOrderByWithRelationInput>;
    @Field(() => TarefasWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TarefasScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TarefasScalarFieldEnum>;
}

@ArgsType()
export class FindFirstTarefasArgs {
    @Field(() => TarefasWhereInput, {nullable:true})
    @Type(() => TarefasWhereInput)
    where?: InstanceType<typeof TarefasWhereInput>;
    @Field(() => [TarefasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TarefasOrderByWithRelationInput>;
    @Field(() => TarefasWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TarefasScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TarefasScalarFieldEnum>;
}

@ArgsType()
export class FindManyTarefasArgs {
    @Field(() => TarefasWhereInput, {nullable:true})
    @Type(() => TarefasWhereInput)
    where?: InstanceType<typeof TarefasWhereInput>;
    @Field(() => [TarefasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TarefasOrderByWithRelationInput>;
    @Field(() => TarefasWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TarefasScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TarefasScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTarefasOrThrowArgs {
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueTarefasArgs {
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
}

@ArgsType()
export class TarefasAggregateArgs {
    @Field(() => TarefasWhereInput, {nullable:true})
    @Type(() => TarefasWhereInput)
    where?: InstanceType<typeof TarefasWhereInput>;
    @Field(() => [TarefasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TarefasOrderByWithRelationInput>;
    @Field(() => TarefasWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TarefasCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TarefasCountAggregateInput>;
    @Field(() => TarefasAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TarefasAvgAggregateInput>;
    @Field(() => TarefasSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TarefasSumAggregateInput>;
    @Field(() => TarefasMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TarefasMinAggregateInput>;
    @Field(() => TarefasMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TarefasMaxAggregateInput>;
}

@InputType()
export class TarefasAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    categoriaId?: true;
}

@ObjectType()
export class TarefasAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    categoriaId?: number;
}

@InputType()
export class TarefasAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoriaId?: keyof typeof SortOrder;
}

@InputType()
export class TarefasCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    tarefa?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    criado_em?: true;
    @Field(() => Boolean, {nullable:true})
    editado_em?: true;
    @Field(() => Boolean, {nullable:true})
    categoriaId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TarefasCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    tarefa!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    criado_em!: number;
    @Field(() => Int, {nullable:false})
    editado_em!: number;
    @Field(() => Int, {nullable:false})
    categoriaId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TarefasCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    criado_em?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editado_em?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoriaId?: keyof typeof SortOrder;
}

@InputType()
export class TarefasCreateManyCategoriaInputEnvelope {
    @Field(() => [TarefasCreateManyCategoriaInput], {nullable:false})
    @Type(() => TarefasCreateManyCategoriaInput)
    data!: Array<TarefasCreateManyCategoriaInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TarefasCreateManyCategoriaInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
}

@InputType()
export class TarefasCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
    @Field(() => Int, {nullable:true})
    categoriaId?: number;
}

@InputType()
export class TarefasCreateNestedManyWithoutCategoriaInput {
    @Field(() => [TarefasCreateWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateWithoutCategoriaInput)
    create?: Array<TarefasCreateWithoutCategoriaInput>;
    @Field(() => [TarefasCreateOrConnectWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateOrConnectWithoutCategoriaInput)
    connectOrCreate?: Array<TarefasCreateOrConnectWithoutCategoriaInput>;
    @Field(() => TarefasCreateManyCategoriaInputEnvelope, {nullable:true})
    @Type(() => TarefasCreateManyCategoriaInputEnvelope)
    createMany?: InstanceType<typeof TarefasCreateManyCategoriaInputEnvelope>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
}

@InputType()
export class TarefasCreateOrConnectWithoutCategoriaInput {
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => TarefasCreateWithoutCategoriaInput, {nullable:false})
    @Type(() => TarefasCreateWithoutCategoriaInput)
    create!: InstanceType<typeof TarefasCreateWithoutCategoriaInput>;
}

@InputType()
export class TarefasCreateWithoutCategoriaInput {
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
}

@InputType()
export class TarefasCreateInput {
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
    @Field(() => CategoriaCreateNestedOneWithoutTarefasInput, {nullable:true})
    Categoria?: InstanceType<typeof CategoriaCreateNestedOneWithoutTarefasInput>;
}

@ArgsType()
export class TarefasGroupByArgs {
    @Field(() => TarefasWhereInput, {nullable:true})
    @Type(() => TarefasWhereInput)
    where?: InstanceType<typeof TarefasWhereInput>;
    @Field(() => [TarefasOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TarefasOrderByWithAggregationInput>;
    @Field(() => [TarefasScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TarefasScalarFieldEnum>;
    @Field(() => TarefasScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TarefasScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TarefasCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TarefasCountAggregateInput>;
    @Field(() => TarefasAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TarefasAvgAggregateInput>;
    @Field(() => TarefasSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TarefasSumAggregateInput>;
    @Field(() => TarefasMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TarefasMinAggregateInput>;
    @Field(() => TarefasMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TarefasMaxAggregateInput>;
}

@ObjectType()
export class TarefasGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
    @Field(() => Int, {nullable:true})
    categoriaId?: number;
    @Field(() => TarefasCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TarefasCountAggregate>;
    @Field(() => TarefasAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TarefasAvgAggregate>;
    @Field(() => TarefasSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TarefasSumAggregate>;
    @Field(() => TarefasMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TarefasMinAggregate>;
    @Field(() => TarefasMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TarefasMaxAggregate>;
}

@InputType()
export class TarefasListRelationFilter {
    @Field(() => TarefasWhereInput, {nullable:true})
    every?: InstanceType<typeof TarefasWhereInput>;
    @Field(() => TarefasWhereInput, {nullable:true})
    some?: InstanceType<typeof TarefasWhereInput>;
    @Field(() => TarefasWhereInput, {nullable:true})
    none?: InstanceType<typeof TarefasWhereInput>;
}

@InputType()
export class TarefasMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    tarefa?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    criado_em?: true;
    @Field(() => Boolean, {nullable:true})
    editado_em?: true;
    @Field(() => Boolean, {nullable:true})
    categoriaId?: true;
}

@ObjectType()
export class TarefasMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    tarefa?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
    @Field(() => Int, {nullable:true})
    categoriaId?: number;
}

@InputType()
export class TarefasMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    criado_em?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editado_em?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoriaId?: keyof typeof SortOrder;
}

@InputType()
export class TarefasMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    tarefa?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    criado_em?: true;
    @Field(() => Boolean, {nullable:true})
    editado_em?: true;
    @Field(() => Boolean, {nullable:true})
    categoriaId?: true;
}

@ObjectType()
export class TarefasMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    tarefa?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
    @Field(() => Int, {nullable:true})
    categoriaId?: number;
}

@InputType()
export class TarefasMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    criado_em?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    editado_em?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoriaId?: keyof typeof SortOrder;
}

@InputType()
export class TarefasOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TarefasOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    status?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    criado_em?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    editado_em?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    categoriaId?: InstanceType<typeof SortOrderInput>;
    @Field(() => TarefasCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TarefasCountOrderByAggregateInput>;
    @Field(() => TarefasAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TarefasAvgOrderByAggregateInput>;
    @Field(() => TarefasMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TarefasMaxOrderByAggregateInput>;
    @Field(() => TarefasMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TarefasMinOrderByAggregateInput>;
    @Field(() => TarefasSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TarefasSumOrderByAggregateInput>;
}

@InputType()
export class TarefasOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tarefa?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    status?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    criado_em?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    editado_em?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    categoriaId?: InstanceType<typeof SortOrderInput>;
    @Field(() => CategoriaOrderByWithRelationInput, {nullable:true})
    Categoria?: InstanceType<typeof CategoriaOrderByWithRelationInput>;
}

@InputType()
export class TarefasScalarWhereWithAggregatesInput {
    @Field(() => [TarefasScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TarefasScalarWhereWithAggregatesInput>;
    @Field(() => [TarefasScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TarefasScalarWhereWithAggregatesInput>;
    @Field(() => [TarefasScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TarefasScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tarefa?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusNullableWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    criado_em?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    editado_em?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    categoriaId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}

@InputType()
export class TarefasScalarWhereInput {
    @Field(() => [TarefasScalarWhereInput], {nullable:true})
    AND?: Array<TarefasScalarWhereInput>;
    @Field(() => [TarefasScalarWhereInput], {nullable:true})
    OR?: Array<TarefasScalarWhereInput>;
    @Field(() => [TarefasScalarWhereInput], {nullable:true})
    NOT?: Array<TarefasScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    tarefa?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusNullableFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    criado_em?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    editado_em?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    categoriaId?: InstanceType<typeof IntNullableFilter>;
}

@InputType()
export class TarefasSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    categoriaId?: true;
}

@ObjectType()
export class TarefasSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    categoriaId?: number;
}

@InputType()
export class TarefasSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoriaId?: keyof typeof SortOrder;
}

@InputType()
export class TarefasUncheckedCreateNestedManyWithoutCategoriaInput {
    @Field(() => [TarefasCreateWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateWithoutCategoriaInput)
    create?: Array<TarefasCreateWithoutCategoriaInput>;
    @Field(() => [TarefasCreateOrConnectWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateOrConnectWithoutCategoriaInput)
    connectOrCreate?: Array<TarefasCreateOrConnectWithoutCategoriaInput>;
    @Field(() => TarefasCreateManyCategoriaInputEnvelope, {nullable:true})
    @Type(() => TarefasCreateManyCategoriaInputEnvelope)
    createMany?: InstanceType<typeof TarefasCreateManyCategoriaInputEnvelope>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
}

@InputType()
export class TarefasUncheckedCreateWithoutCategoriaInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
}

@InputType()
export class TarefasUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    criado_em?: Date | string;
    @Field(() => Date, {nullable:true})
    editado_em?: Date | string;
    @Field(() => Int, {nullable:true})
    categoriaId?: number;
}

@InputType()
export class TarefasUncheckedUpdateManyWithoutCategoriaNestedInput {
    @Field(() => [TarefasCreateWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateWithoutCategoriaInput)
    create?: Array<TarefasCreateWithoutCategoriaInput>;
    @Field(() => [TarefasCreateOrConnectWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateOrConnectWithoutCategoriaInput)
    connectOrCreate?: Array<TarefasCreateOrConnectWithoutCategoriaInput>;
    @Field(() => [TarefasUpsertWithWhereUniqueWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasUpsertWithWhereUniqueWithoutCategoriaInput)
    upsert?: Array<TarefasUpsertWithWhereUniqueWithoutCategoriaInput>;
    @Field(() => TarefasCreateManyCategoriaInputEnvelope, {nullable:true})
    @Type(() => TarefasCreateManyCategoriaInputEnvelope)
    createMany?: InstanceType<typeof TarefasCreateManyCategoriaInputEnvelope>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasUpdateWithWhereUniqueWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasUpdateWithWhereUniqueWithoutCategoriaInput)
    update?: Array<TarefasUpdateWithWhereUniqueWithoutCategoriaInput>;
    @Field(() => [TarefasUpdateManyWithWhereWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasUpdateManyWithWhereWithoutCategoriaInput)
    updateMany?: Array<TarefasUpdateManyWithWhereWithoutCategoriaInput>;
    @Field(() => [TarefasScalarWhereInput], {nullable:true})
    @Type(() => TarefasScalarWhereInput)
    deleteMany?: Array<TarefasScalarWhereInput>;
}

@InputType()
export class TarefasUncheckedUpdateManyWithoutCategoriaInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tarefa?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof NullableEnumStatusFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    criado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    editado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TarefasUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tarefa?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof NullableEnumStatusFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    criado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    editado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    categoriaId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class TarefasUncheckedUpdateWithoutCategoriaInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tarefa?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof NullableEnumStatusFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    criado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    editado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TarefasUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tarefa?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof NullableEnumStatusFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    criado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    editado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    categoriaId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class TarefasUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tarefa?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof NullableEnumStatusFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    criado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    editado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TarefasUpdateManyWithWhereWithoutCategoriaInput {
    @Field(() => TarefasScalarWhereInput, {nullable:false})
    @Type(() => TarefasScalarWhereInput)
    where!: InstanceType<typeof TarefasScalarWhereInput>;
    @Field(() => TarefasUpdateManyMutationInput, {nullable:false})
    @Type(() => TarefasUpdateManyMutationInput)
    data!: InstanceType<typeof TarefasUpdateManyMutationInput>;
}

@InputType()
export class TarefasUpdateManyWithoutCategoriaNestedInput {
    @Field(() => [TarefasCreateWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateWithoutCategoriaInput)
    create?: Array<TarefasCreateWithoutCategoriaInput>;
    @Field(() => [TarefasCreateOrConnectWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasCreateOrConnectWithoutCategoriaInput)
    connectOrCreate?: Array<TarefasCreateOrConnectWithoutCategoriaInput>;
    @Field(() => [TarefasUpsertWithWhereUniqueWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasUpsertWithWhereUniqueWithoutCategoriaInput)
    upsert?: Array<TarefasUpsertWithWhereUniqueWithoutCategoriaInput>;
    @Field(() => TarefasCreateManyCategoriaInputEnvelope, {nullable:true})
    @Type(() => TarefasCreateManyCategoriaInputEnvelope)
    createMany?: InstanceType<typeof TarefasCreateManyCategoriaInputEnvelope>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasWhereUniqueInput], {nullable:true})
    @Type(() => TarefasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>>;
    @Field(() => [TarefasUpdateWithWhereUniqueWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasUpdateWithWhereUniqueWithoutCategoriaInput)
    update?: Array<TarefasUpdateWithWhereUniqueWithoutCategoriaInput>;
    @Field(() => [TarefasUpdateManyWithWhereWithoutCategoriaInput], {nullable:true})
    @Type(() => TarefasUpdateManyWithWhereWithoutCategoriaInput)
    updateMany?: Array<TarefasUpdateManyWithWhereWithoutCategoriaInput>;
    @Field(() => [TarefasScalarWhereInput], {nullable:true})
    @Type(() => TarefasScalarWhereInput)
    deleteMany?: Array<TarefasScalarWhereInput>;
}

@InputType()
export class TarefasUpdateWithWhereUniqueWithoutCategoriaInput {
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => TarefasUpdateWithoutCategoriaInput, {nullable:false})
    @Type(() => TarefasUpdateWithoutCategoriaInput)
    data!: InstanceType<typeof TarefasUpdateWithoutCategoriaInput>;
}

@InputType()
export class TarefasUpdateWithoutCategoriaInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tarefa?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof NullableEnumStatusFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    criado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    editado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TarefasUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tarefa?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof NullableEnumStatusFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    criado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    editado_em?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => CategoriaUpdateOneWithoutTarefasNestedInput, {nullable:true})
    Categoria?: InstanceType<typeof CategoriaUpdateOneWithoutTarefasNestedInput>;
}

@InputType()
export class TarefasUpsertWithWhereUniqueWithoutCategoriaInput {
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => TarefasUpdateWithoutCategoriaInput, {nullable:false})
    @Type(() => TarefasUpdateWithoutCategoriaInput)
    update!: InstanceType<typeof TarefasUpdateWithoutCategoriaInput>;
    @Field(() => TarefasCreateWithoutCategoriaInput, {nullable:false})
    @Type(() => TarefasCreateWithoutCategoriaInput)
    create!: InstanceType<typeof TarefasCreateWithoutCategoriaInput>;
}

@InputType()
export class TarefasWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [TarefasWhereInput], {nullable:true})
    AND?: Array<TarefasWhereInput>;
    @Field(() => [TarefasWhereInput], {nullable:true})
    OR?: Array<TarefasWhereInput>;
    @Field(() => [TarefasWhereInput], {nullable:true})
    NOT?: Array<TarefasWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    tarefa?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusNullableFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    criado_em?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    editado_em?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    categoriaId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => CategoriaNullableRelationFilter, {nullable:true})
    Categoria?: InstanceType<typeof CategoriaNullableRelationFilter>;
}

@InputType()
export class TarefasWhereInput {
    @Field(() => [TarefasWhereInput], {nullable:true})
    AND?: Array<TarefasWhereInput>;
    @Field(() => [TarefasWhereInput], {nullable:true})
    OR?: Array<TarefasWhereInput>;
    @Field(() => [TarefasWhereInput], {nullable:true})
    NOT?: Array<TarefasWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    tarefa?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusNullableFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    criado_em?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    editado_em?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    categoriaId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => CategoriaNullableRelationFilter, {nullable:true})
    Categoria?: InstanceType<typeof CategoriaNullableRelationFilter>;
}

@ObjectType()
export class Tarefas {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    tarefa!: string;
    @Field(() => Status, {nullable:true,defaultValue:'NAO_CONCLUIDO'})
    status!: keyof typeof Status | null;
    @Field(() => Date, {nullable:true})
    criado_em!: Date | null;
    @Field(() => Date, {nullable:true})
    editado_em!: Date | null;
    @Field(() => Int, {nullable:true})
    categoriaId!: number | null;
    @Field(() => Categoria, {nullable:true})
    Categoria?: InstanceType<typeof Categoria> | null;
}

@ArgsType()
export class UpdateManyTarefasArgs {
    @Field(() => TarefasUpdateManyMutationInput, {nullable:false})
    @Type(() => TarefasUpdateManyMutationInput)
    data!: InstanceType<typeof TarefasUpdateManyMutationInput>;
    @Field(() => TarefasWhereInput, {nullable:true})
    @Type(() => TarefasWhereInput)
    where?: InstanceType<typeof TarefasWhereInput>;
}

@ArgsType()
export class UpdateOneTarefasArgs {
    @Field(() => TarefasUpdateInput, {nullable:false})
    @Type(() => TarefasUpdateInput)
    data!: InstanceType<typeof TarefasUpdateInput>;
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneTarefasArgs {
    @Field(() => TarefasWhereUniqueInput, {nullable:false})
    @Type(() => TarefasWhereUniqueInput)
    where!: Prisma.AtLeast<TarefasWhereUniqueInput, 'id'>;
    @Field(() => TarefasCreateInput, {nullable:false})
    @Type(() => TarefasCreateInput)
    create!: InstanceType<typeof TarefasCreateInput>;
    @Field(() => TarefasUpdateInput, {nullable:false})
    @Type(() => TarefasUpdateInput)
    update!: InstanceType<typeof TarefasUpdateInput>;
}
