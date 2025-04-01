import React, { useState } from "react";

const CarbonFootprintTracker = () => {
  const [commute, setCommute] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [diet, setDiet] = useState("Vegan");
  const [footprint, setFootprint] = useState(null);

  const calculateFootprint = (e) => {
    e.preventDefault();
    let commuteEmissions = commute * 0.12; // Approx CO₂ per km for a car
    let electricityEmissions = electricity * 0.5; // Approx CO₂ per kWh
    let dietFactor = diet === "Vegan" ? 1.5 : diet === "Vegetarian" ? 1.8 : 2.5;
    let totalEmissions = commuteEmissions + electricityEmissions + dietFactor;
    setFootprint(totalEmissions.toFixed(2));
  };

  return (
    <div className="min-h-screen mt-10 text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Carbon Footprint Tracker</h1>
      
      {/* Input Form */}
      <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Calculate Your Carbon Footprint</h2>
        <form className="space-y-4" onSubmit={calculateFootprint}>
          <div>
            <label className="block font-medium">Daily Commute (km)</label>
            <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter km" 
              value={commute} onChange={(e) => setCommute(Number(e.target.value))} />
          </div>
          <div>
            <label className="block font-medium">Electricity Usage (kWh per day)</label>
            <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter kWh" 
              value={electricity} onChange={(e) => setElectricity(Number(e.target.value))} />
          </div>
          <div>
            <label className="block font-medium">Diet Type</label>
            <select className="w-full p-2 border rounded-md" value={diet} onChange={(e) => setDiet(e.target.value)}>
              <option>Vegan</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Calculate
          </button>
        </form>
        {footprint !== null && (
          <p className="mt-4 text-lg font-semibold text-center">Your estimated carbon footprint: {footprint} kg CO₂/day</p>
        )}
      </div>

      {/* Leaderboard */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
        <ul className="bg-gray-100 p-4 rounded-lg shadow-md">
          <li className="flex justify-between p-2 border-b"><span>1. User A</span> <span>200 kg CO₂</span></li>
          <li className="flex justify-between p-2 border-b"><span>2. User B</span> <span>220 kg CO₂</span></li>
          <li className="flex justify-between p-2"><span>3. User C</span> <span>250 kg CO₂</span></li>
        </ul>
      </div>
    </div>
  );
};

export default CarbonFootprintTracker;