// Theme Change Functionality
const theme_change_btn = document.querySelector(".ri-moon-fill");
const stream_h1 = document.querySelector(".stream_h1");
const stream_h2 = document.querySelector(".stream_h2");
const rg = document.querySelector(".rg");
theme_change_btn.addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "white" ? "black" : "white";
    
    if (document.body.style.backgroundColor === "black") {
        theme_change_btn.classList.remove("ri-sun-fill");
        theme_change_btn.classList.add("ri-moon-fill");
        stream_h1.style.color = "white";
        stream_h2.style.color = "white";
        rg.style.color = "white";
    } else {
        theme_change_btn.classList.remove("ri-moon-fill");
        theme_change_btn.classList.add("ri-sun-fill");
        stream_h1.style.color = "black";
        stream_h2.style.color = "black";
        rg.style.color = "black";
    }
});

// Newletter
const footer_h1 = document.querySelector(".footer_h1");
const footer_btn = document.querySelector(".subscribe_btn");

footer_btn.addEventListener("click", (event) => {
  const footer_email_input = document.querySelector(".subscribe_input");
  
  if (footer_email_input.value === "") {
    alert("Fill the input");
  } else {
    footer_email_input.remove();
    footer_btn.remove();
    footer_h1.innerHTML = "Thanks!";
  }
});