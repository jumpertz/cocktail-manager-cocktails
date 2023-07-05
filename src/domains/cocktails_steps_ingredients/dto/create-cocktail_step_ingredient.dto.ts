import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { CocktailStep } from "src/domains/cocktails_steps/cocktail_step.entity";
import { Ingredient } from "src/domains/ingredients/ingredient.entity";
import { DeepPartial } from "typeorm";

export class CreateCocktailStepIngredientDto {

    @IsNotEmpty()
    @IsUUID()
    cocktailStep: DeepPartial<CocktailStep>;

    @IsNotEmpty()
    @IsUUID()
    ingredient: DeepPartial<Ingredient>;

    @IsNotEmpty()
    @IsNumber()
    position: number;

    @IsNotEmpty()
    @IsString()
    description: string;
}
