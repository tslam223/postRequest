function submitE(event) {
  event.preventDefault();
  const tit = document.getElementById("title").value; //--Accepting value from input 3-5
  const Id = document.getElementById("userId").value;
  const msg = document.getElementById("message").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {  //--fetching from api
    method: "POST", //--the method is "POST" 
    headers: { "Content-type": "application/json; charset=UTF-8" }, //--the format to fetch from
    body: JSON.stringify({ title: tit, body: msg, userId: Id }), //--create string   
  })
    .then((res) => res.json()) //--let response be converted to res.json 
    .then((res) => {
      alert("successful");
      console.log(res); //-- output
    }).catch((error)=>{
        console.log(error)
        alert("Failed")  //--if condition is not met print error
    })

}
