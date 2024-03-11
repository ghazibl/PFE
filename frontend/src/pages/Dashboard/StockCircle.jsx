import React from 'react'
import './StockCircle.css'

const StockCircle = () => {
  return (
    <div className='container'>
      <div className='progress' style={{ "--i": 85, "--clr": "#43f94a" }}> 
      <h3>85<span>%</span></h3>
      <h4>Stock</h4>
      </div>
      <div className='progress' style={{ "--i": 85, "--clr": "#2ccde9" }}> 
      <h3>85<span>%</span></h3>
      <h4>Stock</h4>
      </div>
      <div className='progress' style={{ "--i": 85, "--clr": "#fb297b" }}> 
      <h3>85<span>%</span></h3>
      <h4>Stock</h4>
      </div>
      <div className='progress' style={{ "--i": 85, "--clr": "#ffe047" }}> 
      <h3>85<span>%</span></h3>
      <h4>Stock</h4>
      </div>
      
  </div>
  
  
  )
}

export default StockCircle
