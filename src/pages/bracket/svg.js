import React from 'react'
import './style.css'

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
  return (
    <g key={index} transform={`translate(${x} ${y})`} className="bracket-line-container">
      <path d={d} className="bracket-line" data-line-length="68" />
    </g>
  )
}

const Bracket = ({
    data
}) => {
    const maxRound = data && data.match ? Number(data.match.p) : 0
    const player = data && data.match ? Number(data.match.numPlayers) : 0
    let g = []
    let X = 244
    let Y = player <= 8 ? 54 : 54*0.5
    // const maxRound = Math.log2(player)
    console.log('Bracket ', maxRound, player)
    let arr = []
    for(let i=0; i< maxRound; i++){
      if(i===0){
        arr[i]=[]
        for(let j=0; j< player; j++){
          if (j%2===1) {
              arr[i].push(j)
              g.push(
                GBracket({
                  x: (i*X),
                  y: (j*Y),
                  match: j+1,
                  index: `${i}${j}`
                })
              )
          }
        }
      }
      if(arr[i].length && i+1 < maxRound){
        arr[i+1]=[]
        for(let k=0; k< arr[i].length; k++){
        const data = arr[i]
        if(k%2===0){
          let adder = Math.pow(2, i)
          if(i+2 === maxRound) {
            let hasil = data[1]-data[0]
            arr[i+1].push(hasil)
            g.push(
              GBracket({
                x: ((i+1)*X),
                y: (hasil*Y),
                match: hasil+1,
                index: `${i+1}${hasil}`
              })
            )
          } else {
            let hasil = data[k]+adder
            hasil = hasil%2===1 ? hasil+1 : hasil
            arr[i+1].push(hasil)
            g.push(
              GBracket({
                x: ((i+1)*X),
                y: (hasil*Y),
                match: hasil+1,
                index: `${i+1}${hasil}`
              })
            )
          }
        }
        }
      }
    }
    return (
        <g>
            {g}
        </g>
    )
}

const Connector = ({
    data
}) => {
    console.log('Data Connector ', data)
    const maxRound = data && data.match ? Number(data.match.p) : 0
    const player = data && data.match ? Number(data.match.numPlayers) : 0
    // const maxRound = Math.log2(player)

    let Y = player <= 8 ? 27 : 27*0.5

    let c = []
    let arrC = []
    for(let r = 0, length2 = maxRound; r < length2; r++){
      if (r===0) {
        arrC[r] =[]
        for(let i=0; i< player; i++){
          const underE = i=== player-1 && player === 8
          if(player<=8) {
            if(i === 0 || underE){
              i = underE? i+1 : i
              const adder = 3
              const a = ((i + adder)*Y)
              const b = ((i+ 2 + adder)*Y)
              arrC[r].push(a,b)
              c.push(
                GConnector({
                  x: 0,
                  y: a,
                  index: `${a}${b}`,
                  d: "M 228 1 L 236 1 L 236 54"
                })
              )
              c.push(
                GConnector({
                  x: 0,
                  y: b,
                  index: `${b}${a}`,
                  d: "M 228 53 L 236 53 L 236 1 L 244 1"
                })
              )
            }
          } else {
            if (i === 0 || (i+1)%4 === 1){
              const adder = 3
              const a = ((i*2 + adder)*Y)
              const b = ((i*2+ 2 + adder)*Y)
              arrC[r].push(a,b)
              c.push(
                GConnector({
                  x: 0,
                  y: a,
                  index: `${a}${b}`,
                  d: "M 228 1 L 236 1 L 236 54"
                })
              )
              c.push(
                GConnector({
                  x: 0,
                  y: b,
                  index: `${b}${a}`,
                  d: "M 228 53 L 236 53 L 236 1 L 244 1"
                })
              )
            }
          }
        }
      }
      if (r+2 < maxRound) {
        if (arrC[r].length) {
          arrC[r+1] = []
          for(var i = 0, length3 = arrC[r].length/2; i < length3; i++){
            const data = arrC[r]
            const hasil = (data[i]*2)-Y
            const pathHasil = Math.pow(2, r) * (4*Y)
            if (i%2===0) {
              arrC[r+1].push(hasil)
              c.push(
                GConnector({
                  x: (r+1)*244,
                  y: hasil,
                  index: `${(r+1)*244}${hasil}`,
                  d: `M 228 1 L 236 1 L 236 ${pathHasil}`
                })
              )
            }
            if (i%2===1) {
              arrC[r+1].push(hasil)
              c.push(
                GConnector({
                  x: (r+1)*244,
                  y: hasil,
                  index: `${(r+1)*244}${hasil}`,
                  d: `M 228 ${pathHasil-1} L 236 ${pathHasil-1} L 236 1 L 244 1`
                })
              )
            }
          }
        }
      }
    }
    return (
        <g>
            {c}
        </g>
    )
  }

class Test extends React.PureComponent {
  render() {
    const { data } = this.props
    const round = data && data.match ? Number(data.match.p) : 0
    const player = data && data.match ? Number(data.match.numPlayers) : 0
    // const round = Math.log2(player)
    console.log('DATAAAAAAA ', data)
    return (
        <svg className="bracket-svg" width={round*244} height={player*108} viewBox={`-0 0 ${round*244} ${player*108}`}>
          <g className="parent">
            <Connector data={data} />
            <Bracket data={data} />
          </g>
        </svg>
    )
  }
}

export default Test
