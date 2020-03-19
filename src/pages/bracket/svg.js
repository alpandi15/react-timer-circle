import React from 'react'
import './style.css'
let round1Lower =[]
let round2Lower =[]
let arrConnector =[]

const GBracket = ({
  x = 0,
  y = 0,
  nameA="",
  nameB="",
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
            {nameA}
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
            {nameB}
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
    const player = Math.pow(2,maxRound)
    // const byePlayer = data && data.match ? Number(player - data.match.numPlayers) : 0
    const dataPlayer = data && data.winnerBracket ? data.winnerBracket.Winner : {}
    const keyWinner = Object.keys(dataPlayer)
    let g = []
    let X = 244
    let Y = player <= 8 ? 54 : 54*0.5

    let arr = []
    for(let i=0; i< maxRound; i++){
      if(i===0){
        arr[i]=[]
        let indexPlayer = 0
        for(let j=0; j< player; j++){
          if (j%2===1) {
            let nameA, nameB
            const playerInfo = dataPlayer[keyWinner[i]][indexPlayer]
            nameA = playerInfo.pName[0] || playerInfo.p[0]
            nameB = playerInfo.pName[1] || playerInfo.p[1]

            indexPlayer++
            arr[i].push(j)
            if (!playerInfo.p.includes(-1)) {
              round1Lower.push(j)
              g.push(
                GBracket({
                  nameA,
                  nameB,
                  x: (i*X),
                  y: (j*Y),
                  match: j+1,
                  index: `${i}${j}`
                })
              )
            }
          }
        }
      }
      if(arr[i].length && i+1 < maxRound){
        arr[i+1]=[]
        let indexPlayer = 0
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
            let nameA, nameB
            const playerInfo = dataPlayer[keyWinner[i+1]][indexPlayer]
            nameA = playerInfo.pName[0] || playerInfo.p[0] || ''
            nameB = playerInfo.pName[1] || playerInfo.p[1] || ''
            indexPlayer++

            let hasil = data[k]+adder
            hasil = hasil%2===1 ? hasil+1 : hasil
            arr[i+1].push(hasil)
            if (i+1 === 1) {
              round2Lower.push(hasil)
            }
            g.push(
              GBracket({
                nameA,
                nameB,
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
    // console.log('Data Connector ', data)
    const maxRound = data && data.match ? Number(data.match.p) : 0
    const player = Math.pow(2,maxRound)
    const byePlayer = data && data.match ? Number(player - data.match.numPlayers) : 0
    const dataPlayer = data && data.winnerBracket ? data.winnerBracket.Winner : {}
    const keyWinner = Object.keys(dataPlayer)

    let Y = 27

    let c = []
    let arrC = []
    for(let r = 0, length2 = maxRound; r < length2; r++){
      if (r===0) {
        arrC[r] =[]
        let indexPlayer = 0
        for(let i=0; i< player; i++){
          const underE = i=== player-1 && player === 8
          if(player<=8) {
            console.log('i', i)
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
              const adder = 2
              const a = ((i + adder)*Y)
              const b = ((i+ 1 + adder)*Y)
              arrC[r].push(a,b)
            }
          }
          if (i%2===1) {
            const adder = indexPlayer % 2 === 1 ? 1 : 2
            const a = (indexPlayer*2+adder)*27
            const b = ((i+ 1 + 2)*Y)-81

            const playerInfo = dataPlayer[keyWinner[r]][indexPlayer]
            if (!playerInfo.p.includes(-1) && playerInfo.id.m % 2 === 1) {
              c.push(
                GConnector({
                  x: 0,
                  y: a,
                  index: `${a}${b}`,
                  d: `M 228 1 L 236 1 L 236 27 L 244 27`
                })
              )
            } if (!playerInfo.p.includes(-1) && playerInfo.id.m % 2 === 0) {
              c.push(
                GConnector({
                  x: 0,
                  y: a,
                  index: `${b}${a}`,
                  d: "M 228 26 L 236 26 L 236 1 L 244 1"
                })
              )
            }
            indexPlayer++
          }
        }
      }
      if (r+2 < maxRound) {
        if (arrC[r].length) {
          arrC[r+1] = []
          for(var i = 0, length3 = arrC[r].length/2; i < length3; i++){
            const data = arrC[r]
            const hasil = (data[i]*2)-Y
            const heighAdjust = player <= 8 ? 4 : 2
            const pathHasil = Math.pow(2, r) * (heighAdjust*Y)
            if (i%2===0) {
              arrC[r+1].push(hasil)
              c.push(
                GConnector({
                  x: (r+1)*244,
                  y: hasil,
                  index: `${(r+1)*244}${hasil}`,
                  d: `M 228 1 L 236 1 L 236 ${pathHasil} L 244 ${pathHasil}`
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

const BracketLower = ({
    data
}) => {
  // console.log('r1 r2', round1Lower, round2Lower)
    const maxRound = data && data.match ? Number(data.match.p) : 0
    const player = Math.pow(2,maxRound)
    // const byePlayer = data && data.match ? Number(player - data.match.numPlayers) : 0
    const p = data && data.match ? Number(data.match.p) : 0
    const dataPlayer = data && data.winnerBracket ? data.winnerBracket.Loser : {}
    const keyWinner = Object.keys(dataPlayer)
    let g = []
    let X = 244
    let Y = player <= 8 ? 54 : 54
    // console.log('Lower jalan', keyWinner.length)
    let arr = []
    arrConnector = []
    let adjustHeighA = 0
    let adjustHeighB = 1
    // let checkMe = []
    for(let i=0; i< keyWinner.length; i++){
      const playerPerRound = dataPlayer[keyWinner[i]]

      if (i%2 === 0) {
        if (i===0) {
          arr[i]=[]
          arrConnector[i]=[]
          arrConnector[i+1]=[]
          let nameA,nameB
          for(var j = 0, length2 = playerPerRound.length; j < length2; j++){
            const playerInfo = playerPerRound[j]
            // const playerInfoMirror = dataPlayer[keyWinner[i+1]][j]
            nameA = playerInfo.pName[0] || playerInfo.p[0] || ''
            nameB = playerInfo.pName[1] || playerInfo.p[1] || ''
            // console.log('playerI', playerInfoMirror, j, j+1)
            console.log('J', j, j+4,j+(2*4), j+(3*4))

          arr[i].push(j*Y)

          // console.log('roun_lower1', round1Lower.length > round2Lower.length? round1Lower.length - round2Lower.length : round1Lower.length)
          // console.log('roun_lower2', round1Lower.length > round2Lower.length? round2Lower.length : round2Lower.length/2)
          // first lower
          // rumus jika round 1 > round 2 upper
          // 
          // round1Lower = round1Upper - round2Upper and round2Lower = round2Upper
          // 
          // else round1Lower = round1Upper and round2Lower = round2upper / 2

          if (round1Lower.length < round2Lower.length) {
              // console.log('roun1', round1Lower, j)
            if (playerInfo.p.includes(0)) {
              arrConnector[i].push({y:j*Y, x:i*X})
              g.push(
                GBracket({
                  nameA: 'roun1',
                  nameB,
                  x: (i*X),
                  y: (j*Y),
                  match: j+1,
                  index: `${i}${j}`
                })
              )
            }
          } else {
            // console.log('roun1', round1Lower, j)
            if (round1Lower.includes((j+1)*4+1) || data.match.numPlayers %2 === 0) {
            // console.log('else', j, (j+1)*4+1, (((j+1)*4+1)- (j*2)))
            arrConnector[i].push({y: (((j+1)*4+1)- (j*2)-1)*27, x: i*X })
              g.push(
                GBracket({
                  nameA: (j+1)*4+1,
                  nameB,
                  x: (i*X),
                  y: (((j+1)*4+1)- (j*2)-1)*27,
                  match: j+1,
                  index: `${i}${j}`
                })
              )
            }
          }
          if (j%2===0 || round1Lower.length > round2Lower.length) {
            // console.log('roun2', round2Lower, j+2)
            arrConnector[i+1].push({ y: (j*Y)+27, x: (i+1)*X })
            g.push(
              GBracket({
                nameA:'round2',
                nameB,
                x: ((i+1)*X),
                y: (j*Y)+27,
                match: j+1,
                index: `${i+1}${j}`
              })
            )
          }
          }
        }
        const dataRound = arr[i]
        if (dataRound && dataRound.length && i < p) {
          arr[i+2] = []
          arrConnector[i+2]=[]
          arrConnector[i+3]=[]
          for(var k = 0, length3 = dataRound.length; k < length3; k++){
            if (k%2 === 0) {

              const hasil = dataRound[k] + dataRound[k+1]
              let nameA, nameB
              arr[i+2].push(hasil/2)
              // first lower
                  arrConnector[i+2].push({y: hasil/2, x: (i+2)*X })
                  g.push(
                    GBracket({
                      nameA: 'first',
                      nameB: adjustHeighB,
                      x: ((i+2)*X),
                      y: (hasil/2),
                      match: j+1,
                      index: `${i}${hasil/2}`
                    })
                  )
                // mirror lower
                // of maxPlayer 32 mirror /2
                // if (true) {}
                if (player > 16) {
                  if (k%4===2) {
                console.log('max player', player, k,i)
                      arrConnector[i+3].push({y: (hasil/2)-((i+2)*27), x: (i+3)*X })
                      g.push(
                        GBracket({
                          nameA: 'if'+adjustHeighA,
                          nameB,
                          x: ((i+3)*X),
                          y: (hasil/2)-((i+2)*27),
                          match: j+1,
                          index: `${i+3}${hasil/2}`
                        })
                      )          
                    }
                } else {
                  console.log('kok jalan')
                  arrConnector[i+3].push({y: (hasil/2), x: (i+3)*X })
                  g.push(
                    GBracket({
                      nameA: 'else'+adjustHeighA,
                      nameB,
                      x: ((i+3)*X),
                      y: (hasil/2),
                      match: j+1,
                      index: `${i+3}${hasil/2}`
                    })
                  )          
                }
              // console.log('i lower', i+3, k, adjustHeighA)
            }
          }
        }
      }
    }
    console.log('arr Lower conector', arrConnector)
    return (
        <g>
            {g}
        </g>
    )
}

const ConnectorLower = ({
    data
}) => {
  // d: "M 228 1 L 236 1 L 236 27 L 244 27" atas
  // "M 228 26 L 236 26 L 236 1 L 244 1" bawah
  // "M 228 26 L 260 26" datar
  let g = []
  console.log('arrConnectornya', arrConnector)
  for(let i=0; i< arrConnector.length; i++){
    const dataRound = arrConnector[i]
    const nextDataRound = arrConnector[i+1] || {}
    for(var k = 0, length3 = dataRound.length; k < length3; k++){
      const position = dataRound[k]
      const nextPosition = dataRound[k+1] || {}
      console.log('position =', position.y, nextPosition.y, k)
      let connector = "M 228 26 L 260 26"
      if (nextDataRound.length !== dataRound.length) {
        if (nextPosition.y - position.y >= 54 || dataRound.length === 1) {
          // bawah
          connector = `M 228 ${26} L 236 ${26} L 236 ${54} L 244 ${54}`
        }
        if (!nextPosition.y && dataRound.length > 1) {
          // atas
          connector = `M 228 ${26} L 236 ${26} L 236 ${1} L 244 ${1}`
        }
        if (dataRound.length % 2 === 0 && k%2===1) {
          // bawah
          connector = `M 228 ${26} L 236 ${26} L 236 ${1} L 244 ${1}`
        }
      }

      if (i+2 < arrConnector.length) {
        g.push(
          GConnector({
            x: position.x,
            y: position.y,
            index: `${position.x}${position.y}`,
            d: connector
          })
        )
      }
    }
  }
  return (
      <g>
          {g}
      </g>
  )
}


class Test extends React.PureComponent {
  render() {
    const {
      data
    } = this.props
    round1Lower = []
    round2Lower = []
    arrConnector = []
    const round = data && data.match ? Number(data.match.p) : 0
    const player = Math.pow(2,round)
    const roundLower = data && data.match ? Number(data.match.pLower) : 0
    const playerLower = player/2
    const height = player <= 8 ? 54 : (54*0.55)
    // const round = Math.log2(player)
    console.log('DATAAAAAAA ', data)
    return (
      <div>
        <svg className="bracket-svg" width={round*244} height={player*parseInt(height)} viewBox={`0 0 ${round*244} ${player*parseInt(height)}`}>
          <g className="parent">
            <Connector data={data} />
            <Bracket data={data} />
          </g>
        </svg>
        <svg className="bracket-svg" width={roundLower*244} height={player*parseInt(height)} viewBox={`0 0 ${roundLower*244} ${playerLower*parseInt(height)}`}>
          <g className="parent">
            <BracketLower data={data} />
            <ConnectorLower data={data} />
          </g>
        </svg>
      </div>
    )
  }
}

export default Test
