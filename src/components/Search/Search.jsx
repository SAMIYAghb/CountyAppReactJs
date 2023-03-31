import React,{useState} from 'react'


const Search = ({onSearch}) => {
    const [input, setInput] = useState('')

    const handelSubmit = (e)=>{
        e.preventDefault();   

        onSearch(input)
    }
  return (
    <>
    <form onSubmit={handelSubmit}>
        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Search country...'/>
       
    </form>
    
    </>
  )
}

export default Search