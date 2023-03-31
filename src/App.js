
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllCountries from './components/AllCountries/AllCountries';
import CountryInfo from './components/CountryInfo/CountryInfo';


function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className=' text-center my-4'>Where In The World</h1>
        
      </div>  
      <Routes>
        <Route path='/' element={<AllCountries/>}></Route>
        <Route path='/country/:countryName' element={<CountryInfo/>}></Route>
      </Routes>
         
    </div>
  );
}

export default App;
