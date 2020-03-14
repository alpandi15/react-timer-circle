// let PCount = 64
// const maxRound = Math.log2(PCount)
// let arr = []
// for(let i=0; i<maxRound; i++){
//   if(i===0){
//     arr[i]=[]
//     for(let j=0; j<PCount; j++){
//       if (j%2===1)
//           arr[i].push(j)
//     }
//   }
//     if(arr[i].length && i+1 < maxRound){
//       arr[i+1]=[]
//       for(let k=0; k<arr[i].length; k++){
//       const data = arr[i]
//       if(k%2===0){
//         let adder = Math.pow(2, i)
//         // console.log('i', i)
//         if(i+2 === maxRound) {
//           arr[i+1].push(data[1]-data[0])
//         } else {
//           let hasil = data[k]+adder
//           console.log('hasil', adder, i)
//           hasil = hasil%2===1 ? hasil+1 : hasil
//           arr[i+1].push(hasil)
//         }
//       }
//       }
//     }
// }
// console.log(arr)

// let PCount = 32
// for(let i=0; i<PCount; i++){
//   const underE = i===PCount-1 && PCount === 8
//   if(PCount<=8) {
//     if(i==0 || underE){
//       i = underE? i+1 : i
//       const a = (i+1) * 27
//       const b = (i+3) * 27
//       console.log(a,b)
//     }
//   } else {
//     if (i===0 || (i+1)%4 === 1){
//       const a = (i+1) * 27
//       const b = (i+2) * 27
//       console.log(a,b)
//     }
//   }
// }

    let arrC = []
    let match = 64
    const maxRound = Math.log2(match)
    for(let r = 0, length2 = maxRound; r < length2; r++){
      if (r===0) {
        arrC[r] =[]
        for(let i=0; i< match; i++){
          const underE = i=== match-1 && match === 8
          if(match<=8) {
            if(i === 0 || underE){
              i = underE? i+1 : i
              const adder = 3
              const a = ((i + adder)*27)
              const b = ((i+ 2 + adder)*27)
              console.log(a,b)
              arrC[r].push(a,b)
              // c.push(
              //   GConnector({
              //     x: 0,
              //     y: a,
              //     index: `${a}${b}`,
              //     d: "M 228 1 L 236 1 L 236 54"
              //   })
              // )
              // c.push(
              //   GConnector({
              //     x: 0,
              //     y: b,
              //     index: `${b}${a}`,
              //     d: "M 228 53 L 236 53 L 236 1 L 244 1"
              //   })
              // )
            }
          } else {
            if (i === 0 || (i+1)%4 === 1){
              const adder = 3
              const a = ((i*2 + adder)*27)
              const b = ((i*2+ 2 + adder)*27)
              // console.log(a,b)
              arrC[r].push(a,b)
              // c.push(
              //   GConnector({
              //     x: 0,
              //     y: a,
              //     index: `${a}${b}`,
              //     d: "M 228 1 L 236 1 L 236 54"
              //   })
              // )
              // c.push(
              //   GConnector({
              //     x: 0,
              //     y: b,
              //     index: `${b}${a}`,
              //     d: "M 228 53 L 236 53 L 236 1 L 244 1"
              //   })
              // )
            }
          }
        }
      }
      if (arrC[r].length && r+1 < maxRound) {
        arrC[r+1] = []
        // console.log('r', r)
        for(var i = 0, length3 = arrC[r].length; i < length3; i++){
          const data = arrC[r]
          if ((i%4===1 || i%4===0) && r === 0) {
            const adder = i%4===0 ? 27 : 54
            const hasil = data[i]+adder
            let a, b
            if (i%4===0) {
              a = hasil+27
             console.log('A', (r+1)*244,a, i, hasil)
             // c.push(
             //   GConnector({
             //     x: (r+1)*244,
             //     y: a,
             //     index: `${(r+1)*244}${a}`,
             //     d: `M 228 1 L 236 1 L 236 ${54+((r+1) * 54)}`
             //   })
             // )
            // arrC[r+1].push(a)
            } else {
              b = hasil+54
               console.log('B', (r+1)*244,b, i, hasil)
               // c.push(
               //   GConnector({
               //     x: (r+1)*244,
               //     y: b,
               //     index: `${(r+1)*244}${b}`,
               //     d: `M 228 ${53+((r+1) * 54)} L 236 ${53+((r+1) * 54)} L 236 1 L 244 1`
               //   })
               // )
            // arrC[r+1].push(b)
            }
            arrC[r+1].push(hasil)
          }
          // samakan aja pola nya, dgn yg bracket utk dpatin nilai nya
          if ( r >= 1) {
            if (i< length3/2) {
            const hasil = data[i]*2
            // console.log(i, hasil/27, hasil, i%2===0)
             let a, b
             if (i%2===0) {
               a = hasil
              // arrC[r+1].push(a)
              console.log('A', (r+1)*244,a, i, hasil)
              // c.push(
              //   GConnector({
              //     x: (r+1)*244,
              //     y: a,
              //     index: `${(r+1)*244}${a}`,
              //     d: `M 228 1 L 236 1 L 236 ${54+((r+1) * 54)+54}`
              //   })
              // )
             } else {
               b = hasil
              // arrC[r+1].push(b)
                console.log('B', (r+1)*244,b, i, hasil)
                // c.push(
                //   GConnector({
                //     x: (r+1)*244,
                //     y: b,
                //     index: `${(r+1)*244}${b}`,
                //     d: `M 228 ${53+((r+1) * 54)+54} L 236 ${53+((r+1) * 54)+54} L 236 1 L 244 1`
                //   })
                // )
             }
              arrC[r+1].push(hasil)
           // console.log('datax', (r+1)*244,hasil)
          }
          }
        }
      }
    }
    console.log('arrC', arrC)