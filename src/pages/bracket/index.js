import React from 'react'
import './style.css'
import SVG from './svg'
import { request } from '../../services/request'
import data from './data.json'

class Test extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      inputPlayer: 0,
      player: 0,
      data : data,
      success: false
    }
  }

  async onGenerate () {
    this.setState({
      success: true
    })
    const res = await request({
      method: 'post',  
      fullUrl: true,
      url: 'http://localhost:3000/tournament/bracket/double',
      auth: false,
      data: {
        player: Number(this.state.inputPlayer),
        isLong: false
      }
    })

    if (res.success) {
      this.setState({
        data: res.data
      })
    }

    this.setState({
      false: true
    })

  }

  render() {
    const { player, data } = this.state
    console.log('Response ', data)
    return (
      <div>
        <div>
          <input name="player" type="number" onChange={(el) => this.setState({ inputPlayer: el.target.value })} />
          <button onClick={() => this.onGenerate()}>GENERATE!</button>
        </div>
        {data && data.length !== 0 && <SVG data={data} /> }
      </div>
    )
  }
}

export default Test
