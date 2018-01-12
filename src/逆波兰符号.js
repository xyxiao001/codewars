// 问题
// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
//
// For example expression 5 1 2 + 4 + 3 - (which is equivalent to 5 + ((1 + 2) 4) - 3 in normal notation) should evaluate to 14.
//
// Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.
//
// Empty expression should evaluate to 0.
//
// Valid operations are +, -, *, /.
//
// 思路
// 遇到数字进栈， 遇到符号出栈运算后进栈， 直到结束
//
// 我的解答
// 预览

function calc (expr) {
    // TODO: Your awesome code here
    let arr = ['+', '-', '*', '/']
    let find = (data) => {
    return arr.findIndex((val, index) => {
      return data === val
    })
  }
    // 代表最后一位是符号 可以进行操作,
    // 新生成一个栈， 遇到数字就进栈， 符号就出栈处理 之后进栈
    let zhan = []
    expr.split(' ').forEach((val, index) => {
      if (!arr.includes(val)) {
        // 数字进栈
        zhan.push(Number(val))
      } else {
        // 符号 取出栈内最后两个数字进行处理
         let num2 = zhan.pop()
         let num1 = zhan.pop()
         let sum = 0
        switch (find(val)) {
            case 0:
              sum = num1 + num2
              break
            case 1:
              sum = num1 - num2
              break
            case 2:
              sum = num1 * num2
              break
            case 3:
              sum = num1 / num2
              break
          }
        zhan.push(sum)
      }
    })
    return zhan.pop()
}

console.log(
calc('5 1 2 + 4 * + 3 -'),
calc('1 2 3'),
calc('1 2 3.5'),
calc("1 3 +"),
calc('1 3 -')
)

//大神解答
{
  function calc (expr) {
    return expr === '' ? 0 : expr.split(' ').reduce(function (stack, token) {
      return (token.match(/\d+/)) ? [parseFloat(token)].concat(stack) : [{
        '+': function (b, a) { return a + b; },
        '-': function (b, a) { return a - b; },
        '*': function (b, a) { return a * b; },
        '/': function (b, a) { return a / b; }
      }[token].apply(null, stack)].concat(stack.slice(2));
    }, [])[0];
  }
}
