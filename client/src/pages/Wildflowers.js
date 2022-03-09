import React, {useContext, useEffect } from 'react';
import {DataContext} from '../providers/DataProvider'
import Wildflower from './Wildflower';

const Wildflowers = (props) => {
  const {wildflowers} = useContext(DataContext)
  useEffect(()=>{
    //runs when component mounts
    console.log('Wildflowers mounted')
  },[])
  const renderWildflowers = () => {
    return wildflowers.map((flower)=>{
     return <Wildflower key={flower.id} {...flower}
             
              />
    })
  }
  return(
    <div className='border'>
      <h1>Wildflowers to find:</h1>
    <div className='border'>
      <code>{renderWildflowers()}</code>
     </div>
     
     {/* <div className='border'>
      <code>{JSON.stringify(wildflowers)}</code>
      </div> */}
  </div>
  )
}

export default Wildflowers; 