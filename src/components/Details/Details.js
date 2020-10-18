import React from 'react'
import EnvironmentImage from './environment.png'
import FurnitureTypeImage from './furniture-type.png'
import FurnitureFunctionImage from './furniture-function.png'

const EditableImageCard = ({ imagePath, key }) => {
  return (
    <div key={key}>
      <img className="caption-image" src={imagePath}></img>
    </div>
  )
}

// const Quantity = () => {
//   return (
//
//   )
// }

class Details extends React.Component {
  render () {
    const imageArr = [EnvironmentImage, FurnitureTypeImage, FurnitureFunctionImage]

    return (
      <div className="image-container">
        {imageArr.map((img, i) => {
          return <EditableImageCard key={i} imagePath={img}/>
        })
        }
      </div>
    )
  }
}

export default Details
