import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";

import Home from "./Home/Home.jsx";
import RecipeList from "./RecipeList/RecipeList.jsx";
import Error from "./Error/Error.jsx";
import RecipeDetail from "./RecipeDetail/RecipeDetail.jsx";
import "./App.css";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Me from "./Me/Me.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props

function App() {
  const [fetchedData, setFetchedData] = useState();
  let recommendRecipes = [];
  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo7140513.mockable.io/recipes");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  if (!isEmpty(fetchedData)) {
    recommendRecipes = [
      Object.values(fetchedData)[3],
      Object.values(fetchedData)[4],
      Object.values(fetchedData)[5],
    ];
  }
  return isEmpty(fetchedData) ? null : (
    <>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li key="nav1">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li key="nav2">
              <Link className="link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li key="nav3">
              <Link className="link" to="/aboutUs">
                About us
              </Link>
            </li>
            <li key="nav4">
              <Link className="link" to="/info">
                Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Switch>
        <Route path="/" exact>
          <Home recommendRecipes={recommendRecipes}></Home>
        </Route>
        <Route path="/recipes" exact>
          <RecipeList recipes={Object.values(fetchedData)}></RecipeList>
        </Route>
        {/* passing parameters via a route path */}
        <Route
          path="/recipe/:recipeId"
          exact
          render={({ match }) => (
            <RecipeDetail
              recipe={fetchedData[match.params.recipeId]}
            ></RecipeDetail>
          )}
        />
        <Route path="/aboutUs" exact render={() => <AboutUs />} />
        <Route path="/info" exact render={() => <Me />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
