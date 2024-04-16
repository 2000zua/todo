import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CriarCategoria {
    @Field()
    titulo_cat: string
}

@InputType()
export class UpdateCategoria{
    @Field()
    titulo_cat: string
}