import axios from "./libs/axios.js";

class RecipeAPI {
  constructor(apiKey) {
    this.baseUrl = "https://yummy-recipes.herokuapp.com";
    this.apiKey = apiKey;
  }

  async getAllRecipes() {
    const response = await axios.get(
      `${this.baseUrl}/recipes?api_key=${this.apiKey}`
    );
    // array sort by postDate
    response.data.sort(
      (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
    );
    return response.data;
  }

  async getSingleRecipe(id) {
    const response = await axios.get(
      `${this.baseUrl}/recipes/${id}?api_key=${this.apiKey}`
    );
    return response.data;
  }
}

export default RecipeAPI;
