

function Creeatedata(){
    fetch("https://my-demo-app-999-default-rtdb.firebaseio.com/my-demo-app.json",
        {method:"POST",body:JSON.stringify({
            title:"The Alchemist",
            author:"Paulo Coelho",
            price:1000,
            image:"https://images-na.ssl-images-amazon.com/images/I/41b1d2e4JjL._SX331_BO1,204,203,200_.jpg",
            
            title:"hello",
            author:"im",
            price:1000,
            image:"https://images-na.ssl-images-amazon.com/images/I/41b1d2e4JjL._SX331_BO1,204,203,200_.jpg",

            title:"hi",
            author:" Coelho",
            price:1000,
            image:"https://images-na.ssl-images-amazon.com/images/I/41b1d2e4JjL._SX331_BO1,204,203,200_.jpg",

            title:"The Alt",
            author:"Paulo",
            price:1000,
            image:"https://images-na.ssl-images-amazon.com/images/I/41b1d2e4JjL._SX331_BO1,204,203,200_.jpg",

            title:"Tlchemist",
            author:"Paloelho",
            price:1000,
            image:"https://images-na.ssl-images-amazon.com/images/I/41b1d2e4JjL._SX331_BO1,204,203,200_.jpg",


        })
    })
    .then((res)=>res.json())
    .then((data)=>console.log("Data is added",data))
}
function getdata(){
     fetch("https://my-demo-app-999-default-rtdb.firebaseio.com/my-demo-app.json",
    {method:"GET"})
    .then((res)=>res.json())
    .then((data)=>console.log(" get is data",data))
}       
function updatedata(){
     fetch("https://my-demo-app-999-default-rtdb.firebaseio.com/my-demo-app/-Og0mjV9_ixjzm0bdlKg.json",

    {method:"PUT",
    body:JSON.stringify({
            title:"mist",
            author:"Pho",
            price:1000,
            image:"https://images-na.ssl-images-amazon.com/images/I/41b1d2e4JjL._SX331_BO1,204,203,200_.jpg",

    })})
     .then((res)=>res.json())
    .then((data)=>console.log(" updated using put",data))

   
        

}   
function deletedata(){

      fetch("https://my-demo-app-999-default-rtdb.firebaseio.com/my-demo-app.json",
    {method:"DELETE"})
    .then((res)=>res.json())
    .then((data)=>console.log(" deleted record",data))
}