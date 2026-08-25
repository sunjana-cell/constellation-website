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

if (contact && foot) {
  contact.addEventListener("click",function(){
      foot.scrollIntoView({
        behavior:"smooth"
      });
  });
}

const type=document.getElementById("types12");

if (type) {
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
}

const fact = document.getElementById("one");
const click = document.getElementById("clicki");

const facts = [
  "Aquarius is one of the oldest recognized constellations, positioned in a region of the sky often called The Sea because it is surrounded by other water-related constellations like Cetus (the whale), Pisces (the fish), and Eridanus (the river).",
  "orion is one of the most easily recognizable constellation",
  "scorpius contains the bright star Antras",
  "The constellation leo represents a lion",
  "Ursa major contains the famous Big Dipper",
];

let currentFact = 0;

if (click && fact) {
  click.addEventListener("click",function(){
      currentFact++;

      if(currentFact >= facts.length){
        currentFact = 0;
      }

      fact.textContent = facts[currentFact];
  });
}

const submitt = document.getElementById("sub");
const popup = document.getElementById("success-popup");

submitt.addEventListener ("click", function(e){
  e.preventDefault();

  const form = submitt.closest("form");

form.classList.add("hidden");
popup.classList.remove("hidden");

form.reset();

setTimeout(function() {
  popup.classList.add("hidden");
},1000);

});