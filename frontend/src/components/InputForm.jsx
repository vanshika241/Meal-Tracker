import React, { useState } from "react";

const InputForm = ({ onResult }) => {
  const [text, setText] = useState(""); // user input
  const [error, setError] = useState(""); // validation errors

  const handleCalculate = () => {
    setError("");

    if (!text.trim()) {
      setError("Please enter what you ate");
      return;
    }

    // Send text to parent (App)
    onResult({ raw: text });
  };

  const handleClear = () => {
    setText("");
    setError("");
    // Reset report to default (no API call)
    onResult({
      raw: "Your meal report will appear here",
      calories: 0,
      proteins: 0,
      fats: 0,
      carbs: 0,
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-xl bg-green-200 rounded-xl shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
            Check Your Meal
          </h2>

          <label
            htmlFor="food"
            className="block mb-2 text-green-900 font-bold"
          >
            What did you eat?
          </label>
          <textarea
            id="food"
            rows="4"
            className="w-full p-3 border border-green-400 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., 2 apples, 1 banana"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={handleCalculate}
            className="flex-1 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Calculate Calories
          </button>
          <button
            onClick={handleClear}
            className="flex-1 px-4 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
