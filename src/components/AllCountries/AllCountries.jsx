import React, { useState, useEffect } from 'react'
import { baseUrl } from './../util/api';
import Search from './../Search/Search';
import FilterCountry from './../FilterCountry/FilterCountry';
import { Link } from 'react-router-dom';



const AllCountries = () => {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

  

    const getAllCountries = async() =>{      
        try{
            const res = await fetch(`${baseUrl}all`);
            if(!res.ok) throw new Error('something went wrong!')
            const data = await res.json();
            // console.log(data);
            setCountries(data)
            
            setIsLoading(false)

        }catch(error){
            setIsLoading(false)
            setError(error.message)
    }
}  
useEffect(() => {
    getAllCountries()
}, [])   
    
    const getCountryByName = async(countryName) =>{
        try{
            const res = await fetch(`${baseUrl}name/${countryName}`);
            if(!res.ok) throw new Error('Not found any country!')
            const data = await res.json();
            // console.log(data);
           
            setCountries(data)
            setIsLoading(false)
            
        }catch(error){
            setIsLoading(false)
            setError(error.message)
        }
    }

    const getCountryByRegion = async(region)=>{
        try{
            const res = await fetch (`${baseUrl}region/${region}`);
            if(!res.ok) throw new Error('Failed...........')
            const data = await res.json();
            // console.log(data);

            setCountries(data);
            setIsLoading(false);

        }catch(error){
            setIsLoading(false);
            setError(false)
        }
    }
    

  return (
    <>
    <div className="d-flex justify-content-between align-items-center">
        <Search onSearch={getCountryByName} isLoading={isLoading} error={error} />
        <FilterCountry filter={getCountryByRegion} isLoading={isLoading} error={error} />
    </div>
    
    <div className="row my-5">
        {isLoading && !error && <h4> Loading....</h4>}
        {error && !isLoading && <h4>{error}</h4>}
        {
            countries?.map((country)=>(
                
                    <div className="detail col-md-4 col-lg-3 g-4 my-5">
                        <Link className="country-detail" to= {`/country/${country.name.common}`}>
                            <h3 className='fs-4  my-3'>{country.name.common}</h3>
                            <img className='img-fluid h-75' src={country.flags.png} alt="" />
                            <div className="info p-3 ">
                                <h6 className=''>Capital: {country.capital}</h6>
                                <h6>Population: {country.population}</h6>
                                <h6>Region: {country.region}</h6>
                            </div>
                        </Link>
                    </div>
                
            ))
        }
      
    </div>
    
    </>
  )
}



export default AllCountries