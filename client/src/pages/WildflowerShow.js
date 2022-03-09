import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { DataContext } from '../providers/DataProvider';
import axios from 'axios'



const WildflowerShow = (props) => {
  useEffect(()=> {
        getWildflowerFromProvider()
        getWildflowerFromAPI()
  }, [])
  const params = useParams()
  //3 ways to get this wildflower data for 'edit'
  //prefer from the API 
  // 1- through our provider 
    const [wildflowerFromDataProvider, setWildflowerFromDataProvider]= useState(null);
    const{wildflowers} = useContext(DataContext)
    const [wildflowerFromAPI, setWildflowerFromAPI] = useState(null)
    
//2nd way from the API 
    const getWildflowerFromAPI = async()=>{
        try{
          let res = await axios.get(`/api/wildflowers/${params.id}`)
          setWildflowerFromAPI(res.data)
        }catch(err){
          alert('err')
        }
    } 
    //3rd way - from the router 
const getWildflowerFromProvider =()=> {
      let wildflower = wildflowers.find(f=> f.id === parseInt(params.id))
      setWildflowerFromDataProvider(wildflower)
    }
    return(
    <div className='border'>
      <h1>WildflowerShow</h1>
      <p>id: {params.id}</p>
      <code>{JSON.stringify(wildflowerFromDataProvider)}</code>
    </div>
  )
}

export default WildflowerShow; 