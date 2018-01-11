// 约瑟夫环

{
  function josephus(items, k) {
    //your code here
    if (k === 1) {
      return items
    }
    items = items.map((val) => {
      return {
        val: val,
        kill: false
      }
    })
    let arrs = []
    let f = (items, num) => {
      let n = num
      items = items.map((val, index) => {
        let v = val
        if (n + 1 > k) {
          n = 1
          v.kill = true
          arrs.push(v.val)
        } else {
          n = n + 1
          v.kill = false
        }
        return v
      })
      if (items.length > 0) {
        items = items.filter((val, index) => !val.kill)
        f(items, n)
      }
      return arrs
    }
    return f(items, 1)
  }

  console.log(
    josephus([1,2,3,4,5,6,7,8,9,10], 1),
    josephus([1,2,3,4,5,6,7,8,9,10],2),
    josephus(["C","o","d","e","W","a","r","s"],4),
    josephus([1,2,3,4,5,6,7],3),
    josephus([],3)
  )
}

{
  // 大佬
  function josephus(items,k){
    var dest = [],
        i = 0;

    while (items.length > 0) {
      dest.push(items.splice(i = (i + k - 1) % items.length, 1)[0]);
    }

    return dest;
  }

  console.log(
    josephus([1,2,3,4,5,6,7,8,9,10], 1),
    josephus([1,2,3,4,5,6,7,8,9,10],2),
    josephus(["C","o","d","e","W","a","r","s"],4),
    josephus([1,2,3,4,5,6,7],3),
    josephus([],3)
  )
}
