import React, {useState} from 'react'

function Search({history}) {

    const [keyword, setKeyWord] = useState('');

    const searchHandler = (e) => {
        e.preventDeafult()

        if(keyword){
            history.pushState(`/search/${keyword}`)
        }else{
            history.pushState(`/`)
        }
    }


  return (

    <form onSubmit={searchHandler}>
        <div className='inputGroup'>
        <input
            type='text'
            id='searchField'
            className='formControl'
            placeholder='Enter Product Name'
            onChange={(e) => setKeyWord(e.target.value)}
            >
        </input>
        <div className='intputGroupAppend'>
            <button
                id='searchBtn'
                className='btn'
            >
                <i className='fa fa-search'  aria-hidden = 'true' ></i>
               
            </button>

        </div>
    </div>
    </form>
    
    
  )
}

export default Search