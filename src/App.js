import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState,useEffect} from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [PunkListData , setPunkListData] = useState([])
  const [selectedPunk , setSelectedPunk] =useState(0)

  console.log(PunkListData[0])

  useEffect(()=>{
    const getmyNFTs = async () => {
      // const openseaData = await axios.get('https://cors-anywhere.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0x4D35f7FAC082f89F7D8A5bD6E5F7Cbf332E4eE72&order_direction=asc'

    const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xc6d300660083444e50a4D0AAE46C44AC2BB078e6&order_direction=asc'
      )
      setPunkListData(openseaData.data.assets)
      // console.log(openseaData.data.assets)


    }
    return getmyNFTs()



  },[])



  return (
    <div className="app">
    <Header/>


    <Main PunklistData={PunkListData} />
    <Punklist PunklistData={PunkListData} setSelectedPunk={setSelectedPunk}/>   
{/* 
{
      
      PunkListData.length > 0 && (
       <>
       <Main PunklistData={PunkListData} selectedPunk={selectedPunk}/>
       <Punklist PunklistData={PunkListData} setSelectedPunk={setSelectedPunk} 
       />
       </>
      )
    } */}
      </div>
  )
}

export default App;
