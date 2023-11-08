const nanthan=require ('fs');

nanthan.writeFileSync("app.html","This actually a file created by nanthan");

var nanthan2=require ('os');

console.log("PLATFORM:...",nanthan2.platform());
console.log("ARCHITECTURE:...",nanthan2.arch());