import React from 'react'
import StyleKeywordsImage from './style-keywords.png'
import Image from './image.png'
import SketchImage from './sketch.png'
import DepositImage from './deposit.png'

const Style = () => {
  return (
    <div>
      <h5>Furniture Style</h5>
      <img className="style-keywords-image" src={StyleKeywordsImage} alt="Style Keywords" />
    </div>
  )
}

const ImageCard = ({ imagePath, key }) => {
  return (
    <div key={key}>
      <img className="caption-image" src={imagePath}></img>
    </div>
  )
}

const Sketch = () => {
  return (
    <div>
      <h5>Your Sketch</h5>
      <img className="sketch-image" src={SketchImage} alt="Sketch" />
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

class Moodboard extends React.Component {
  render () {
    const imageArr = [Image, Image, Image, Image]

    return (
      <div className="container">
        <Style />
        <h5>Imagery</h5>
        <div className="image-container">
          <br /><br />
          {imageArr.map((img, i) => {
            return <ImageCard key={i} imagePath={img}/>
          })
          }
        </div>
        <div className="image-container">
          <br /><br />
          {imageArr.map((img, i) => {
            return <ImageCard key={i} imagePath={img}/>
          })
          }
        </div>
        <Sketch />
        <Deposit />
      </div>
    )
  }
}

export default Moodboard
