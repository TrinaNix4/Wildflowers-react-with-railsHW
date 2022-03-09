import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider';

const Wildflower = (props) => {
  const {deleteWildflower} = useContext(DataContext)
  const navigate = useNavigate()
  const {id, common_name, scientific_name, description} = props
  return(
    <div className='border'>
      <h1>{common_name}</h1>
      <p>Scientific name: {scientific_name}</p>
      <p>Description: {description}</p>
      <p>ID:{id}</p>
      <div className='border' style={{display:'flex', justifyContent:'space-around'}}>
         <p onClick={()=>navigate(`/wildflowers/${id}/edit`)}>edit</p> 
        <p onClick={()=>navigate(`/wildflowers/${id}`)}>show</p>
        <p onClick={()=>deleteWildflower(id)}>delete</p>
       
      </div>
    </div>
  )
}

export default Wildflower; 