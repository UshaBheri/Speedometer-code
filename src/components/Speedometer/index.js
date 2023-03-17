// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.speed}`)
      const speed = 0
      if (speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return {speed: prevState.speed}
    })
  }

  onApplyBrake = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.speed}`)
      const speed = 0
      if (speed > 0) {
        return {count: prevState.speed - 10}
      }
      return {count: prevState.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="heading">SPEEDOMETER</h1>
        <h1 className="head">Speed is {speed} 0mph</h1>
        <p className="limit">Min Limit is 0mph,Max Limit is 200mph</p>
        <div>
          <button className="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
