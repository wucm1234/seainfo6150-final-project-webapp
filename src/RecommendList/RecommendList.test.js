import React from "react";
import RecommendList from "./RecommendList";
import RecipeList from "../RecipeList/RecipeList";

const recipes = {
  0: {
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
  },
  1: {
    name: "Roasted Asparagus",
    id: "1",
    ingredients: [
      {
        quantity: "1 lb",
        name: " asparagus",
        type: "Produce",
      },
      {
        quantity: "1 1/2 tbsp",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "1/2 tsp",
        name: "kosher salt",
        type: "Baking",
      },
    ],
    steps: [
      "Preheat oven to 425°F.",
      "Cut off the woody bottom part of the asparagus spears and discard.",
      'With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.",string.", and if you eat asparagus you know what I mean by that).',
      "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
      "Sprinkle with salt.",
      "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
      "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
      "They should be tender when pierced with the tip of a knife.",
      "The tips of the spears will get very brown but watch them to prevent burning.",
      "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.",
    ],
    timers: [0, 0, 0, 0, 0, 0, 10, 0, 0, 0],
    imageURL:
      "https://d2zupx01utsj9r.cloudfront.net/media/filer_public/98/56/9856a34d-3eac-467a-892d-dab29c378b20/ov_recipe_asparagus_25.jpg",
    originalURL: "http://www.food.com/recipe/roasted-asparagus-50847",
  }
};
it("renders the home component correctly", () => {
  const { container } = render(<RecipeList recipes={Object.values(recipes)}/>);
  expect(container).toMatchSnapshot();
});
