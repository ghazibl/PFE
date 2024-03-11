import React from 'react'
import Banniere from './Banniere/Banniere';
import Projets from './Projets/Projets';
import Produits from './Produits/Produits';
import Accessoire from './Accessoires/Accessoire';

const Landing = () => {
  return (
    <div>
      <Banniere/>
      <Produits/>
      <Accessoire/>
      <Projets/>
    </div>
  )
}

export default Landing

