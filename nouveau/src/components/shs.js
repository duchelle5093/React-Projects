import { articles } from "../datas/shoes";


function Recipe({ id, name, value }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {value.map(ingredient =>
         console.log(value)
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {articles.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}
