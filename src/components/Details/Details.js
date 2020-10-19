import React from 'react'
import Address from '../Address/Address.js'
import DimensionsInput from '../DimensionsInput/DimensionsInput.js'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo.js'
import EnvironmentImage from './environment.png'
import FurnitureTypeImage from './furniture-type.png'
import FurnitureFunctionImage from './furniture-function.png'
import DropdownImage from './dropdown.png'
import SliderImage from './slider.png'
import DepositImage from './deposit.png'

const EditableImageCard = ({ imagePath, key }) => {
  return (
    <div key={key}>
      <img className="caption-image" src={imagePath}></img>
    </div>
  )
}

const Quantity = () => {
  return (
    <div>
      <h5 className="feature-title">Quantity</h5>
      <img className="dropdown-image" src={DropdownImage} alt="Dropdown" />
    </div>
  )
}

const Budget = () => {
  return (
    <div>
      <h5 className="feature-title">Budget</h5>
      <img className="slider-image" src={SliderImage} alt="Slider" />
    </div>
  )
}

const Dimensions = () => {
  return (
    <div>
      <h5 className="feature-title">Size & Dimensions</h5>
      <DimensionsInput />
    </div>
  )
}

const Shipping = () => {
  return (
    <div>
      <h5 className="feature-title">Shipping Address</h5>
      <Address />
    </div>
  )
}

const Info = () => {
  return (
    <div>
      <h5 className="feature-title">Additional Info</h5>
      <AdditionalInfo />
    </div>
  )
}

const Deposit = () => {
  return (
    <div>
      <img className="deposit-image" src={DepositImage} alt="Deposit" />
    </div>
  )
}

class Details extends React.Component {
  render () {
    const imageArr = [EnvironmentImage, FurnitureTypeImage, FurnitureFunctionImage]

    return (
      <div className="container">
        <div className="image-container">
          {imageArr.map((img, i) => {
            return <EditableImageCard key={i} imagePath={img}/>
          })
          }
        </div>
        <Quantity />
        <Budget />
        <Dimensions />
        <Shipping />
        <Info />
        <Deposit />
      </div>
    )
  }
}

export default Details
