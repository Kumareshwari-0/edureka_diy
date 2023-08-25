class Restaurantmanager{
   restaurantlist=[
        {
            id:1,
            restaurantname:'KFC',
            address:'Anandha vihar',
            city:'delhi',
        },
        {
            id:2,
            restaurantname:'grill',
            address:'savitha vihar',
            city:'mumbai',
        },
        {
            id:3,
            restaurantname:'pizza hut',
            address:'jee vihar',
            city:'jaipur',
        },
    ];
}
let PrintAllRestaurant= new Restaurantmanager();

let ele=PrintAllRestaurant.restaurantlist.map(function(values)
{
    return values.restaurantname;
});
console.log(ele);

let val=PrintAllRestaurant.restaurantlist.map(function(cities)
{
    return cities.city;
});
console.log(val);

var day=new Date();
console.log(Date());
console.log(day.getDate());
console.log(day.getDay());
console.log(day.getFullYear());
console.log(day.getHours());
console.log(day.getMilliseconds());
console.log(day.getMinutes());
console.log(day.getMonth());
console.log(day.getSeconds());

var a=10.15;
console.log(Math.round(a));
console.log(Math.PI);
console.log(Math.LOG10E);
console.log(Math.SQRT2);
console.log(Math.ceil(a));