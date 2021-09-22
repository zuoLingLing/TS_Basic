//基础类型   number  string  void  null undefined  boolean   symbol


//以下都是对象类型



//数组类型
const girls :string[]=["赵丽颖","柠檬","蜜桃"];
console.log(girls);

//对象类型
const boys:{
    name:string,
    age:number
}={
    name:"花旦",
    age:28
}

//类类型

// class Person{}
// const zyw:Person = new Person();


//函数类型（函数并且返回一个字符串类型的值）
const ljj : ()=>string = ()=>{return "LJJ"}

console.log(ljj);

