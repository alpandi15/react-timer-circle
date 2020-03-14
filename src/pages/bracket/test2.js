import React from 'react'
import './style.css'
import data from './data.json'

const Y = 54
const X = 244

const GBracket = ({
  x = 0,
  y = 0,
  name="Team A",
  match = 1,
  index
}) => {
  return (
    <g key={index} transform={`translate(${x} ${y})`} className="match -pending " data-identifier="3">
      <defs>
        <clipPath id="match-clippath-3">
          <rect x="26" y="5" width="200" height="45" rx="3" ry="3" />
        </clipPath>
      </defs>
      <text x="11" y="31" width="24" height="10" textAnchor="middle" className="match--identifier">
        {match}
      </text>
      <rect x="24" y="3" width="204" height="49" rx="3" ry="3" className="match--wrapper-background " />
      <rect x="26" y="5" width="200" height="45" rx="3" ry="3" className="match--base-background" />
      <g clipPath="url(#match-clippath-3)">
        <svg x="0" y="5" className="match--player">
          <title />
          <defs>
            <clipPath id="clipPath5962985">
              <rect x="50" y="0" width="143" height="22" />
            </clipPath>
            <clipPath id="portraitClipPath5962985">
              <path />
            </clipPath>
          </defs>
          <path d="M 50 0 h 147 v 22 h -147 Z" className="match--player-background -empty" />
          <path d="M 26 0 h 24 v 22 h -24 Z" className="match--seed-background" />
          <text x="38" y="14" width="10" height="12" textAnchor="middle" className="match--seed">
          0
          </text>
          <text clipPath="url(#clipPath2191076)" x="55" y="15" width="147" height="12" textAnchor="start" className="match--player-name ">
            {name}
          </text>
        </svg>
        <svg x="0" y="28" className="match--player">
          <title />
          <defs>
            <clipPath id="clipPath9319160">
              <rect x="50" y="0" width="143" height="22" />
            </clipPath>
            <clipPath id="portraitClipPath9319160">
              <path />
            </clipPath>
          </defs>
          <path d="M 50 0 h 147 v 22 h -147 Z" className="match--player-background -empty" />
          <path d="M 26 0 h 24 v 22 h -24 Z" className="match--seed-background" />
          <text x="38" y="14" width="10" height="12" textAnchor="middle" className="match--seed">
            1
          </text>
          <text clipPath="url(#clipPath2191076)" x="55" y="15" width="147" height="12" textAnchor="start" className="match--player-name ">
            {name}
          </text>
        <line x1="26" y1="-0.5" x2="226" y2="-0.5" className="match--player-divider" />
        </svg>
      </g>
    </g>
  )
}

const GConnector = ({
  x = 0,
  y = 0,
  index,
  d = "M 228 53 L 236 53 L 236 1 L 244 1"
}) => {
  // M 228 1 L 236 1 L 236 54
  return (
    <g key={index} transform={`translate(${x} ${y})`} className="bracket-line-container">
      <path d={d} className="bracket-line" data-line-length="68" />
    </g>
  )
}

class Test extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      player: data.match.numPlayers,
      round: data.match.p
    }
  }
  componentDidMount () {

  }

  bracket () {
    console.log('Position ', data)
    let g = []
    let dataBracket = data.winnerBracket.Winner
    const keys =  Object.keys(dataBracket)
    console.log('DATA ', dataBracket)
    console.log('INDEX ', keys.indexOf('Round 1'))
    const { player, round } = this.state
    let loop = 0;
    for (let r = 0; r < round; r++) {
      for(let i = 0; i < dataBracket[keys[r]].length; i++) {
        g.push(
          GBracket({
            x: (r*X),
            y: Y*(2*i),
            match: i+1,
            index: i*r
          })
        )
      }
      console.log('Loop ', loop)
      loop += 1
    }

    return g
  }

  connector () {
    let c = []
    const { match } = this.state
    let PCount = match * 2
    for(let i=0; i<PCount; i++){
      const underE = i=== PCount-1 && PCount === 8
      if(PCount<=8) {
        if(i === 0 || underE){
          i = underE? i+1 : i
          const a = (i+1) * 27
          const b = (i+3) * 27
          console.log(a,b)
          c.push(
            GConnector({
              x: 0,
              y: a,
              index: i,
              d: "M 228 1 L 236 1 L 236 54"
            })
          )
          c.push(
            GConnector({
              x: 0,
              y: b,
              index: i,
              d: "M 228 53 L 236 53 L 236 1 L 244 1"
            })
          )
        }
      } else {
        if (i === 0 || (i+1)%4 === 1){
          const a = (i+1) * 27
          const b = (i+2) * 27
          console.log(a,b)
          c.push(
            GConnector({
              x: 0,
              y: a,
              index: i,
              d: "M 228 1 L 236 1 L 236 54"
            })
          )
          c.push(
            GConnector({
              x: 0,
              y: b,
              index: i,
              d: "M 228 53 L 236 53 L 236 1 L 244 1"
            })
          )
        }
      }
    }
    return c
  }

  render() {
    const { player, round } = this.state
    return (
      <div>
        <svg className="bracket-svg" width={round*244} height={player*108} viewBox={`-0 0 ${round*244} ${player*108}`}>
          <g className="parent">
            <g>
            </g>

            <g>
              {this.bracket()}
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Test
