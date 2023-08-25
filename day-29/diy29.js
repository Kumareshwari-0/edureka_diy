let array1=[
    {
        Name:"Bheem",
        Empid:1001,
        Mail:"Naandhachottabheem@gmail.com",
    },
    {
        Name:"Chukki",
        Empid:1002,
        Mail:"tuntundaughter@gmail.com",
    },
    {
        Name:"Jacku",
        Empid:1003,
        Mail:"IM,monkey@gmailcom",
    }
];

const box1=document.querySelector(".box1");

const elogo=document.querySelector(".elogo");

const bodybox=document.querySelector(".bodybox");

box1.addEventListener('click', ()=>
{
    console.log('framebox is clicked');
});

elogo.addEventListener('click',()=>
{
    console.log('elogo is clicked');
});

bodybox.addEventListener('click',()=>{
    console.log("bodybox is clicked")
});

array1.map((items)=>{
    const div=document.createElement("div");
    div.className="dummybox1";
    const h3=document.createElement('h3');
    h3.innerHTML=items.Name;
    const h2=document.createElement("h2");
    h2.innerHTML=items.Empid;
    const p=document.createElement("p");
    p.innerHTML=items.Mail;
    const button=document.createElement("button");
    button.innerHTML="DELETE";
    button.className="button1";
    div.appendChild(h3);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
    bodybox.appendChild(div);
});

bodybox.addEventListener('click',(m)=>{
    if(m.target.className==='button1'){
        m.target.parentElement.remove();
    }
}
);


