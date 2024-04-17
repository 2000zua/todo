
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service'
import {Tarefas } from "../@generated";
import { CriarTask, UpdateTask } from './dto/task-task.input';

@Resolver(() => Tarefas)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Tarefas, {name: "criar_task"})
  async criar_task(
    @Args('dados', {type: () => CriarTask}) dados: CriarTask,
    @Args('id_categoria',  {type: ()=> Number}) id_categoria: number
  ): Promise<Tarefas>{
    return this.taskService.criar_task(id_categoria, dados);
  }

  @Mutation(() => Tarefas, {name: "apagar_task"})
  async apagar_task(
    @Args('id', {type: () => Number}) id: number
  ): Promise<Tarefas> {
    return this.taskService.apagar_task(id);
  }

  @Query(() => Tarefas, {name: "find_one_task"})
  async find_one_task(
    @Args('id', {type: () => Number}) id: number
  ): Promise<Tarefas> {
    return this.taskService.find_one_task(id);
  }

  @Query(() => [Tarefas], {name: "find_all_task"})
  async find_all_task(): Promise<any[]>{
    return this.taskService.find_all_task();
  }

  @Mutation(() => Tarefas, {name: "update_task"})
  async update_task(
    @Args('id', {type: () => Number}) id: number,
    @Args('dados', {type: ()=> UpdateTask}) dados: UpdateTask
  ): Promise<Tarefas>{
    return this.taskService.update_task(id, dados);
  }



}

