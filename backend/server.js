const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Nutritionix API endpoint
const NUTRITIONIX_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";

app.post("/calculate", async (req, res) => {
  try {
    const { food } = req.body;

    if (!food) return res.status(400).json({ error: "No food input" });

    // Call Nutritionix API
    const response = await axios.post(
      NUTRITIONIX_URL,
      { query: food },
      {
        headers: {
          "x-app-id": process.env.NUTRITIONIX_APP_ID,
          "x-app-key": process.env.NUTRITIONIX_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const items = response.data.foods;

    // Sum all macros
    const totalCalories = items.reduce((sum, item) => sum + item.nf_calories, 0);
    const totalProteins = items.reduce((sum, item) => sum + item.nf_protein, 0);
    const totalFats = items.reduce((sum, item) => sum + item.nf_total_fat, 0);
    const totalCarbs = items.reduce((sum, item) => sum + item.nf_total_carbohydrate, 0);

    res.json({
      raw: food,
      calories: totalCalories,
      proteins: totalProteins,
      fats: totalFats,
      carbs: totalCarbs,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
