import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

const Punklist = ({PunklistData , setSelectedPunk}) => {

  // console.log(PunklistData[2])

  return (
    <div className="punkList">
      {PunklistData.map(punk => (
        <div onClick= {()=> setSelectedPunk(punk.token_id)}>
          <CollectionCard
          key={punk.token_id}
          id ={punk.token_id}
          name ={punk.name}
          traits={punk.traits}
          image={punk.image_original_url}
          />
        </div>
      ))}
      
    </div>
  )
}

export default Punklist
