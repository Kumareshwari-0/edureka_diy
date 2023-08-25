var datas=[
{
    UserId:1001,
    Title:"Dora",
    About:"Say about Dora",
    iscompleted:true
},
{
    UserId:1002,
    Title:"Chukki",
    About:"Say about chukki",
    iscompleted:false
},
{
    UserId:1003,
    Title:"lisa",
    About:"Say about lisa",
    iscompleted:false
},
{
    UserId:1004,
    Title:"krish",
    About:"Say about krish",
    iscompleted:true
}
];

console.log(datas);

const getdata=()=>{
    const promisedata= new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve("Data fetched");
        })
    },3000);

return promisedata;
};
var newarr=datas.map((obj)=>{
    return`${obj.About}`
});
console.log(newarr);
var ele1=[
    UserId=1001,
    Title="Dora",
    About="Say about Dora",
    iscompleted=true
]
var elem2=[
    UserId=1002,
    Title="Chukki",
    About="Say about chukki",
    iscompleted=false
]

const ele2=`${ele1},
${elem2}`;

console.log(ele2);

const array3=[...ele1,...elem2];
console.log(array3);
