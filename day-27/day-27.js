function welcome(pharse,name)
{
    alert(pharse+'  '+name);
}
setTimeout(welcome,3000,"Hello","Welcome to my page....");

const fetchdata=()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then((data)=>data.slice(0,10));
}

const getData=async()=>{
    const data=await fetchdata();

    if(data!==undefined){
        const mainbox=document.querySelector('.mainbox');

        const timer=setInterval(()=>
        {
            data.map((obj)=>{
                const div=document.createElement('div');
                div.className='box1';

                const h3=document.createElement('h3');
                h3.innerHTML=`${obj.id}.${obj.title}`;

                div.appendChild(h3);
                mainbox.appendChild(div);
            });
            setTimeout(()=>
            {
                clearInterval(timer);
            },5000);
        },1000);
        }
    }
getData();

