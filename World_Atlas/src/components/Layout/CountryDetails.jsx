import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../Ui/Loader";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);

  if (isPending) return <Loader />;
  

  console.log(params);
  return (
    <section className="w-[1800px]  m-2 p-10 rounded-lg bg-[#2a2a2a] shadow-lg transition-transform duration-300 ease-in hover:scale-105 max-w-[55rem] mx-auto">
      <div className="bg-[#2a2a2a] rounded-lg p-4 shadow-md w-full">
        {country && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 ">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full max-w-[30rem] h-auto"
            />
            <div className="country-content">
              <p className="text-2xl font-bold text-white mb-4">
                {country.name.official}
              </p>

              <div className="infoContainer">
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Population:</span>
                  {country.population.toLocaleString()}
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Region:</span>
                  {country.region}
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Sub Region:</span>
                  {country.subregion}
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Capital:</span>
                  {country.capital}
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Currencies:</span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="font-semibold">Languages:</span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <NavLink to="/country" className="backBtn">
          <button className="px-5 py-2 border border-gray-400 text-white rounded-full hover:bg-gray-700 transition">
       Go Back
      </button>

          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;