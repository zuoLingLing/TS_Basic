//数组注解

// 方法一
const numberArr: number[] = [1, 2, 3]

const stringArr: string[] = ["1", "2", "3"]

const arr: (number | string)[] = [1, "1"]


const underArr: undefined[] = [undefined, undefined]


//不要轻易使用any，虽然可以，但是不太好
const anyArr: any[] = [1, 2, "3", { name: "小红", age: 18 }]


//可以这样写
//方法一：类型别名

type Lady = (number | string | { name: string, age: number })

const xiaojiejie: Lady[] = [
    1,
    "2",
    {
        name: "123",
        age: 18
    }
]


//方法二：
//如果数组中全是对象类型的：类（注意写法，是class,里面的符号是;）

//类属性没有初始化，需要在tsconfig中配置属性

//或者原属性声明@Prop(String) id:string编译会出错
// 解决方法：直接给id后面加一个？或者！
// 改为@Prop(String) id?:string 或者@Prop(String) id！:string
// 前者是指我们不确定是否会传入这个参数，后者是指我们一定会给这个参数赋值

class Madam{
    name!: string;
    age!: number;
}
const xiaojiejie2: Madam[] = [
    {
        name: "赵雅芝",
        age: 60
    },
    {
        name: "赵丽颖",
        age: 35
    }
]
console.log(xiaojiejie2);








