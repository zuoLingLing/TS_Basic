//函数返回类型的注解
//void  ： 当函数无返回值的时候，我们就可以给函数的类型注解为void，表示为无任何类型

//never : 当进入一个死循环，就可以用类型注解为never；或者是永远不会执行完这个函数体；

function getTotals(one: number, two: number): number {
    return one + two
}

let totals = getTotal(1, 2);


//如果函数里面传递了对象，如何类型注解
//如下所示：看函数的形参
function getNumber({ one, two }: { one: number, two: number }) {
    return one + two
}
const numbers = getNumber({ one: 1, two: 2 })
