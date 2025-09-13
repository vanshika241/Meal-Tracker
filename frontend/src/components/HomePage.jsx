import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-3 bg-green-200 shadow-md">
        <h1 className="text-2xl font-bold text-green-900">Meal Tracker</h1>
        <div className="flex gap-4 text-green-900 text-xl">
          <a href="https://github.com/vanshika241" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vanshika-chaudhary-704726259" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h2 className="text-5xl font-extrabold text-green-900 mb-4">
          Track Your Nutrition the Smart Way
        </h2>
         <blockquote className="italic text-red-700 mb-3 text-xl">
          "Take care of your body. It's the only place you have to live." – Jim Rohn
        </blockquote>
        {/* <p className="text-green-800 max-w-xl mb-6 ">
          Keep a healthy lifestyle by logging your meals and calculating calories instantly. 
          Stay on top of your nutrition with our easy-to-use Calorie Tracker.
        </p> */}
<p className="text-green-800 max-w-xl mb-6 text-xl">
  Meal Tracker instantly calculates your <strong>Calories</strong>, 
  tracks <strong>Proteins</strong> and <strong>Fats</strong>, 
  and gives smart <strong>Health Tips</strong> to guide your diet.
</p>


        {/* Button opens /track in a new tab */}
        <a href="/track" target="_blank" rel="noopener noreferrer">
          <button className=" px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md cursor hover:bg-green-700 transition cursor-pointer ">
            Track Now
          </button>
        </a>
      </section>

      {/* Optional Footer */}
      <footer className="text-green-900 text-center py-3 bg-green-200  font-semibold">
          Made with <span className="text-red-500">❤️</span>  for your health

      </footer>
    </div>
  );
};

export default HomePage;
