import React from 'react'


import './Home.css'
import ListeFacture from './ListeFacture'
import StockCircle from './StockCircle'
import Cards from './Cards'
import CommandeEnCours from './CommandeEnCours'

const Home = () => {
  return (
    <div className='home'>
    
      <Cards/>
      <CommandeEnCours/>
      <ListeFacture/>
      <StockCircle/>
      
      
    </div>
  )
}

export default Home

