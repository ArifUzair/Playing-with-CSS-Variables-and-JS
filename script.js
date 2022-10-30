const input=document.querySelectorAll(".controls input");

function handleUpdate(){
 const suffix=this.dataset.sizing||"";
  console.log(suffix)

  //console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value +suffix)

}

input.forEach(inpt=>inpt.addEventListener("change",handleUpdate))
input.forEach(inpt=>inpt.addEventListener("mousemove",handleUpdate))
