import React, { useEffect, useState } from 'react'
import dummy from '../assets/owner/punkhead.png'
import instalogo from '../assets/owner/instagram.png'
import twitterlogo from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'
import './Main.css'


const Main = ( {selectedPunk , PunklistData}) => {
  // const [activePunk ,setActivePunk] = useState( punklistData[0]);
  // const [activePunk, setActivePunk] = useState(punklistData[0])

  console.log(PunklistData[2])

  // useEffect(()=>{
  //   setActivePunk(punkListData[selectedPunk])


  // },[punkListData, selectedPunk])


  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkImage">
          <img src={dummy} alt=""/>
        </div>
        <div className="detailsContainer">
        <div className="punkDetails">
            <h2>Vandtta Guy <span  >.#2</span></h2>

            <div className="owner" >
              <div>
              <img src={dummy} alt="aa" className="ownerImage"/>
              <h4>0xBdD240B828cf0e8675c65cE3be3F263e08E48a37</h4>
              <h6>@Shapater9211</h6>
              </div>

              <div className="links">
                <img src={instalogo} alt=""/>
                <img src={twitterlogo} alt=""/>
                <img src={more} alt=""/>



              </div>

            </div>
            
        </div>
        </div>
       

        </div>
    </div>
  )
}

export default Main 
