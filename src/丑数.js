// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.
//
// Write a function that computes the nth smallest Hamming number.
//
// Specifically:
//
// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in example test fixture.
//
// Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.
// 只包含因子2,3,5的正整数被称作丑数，
{
  function hamming (n) {
    // TODO: Program me
    let arr = [1]
    let t2 = 0
    let t3 = 0
    let t5 = 0
    for (let i = 1; i < n; i++) {
      arr.push(Math.min(arr[t2] * 2, Math.min(arr[t3] * 3, arr[t5] * 5)))
      arr[i] === arr[t2] * 2 ? t2 += 1 : ''
      arr[i] === arr[t3] * 3 ? t3 += 1 : ''
      arr[i] === arr[t5] * 5 ? t5 += 1 : ''
    }
    return arr[n - 1]
  }

  console.time('start')
  console.log(hamming(5000))
  console.timeEnd('start')
}

{
  // 超时的垃圾代码
  function hamming (n) {
    // TODO: Program me
    let arr = [1]
    for (let i = 1; i < n; i++) {
      let a = []
      arr.forEach((val, index) => {
        let c = arr[arr.length - 1]
        val * 2 > c ? a.push(val * 2) : val * 3 > c ? a.push(val * 3) : val * 5 > c ? a.push(val * 5) : ''
      })
      arr.push(a.sort((a, b) => a - b )[0])
    }
    return arr[arr.length - 1]
  }

  // console.log(
  //   hamming(1),
  //   hamming(2),
  //   hamming(3),
  //   hamming(4),
  //   hamming(5),
  // )

  console.time('start')
  console.log(hamming(5000))
  console.timeEnd('start')
}
