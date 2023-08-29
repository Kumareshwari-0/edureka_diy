const ratinglist=[
    {
        Name:"KFC",
        Ratings:4.5
    },
    {
        Name:"Pizza hut",
        Ratings:3.2
    },
    {
        Name:"Doiminos",
        Ratings:4.9
    },
    {
        Name:"Jumbo",
        Ratings:2.2
    },
    {
      Name:"Flemingo",
      Ratings:5,
    }
];
console.log(ratinglist);



const AvgRatings=()=>{
  const headers=Array.from(
    new Set(ratinglist.map(({Name})=>{Name}))
  );
  let arr=[];
  headers.map((head)=>
  {

    let total=0;
    let count=0;
    const FilteredRatingList=ratinglist.filter(
      (obj)=>obj.map==head
    );
    FilteredRatingList.map((hotel )  =>{
      total=FilteredRatingList.reduce((prev,next)=>{
        count++;
      });
      arr.push({Name:head,Averagerating:(total/count)})
    }
    );
    return arr;
  }
  )
  };
  const arr=AvgRatings();
  console.log(arr);

  console.log(arr.filter((hotel)=>hotel.Averagerating>=4));




