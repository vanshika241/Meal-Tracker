// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import InputForm from "./components/InputForm";
// import ResultShow from "./components/ResultShow";

// const App = () => {
//   const [result, setResult] = useState({
//     raw: "Your meal report will appear here",
//     calories: 0,
//     proteins: 0,
//     fats: 0,
//     carbs: 0,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleResult = async (data) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("http://localhost:5000/calculate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ food: data.raw }),
//       });

//       if (!res.ok) throw new Error("Backend error");

//       const resultData = await res.json();

//       setResult({
//         raw: data.raw,
//         calories: resultData.calories,
//         proteins: resultData.proteins,
//         fats: resultData.fats,
//         carbs: resultData.carbs,
//       });
//     } catch (err) {
//       setError("Failed to fetch nutrition info. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />

//         <Route
//           path="/track"
//           element={
//             <div className="min-h-screen w-full flex flex-col p-6 bg-green-50">
//               {/* Page Content */}
//               <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
//                 Calorie Tracker
//               </h1>

//               <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
//                 {/* Input Form */}
//                 <div className="w-full md:w-1/2 flex-shrink-0">
//                   <InputForm onResult={handleResult} />
//                   {loading && (
//                     <p className="text-blue-500 mt-2 text-center">Calculating...</p>
//                   )}
//                   {error && (
//                     <p className="text-red-500 mt-2 text-center">{error}</p>
//                   )}
//                 </div>

//                 {/* Result Show */}
//                 <div className="w-full md:w-1/2 flex-shrink-0">
//                   <ResultShow data={result} />
//                 </div>
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import InputForm from "./components/InputForm";
import ResultShow from "./components/ResultShow";

const App = () => {
  const [result, setResult] = useState({
    raw: "Your meal report will appear here",
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResult = async (data) => {
    // ✅ If reset (Clear button) → no backend call
    if (data.raw === "Your meal report will appear here") {
      setResult(data);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food: data.raw }),
      });

      if (!res.ok) throw new Error("Backend error");

      const resultData = await res.json();

      setResult({
        raw: data.raw,
        calories: resultData.calories ?? 0,
        proteins: resultData.proteins ?? 0,
        fats: resultData.fats ?? 0,
        carbs: resultData.carbs ?? 0,
      });
    } catch (err) {
      setError("Failed to fetch nutrition info. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/track"
          element={
            <div className="min-h-screen w-full flex flex-col p-6 bg-green-50">
              {/* Page Content */}
              <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
                Meal Tracker
              </h1>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                {/* Input Form */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <InputForm onResult={handleResult} />
                  {loading && (
                    <p className="text-blue-500 mt-2 text-center">Calculating...</p>
                  )}
                  {error && (
                    <p className="text-red-500 mt-2 text-center">{error}</p>
                  )}
                </div>

                {/* Result Show */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <ResultShow data={result} />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
