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
    let match = 32
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
              const a = ((i + adder))
              const b = ((i+ 2 + adder))
              console.log(a,b)
              arrC[r].push(a,b)
            }
          } else {
            if (i === 0 || (i+1)%4 === 1){
              const adder = 3
              const a = ((i*2 + adder))
              const b = ((i*2+ 2 + adder))
              // console.log(a,b)
              arrC[r].push(a,b)
            }
          }
        }
      }
      if (r+2 < maxRound) {
        if (arrC[r].length) {
          arrC[r+1] = []
          for(var i = 0, length3 = arrC[r].length/2; i < length3; i++){
            const data = arrC[r]
            const hasil = data[i]*2
              arrC[r+1].push(hasil)
            // if (i%4===0) {
            // }
            // if (i%4===1) {
            //   arrC[r+1].push(hasil)
            // }
          }
        }
      }
    }
    console.log('arrC', arrC)