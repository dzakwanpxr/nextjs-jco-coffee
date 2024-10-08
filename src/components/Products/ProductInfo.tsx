import { toPascalCase } from "@/shared/utils/utils";
import { Product } from "@/types/types";

interface ProductInfoProps extends Pick<Product, "name" | "description" | "ingredients" | "nutritionFacts"> {}

export default function ProductInfo({ name, description, ingredients, nutritionFacts }: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Nutrition Facts</h2>
      <table className="w-full mb-4">
        <tbody>
          {Object.entries(nutritionFacts).map(([key, value]) => (
            <tr key={key}>
              <td className="pr-4"> {toPascalCase(key)}</td>
              <td className="font-semibold">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
