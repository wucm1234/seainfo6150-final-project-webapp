import React from "react";
import RecipeListItem from "./RecipeListItem";

const recipe = {
  name: "Crock Pot Roast",
  id: "0",
  ingredients: [
    {
      quantity: "1",
      name: " beef roast",
      type: "Meat",
    },
    {
      quantity: "1 package",
      name: "brown gravy mix",
      type: "Baking",
    },
    {
      quantity: "1 package",
      name: "dried Italian salad dressing mix",
      type: "Condiments",
    },
    {
      quantity: "1 package",
      name: "dry ranch dressing mix",
      type: "Condiments",
    },
    {
      quantity: "1/2 cup",
      name: "water",
      type: "Drinks",
    },
  ],
  steps: [
    "Place beef roast in crock pot.",
    "Mix the dried mixes together in a bowl and sprinkle over the roast.",
    "Pour the water around the roast.",
    "Cook on low for 7-9 hours.",
  ],
  timers: [0, 0, 0, 420],
  imageURL:
    "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
  originalURL: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
};
it("renders the home component correctly", () => {
  const { container } = render(<RecipeListItem recipe={recipe} />);
  expect(container).toMatchSnapshot();
});
