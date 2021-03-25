function showAboutMe() {
    console.log("show")
    document.getElementById("description").classList.remove("invisible");
    document.getElementById("description1").classList.remove("invisible")
    document.getElementById("about-me").style.visibility = "visible";
    document.getElementById("portfolio").classList.add("invisible"); 
    document.getElementById("resume").classList.add("invisible");
    document.getElementById("contact-information").classList.add("invisible");
  }
  function showPortfolio() {
    console.log("show")
    document.getElementById("about-me").style.visibility = "hidden"; 
    document.getElementById("portfolio").classList.remove("invisible"); 
    document.getElementById("resume").classList.add("invisible");
    document.getElementById("contact-information").classList.add("invisible") 
  }
  function showContact() {
    console.log("show")
    document.getElementById("about-me").style.visibility = "hidden"; 
    document.getElementById("contact-information").classList.remove("invisible"); 
    document.getElementById("resume").classList.add("invisible");
    document.getElementById("portfolio").classList.add("invisible") 
  }
  function showResume() {
    console.log("show")
    document.getElementById("about-me").style.visibility = "hidden"; 
    document.getElementById("resume").classList.remove("invisible"); 
    document.getElementById("portfolio").classList.add("invisible");
    document.getElementById("contact-information").classList.add("invisible") 
  }