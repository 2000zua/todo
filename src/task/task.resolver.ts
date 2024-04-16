import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service'
import {Tarefas } from "../@generated";

@Resolver(() => Tarefas)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Tarefas, {name: "criar_task"})
  async criar_task(){}


}
