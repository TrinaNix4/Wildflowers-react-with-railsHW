import React, {useEffect, useState} from 'react';
import axios from 'axios'

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [wildflowers, setWildflowers] = useState([]);
  //when this component renders to the DOM (mounts), i want to get the facts (use useEffect to do this) 
  //1st argument it takes is a callback func./ 2nd arg. is an empty array
  useEffect(()=>{ 
   console.log('DP mounted')
   getWildflowers();
  },[])  
      //callback func runs when component mounts 
  const getWildflowers = async () => {
    //axios call; asynchornous because might take time to get data back
    try{
      let res = await axios.get('/api/wildflowers/')
      //axios gives data back as object with data key
      console.log(res)
      setWildflowers(res.data)
    }catch(err){
      alert('error getting wildflowers')
      console.log(err.response.data)
    }
  }
//DELETE - 1-need to remove from DB
//2- need to remove it from state (or front end)
//3- need to hookup button click 

const deleteWildflower = async(id) => {
try{
  //this is step 1 remove from DB
  let res = await axios.delete(`/api/wildflowers/${id}`)
  //this is step 2 - needs to be done secondly cause user might think deleted but it actually wasn't
  let filteredWildflowers = wildflowers.filter(f => f.id !== res.data.id)
  setWildflowers(filteredWildflowers)
}catch(err){
  alert('err in delete function')
}
}
  //create an object that will be 'global state'
  const wildflowerProviderThing = {
    getWildflowers, 
    setWildflowers,
    wildflowers, 
    deleteWildflower

  };
  return(
    <DataContext.Provider value={wildflowerProviderThing}>
      {props.children}

    </DataContext.Provider>
  );
};
export default DataProvider; 
