fetch('https://springcondor.blogspot.com/feeds/posts/default?max-result=15&orderby=updated&alt=json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data.entry);
  document.getElementById("content").innerHTML = data.entry;
})
