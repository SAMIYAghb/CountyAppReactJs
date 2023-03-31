import React ,{useState, useEffect}from 'react'
import { useParams, Link } from 'react-router-dom'
import { baseUrl } from '../util/api';


const CountryInfo = () => {

  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  let {countryName} = useParams();


  const getCountryDetails =async()=>{
    try{
      const res = await fetch(`${baseUrl}name/${countryName}`)
      if(!res.ok) throw new Error('Could not found!')
      const data = await res.json();

      setCountry(data)
      setIsLoading(false)
      // console.log(data);
    }catch(error){
      setIsLoading(false)
      setError(error.message)
    }
      
  }
  useEffect(() => {
    getCountryDetails()
  }, [countryName])
 

  return (
    <>
    <button className='btn mb-5'><Link to='/' className='back'>Back</Link></button>
        {isLoading && !error && <h4> Loading....</h4>}
        {error && !isLoading && <h4>{error}</h4>}
        {
          country?.map((country, index)=>(
            <div key={index}className="country-info row border">
              <div className="col">
                          <h3 className='fs-4'>{country.name.common}</h3>
                          <img className='img-fluid h-75' src={country.flags.png} alt="" />
                                    
              </div>
              <div className="col my-5">
              <div className="info p-3 ">
                                          <h6 className=''>Capital: {country.capital}</h6>
                                          <h6>Population: {country.population}</h6>
                                          <h6>Region: {country.region}</h6>
                                          <h6>Sub Region: {country.subregion}</h6>
                                    </div>
              </div>
                          
     
            </div>
          ))
        }
    

    </>
  )
}

export default CountryInfo
