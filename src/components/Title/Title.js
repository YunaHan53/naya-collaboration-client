import React from 'react'
import ProgressBarImage from './progressbar.png'

const ProgressBar = () =>
  <div>
    <img className="image" src={ProgressBarImage}></img>
  </div>

class Title extends React.Component {
  render () {
    return (
      <div>
        <h2 className="title">Home Office Desk</h2>
        <ProgressBar />
      </div>
    )
  }
}

export default Title
