const signinbox= document.getElementById("signinbtn");

if(signinbox){
signinbox.addEventListener("click", function(){
    const email = document.getElementById("email").value;
     const username = document.getElementById("user").value;
      const password = document.getElementById("password").value;

      if(email===""||username===""||password===""){
         alert("please fill all the details");
      }else{
        window.location.href="constellation.html";
      }                                                                         
});
}

function searchConstellation(){
  console.log(search.value);
}
const search=document.getElementById("searchbtn");

if(search){
search.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
   console.log(search.value);
  }
});
}

const searchIcon=document.querySelector(".fa-magnifying-glass");

if(searchIcon){
searchIcon.addEventListener("click", function(){
   console.log(search.value);
});
}

const contact=document.getElementById("contactme");
const foot=document.getElementById("contactji");

contact.addEventListener("click",function(){
    foot.scrollIntoView({
      behavior:"smooth"
    });
});

const type=document.getElementById("types12");

 type.addEventListener("click", function() {
  const types12= this.value;
  if (types12) {
    const all = document.getElementById("polarhead");
    if (all) {
      all.scrollIntoView({ 
        behavior: 'smooth' });
    }
  }
});