import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { CategoriaService } from './categoria.service';
import { Categoria } from 'src/@generated';
import { CriarCategoria, UpdateCategoria } from './dto/create-categoria.input';


@Resolver(() => Categoria)
export class CategoriaResolver {
  constructor(private readonly categoriaService: CategoriaService) {}
  
  @Query(() => [Categoria], { name: 'get_all_Cat' })
  findAllCat(){
    return this.categoriaService.getAllCategoria();
  }

  @Mutation(() => Categoria, {name: 'criar_Cat'})
  async criar(
    @Args('categoria', { type: () => CriarCategoria}) categoria: CriarCategoria
  ): Promise<Categoria>{
    return this.categoriaService.create(categoria);
  }

  @Mutation(() => Categoria, {name: 'apagar_Cat'})
  async deletar_cat(
    @Args('id', {type: () => Number}) id: number
  ): Promise<number>{
    try {
      const cheacked = this.categoriaService.apagarCategoria(id);
      if (cheacked) {
        return 0;
      }else{
        return -1;
      }
    }catch(e){
      throw new Error("Error ao 501")
    }
  }

  @Mutation(() => Categoria,{name: 'update_Cat'})
  async updade(
    @Args('id', {type: () => Number}) id: number,
    @Args('data', {type: () => UpdateCategoria}) data: UpdateCategoria
  ): Promise<Categoria> {
    try {
      return await this.categoriaService.update(id, data);
    }catch(e){
      throw new Error("Error ao 501")
    }
  }

  @Query(() => Categoria, {name: 'one_Cat'})
  async one_Cat(
    @Args('id', {type: () => {name: 'one_Cat'}}) id: number
  ){
    try {
      
    } catch (error) {
      throw new Error("Error ao 501")
    }
  }
}
