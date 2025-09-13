// import React from "react";

// const ResultShow = ({ data }) => {
//   if (!data) return null;

//   const tips = [];

//   if (data.calories > 700) tips.push("High calorie meal – consider smaller portions.");
//   if (data.fats > 30) tips.push("High fat content – try reducing fried/oily foods.");
//   if (data.proteins < 10 && data.raw !== "Your meal report will appear here")
//     tips.push("Low protein – add eggs, lentils, or yogurt.");
//   if (data.carbs > 100) tips.push("High carbohydrate – limit refined carbs.");
//   if (!tips.length && !data.message && data.raw !== "Your meal report will appear here")
//     tips.push("Great balanced meal! Keep it up.");

//   return (
//     <div className="w-full bg-green-200 rounded-xl shadow-lg p-6">
//       <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
//         Your Nutrition Report
//       </h2>

//       <p className="text-green-800 mb-2"><strong>Food Logged:</strong> {data.raw}</p>

//       {data.message && (
//         <p className="text-red-600 mb-2"><strong>Note:</strong> {data.message}</p>
//       )}

//       <div className="mt-4 grid grid-cols-2 gap-4">
//         <div className="p-3 bg-green-300 rounded-lg text-center">
//           <p className="font-semibold text-green-900">Calories</p>
//           <p className="text-green-800 text-lg">{data.calories}</p>
//         </div>
//         <div className="p-3 bg-green-300 rounded-lg text-center">
//           <p className="font-semibold text-green-900">Proteins (g)</p>
//           <p className="text-green-800 text-lg">{data.proteins}</p>
//         </div>
//         <div className="p-3 bg-green-300 rounded-lg text-center">
//           <p className="font-semibold text-green-900">Fats (g)</p>
//           <p className="text-green-800 text-lg">{data.fats}</p>
//         </div>
//         <div className="p-3 bg-green-300 rounded-lg text-center">
//           <p className="font-semibold text-green-900">Carbs (g)</p>
//           <p className="text-green-800 text-lg">{data.carbs}</p>
//         </div>
//       </div>

//       {tips.length > 0 && (
//         <div className="mt-6 bg-green-300 p-4 rounded-lg">
//           <h3 className="font-bold text-green-900 mb-2 text-center">Health Tips</h3>
//           <ul className="list-disc list-inside text-green-800">
//             {tips.map((tip, idx) => (
//               <li key={idx}>{tip}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResultShow;
import React from "react";

const ResultShow = ({ data }) => {
  if (!data) return null;

  // Default values handling
  const isDefault = data.raw === "Your meal report will appear here";

  // Thresholds
  const lowProtein = data.proteins < 10 && !isDefault;
  const highCalories = data.calories > 700 && !isDefault;
  const highFats = data.fats > 30 && !isDefault;
  const highCarbs = data.carbs > 100 && !isDefault;

  // Health tips (more specific to input)
  const tips = [];
  if (highCalories) tips.push("Too many calories – try adding salads or soups to reduce intake.");
  if (highFats) tips.push("High fat – avoid fried food, prefer grilled or steamed options.");
  if (lowProtein) tips.push("Low protein – include eggs, beans, paneer, or chicken for balance.");
  if (highCarbs) tips.push("Excess carbs – swap refined carbs with oats, quinoa, or whole grains.");
  if (!tips.length && !data.message && !isDefault)
    tips.push("Great balanced meal! Keep this habit.");

  return (
    <div className="w-full bg-green-200 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
        Your Nutrition Report
      </h2>

      <p className="text-green-800 mb-2">
        <strong>Food Logged:</strong> {data.raw}
      </p>

      {data.message && (
        <p className="text-red-600 mb-2">
          <strong>Note:</strong> {data.message}
        </p>
      )}

      {/* Nutrition stats with red warning if low/high */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div
          className={`p-3 rounded-lg text-center ${
            highCalories ? "bg-red-300" : "bg-green-300"
          }`}
        >
          <p className="font-semibold text-green-900">Calories</p>
          <p className="text-green-900 text-lg">{data.calories}</p>
        </div>

        <div
          className={`p-3 rounded-lg text-center ${
            lowProtein ? "bg-red-300" : "bg-green-300"
          }`}
        >
          <p className="font-semibold text-green-900">Proteins (g)</p>
          <p className="text-green-900 text-lg">{data.proteins}</p>
        </div>

        <div
          className={`p-3 rounded-lg text-center ${
            highFats ? "bg-red-300" : "bg-green-300"
          }`}
        >
          <p className="font-semibold text-green-900">Fats (g)</p>
          <p className="text-green-900 text-lg">{data.fats}</p>
        </div>

        <div
          className={`p-3 rounded-lg text-center ${
            highCarbs ? "bg-red-300" : "bg-green-300"
          }`}
        >
          <p className="font-semibold text-green-900">Carbs (g)</p>
          <p className="text-green-900 text-lg">{data.carbs}</p>
        </div>
      </div>

      {/* Health Tips */}
      {tips.length > 0 && (
        <div className="mt-6 bg-green-300 p-4 rounded-lg">
          <h3 className="font-bold text-green-900 mb-2 text-center">
            Health Tips
          </h3>
          <ul className="list-disc list-inside text-green-900">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultShow;
