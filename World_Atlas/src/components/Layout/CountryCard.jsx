import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="h-full">
      <div className="relative border-2 border-transparent bg-gradient-to-r from-stone-700 to-stone-900 rounded-[30px] p-6 flex flex-col items-center text-white">
        {/* Fixed flag size */}
        <img
          src={flags.svg}
          alt={flags?.alt || "Country flag"}
          className="w-full h-32 object-cover rounded-lg mb-4"
        />

        {/* Text container */}
        <div className="text-center space-y-2">
          <p className="font-semibold text-lg">
            {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
          </p>
          <p>
            <span className="font-semibold">Population: </span>
            {population ? population.toLocaleString() : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital?.[0] || "N/A"}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="px-5 py-2  border border-gray-400 text-white   rounded-full  hover:bg-gray-700 transition">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
