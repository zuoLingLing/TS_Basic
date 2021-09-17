//类型注解：就是给不确定变量是那种类型的明确类型
//类型推断：比如定义一个变量是let a=5;那么a是number类型。这个就是显而易见的可以推断出这个就是这个类型

//总结   工作使用问题（潜规则）
// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解


function getTotal(one: number, two: number) {
    return one + two
}

let total = getTotal(1, 2);

interface Total {
    name: string,
    age: number
}
const totalsc: Total = {
    name: "hhh",
    age: 18
}