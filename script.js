const signinbox= document.getElementById("signinbtn");

if(signinbox){
const submitSignIn = function(){
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value;
    const usererror = document.getElementById("usererror");
    const passerror = document.getElementById("passerror");

    usererror.textContent = "";
    passerror.textContent = "";

    if(email === "" || username === "" || password === ""){
      passerror.textContent = "Please complete every field to enter the observatory.";
      return;
    }

    if(!/[a-zA-Z]/.test(username)){
      usererror.textContent = "Username must contain letters.";
      return;
    }

    if(!/[0-9]/.test(username)){
      usererror.textContent = "Username must contain at least one number.";
      return;
    }

    if(password.length < 8){
      passerror.textContent = "Password must be at least 8 characters long.";
      return;
    }

    if(!/[A-Z]/.test(password)){
      passerror.textContent = "Add at least one uppercase letter.";
      return;
    }

    if(!/[a-z]/.test(password)){
      passerror.textContent = "Add at least one lowercase letter.";
      return;
    }

    if(!/[0-9]/.test(password)){
      passerror.textContent = "Add at least one number.";
      return;
    }

    window.location.href="constellation.html";
};

signinbox.addEventListener("click", submitSignIn);

const signinForm = document.getElementById("signinbox");
if (signinForm) {
  signinForm.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitSignIn();
    }
  });
}
}

const search=document.getElementById("searchbtn");

if (search) {
search.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
   let searchValue = search.value.toLowerCase().trim();

   if(searchValue === ""){
    return;
   }

  let elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, button, footer, header");

  let found = false;

  elements.forEach(function(element){
    let text = element.textContent.toLowerCase();

    if(!found && text.includes(searchValue)){
      element.scrollIntoView({ behavior:"smooth", block:"center" });
      found = true;
    }
  });

  if(!found){
    alert("Nothing found for: " + search.value);
  }
}
});
}

const contact=document.getElementById("contactme");
const foot=document.getElementById("contactji");

if (contact && foot) {
  contact.addEventListener("click",function(){
      foot.scrollIntoView({ behavior:"smooth", block:"start" });
  });
}

const type=document.getElementById("types12");

if (type) {
  type.addEventListener("change", function() {
    const targets = { circumpolar: "polarhead", zodiacal: "zohead", seasonal: "seahead" };
    const target = document.getElementById(targets[this.value]);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const fact = document.getElementById("one");
const click = document.getElementById("clicki");

const facts = [
  "Aquarius is one of the oldest recognized constellations in a region of the sky once called The Sea.",
  "Orion is one of the easiest constellations to recognize, with three bright stars forming his belt.",
  "Scorpius contains Antares, a red supergiant whose warm glow has inspired observers for centuries.",
  "Leo represents a lion and is especially easy to spot beneath the Big Dipper in the spring sky.",
  "Ursa Major contains the Big Dipper, a familiar asterism used for navigation and stargazing."
];

let currentFact = 0;

if (click && fact) {
  click.addEventListener("click",function(){
    currentFact = (currentFact + 1) % facts.length;
    fact.textContent = facts[currentFact];
  });
}

const submitt = document.getElementById("sub");
const feedbackForm = document.getElementById("feedback-1");
const popup = document.getElementById("success-popup");

if (submitt && feedbackForm && popup) {
  const submitFeedback = function(event) {
    event.preventDefault();

    const feedback = feedbackForm.querySelector("#feedback");

    if (!feedback || feedback.value.trim() === "") {
      if (feedback) {
        feedback.focus();
        feedback.setCustomValidity("Please enter your feedback before submitting.");
        feedback.reportValidity();
      }
      return;
    }

    feedback.setCustomValidity("");

    const successMessage = document.getElementById("yeah");
    if (successMessage) {
      successMessage.textContent = "Your feedback has been submitted.";
    }

    popup.classList.remove("hidden");
    feedbackForm.reset();

    window.clearTimeout(popup.successTimer);
    popup.successTimer = window.setTimeout(function() {
      popup.classList.add("hidden");
    }, 3000);
  };

  submitt.addEventListener("click", submitFeedback);
  feedbackForm.addEventListener("submit", submitFeedback);

  const feedback = document.getElementById("feedback");
  if (feedback) {
    feedback.addEventListener("input", function() {
      feedback.setCustomValidity("");
    });
  }
}

