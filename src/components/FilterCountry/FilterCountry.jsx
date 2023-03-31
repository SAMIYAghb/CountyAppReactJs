import React from 'react'

const FilterCountry = ({filter}) => {
    const selectHandler= (e) => {
        e.preventDefault();
         // Read the form data
        const form = e.target.value;
        // console.log(form);
        
        filter(form)
    }
  return (
    <>

    <form  onChange={selectHandler}>
        <select>
            <option>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>  

    </form>
    
    </>
  )
}

export default FilterCountry