import React from 'react';

const SearchFilter = ({ search, setSearch, filter, setFilter,countries,setCountries}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries=(value)=>{
     const sortCountry=[...countries].sort((a,b)=>{
      return value==="asc"
      ?
      a.name.common.localeCompare(b.name.common):
      b.name.common.localeCompare(a.name.common);
     });

     setCountries(sortCountry)

    };

  

  return (
    <div className='flex flex-row justify-between' >
      <section className="  w-full mb-8 flex flex-row justify-between gap-6 text-white
       ">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
        <button 
        className='rounded-xl border-1 p-3'
        onClick={()=>sortCountries("asc")}>
          Asc
          </button>

          <button 
          className='rounded-xl border-1 p-3'
          onClick={()=>sortCountries("des")}>
          Desc
          </button>

        <div >
          <select
            className="bg-black border rounded p-2"
            value={filter}
            onChange={handleSelectChange} // Fixed the onChange handler
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default SearchFilter;
