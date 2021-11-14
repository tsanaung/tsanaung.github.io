fetch('https://google.com')
.then((res)=>res.json())
.then((data)=>{
  console.log(data.entry);
  document.getElementById("content").innerHTML = data.entry;
})
