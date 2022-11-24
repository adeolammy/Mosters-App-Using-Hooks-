import { useState, useEffect, useCallback } from 'react';

/////////////////////////////////////
// COMPONENT
/////////////////////////////////////
import CardList from './components/card-lists/card-list-component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';



const App = ()=>{

  const [searchField, setSearchField] = useState('');
  const [mosters, setMosters] = useState([]);
  const [filterMosters, setfilterMosters] = useState(mosters);

  const URL_FILTERED = 'https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
  fetch(URL_FILTERED)
    .then(res => res.json())
    .then(data => setMosters(data))
  },[])

  
  useEffect(()=>{
    const newfilterMosters = mosters.filter((item)=>{
        return item.name.toLowerCase().includes(searchField)
      })
      setfilterMosters(newfilterMosters)
  },[mosters,searchField])



  const onSearchChange = (e) => {
      const searchFieldString = e.target.value.toLowerCase()
      setSearchField(searchFieldString)              
    }

    
   return (
        <div className="App">  
          <h1 className='app-title'>MOSTERS ROLODEX</h1>

            <SearchBox 
              onChangeHandler = {onSearchChange} 
              placeholder="Search Mosters" 
              className = 'search-box'
            />                     
            <CardList mosters ={filterMosters}/>

        </div>
      );
}


export default App;
