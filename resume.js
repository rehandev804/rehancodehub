function downloadImage() {
    const image = document.getElementById('resumeImage');
    const imageUrl = image.src;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'resume.jpg';  // file name during download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Theme Change Functionality
const theme_change_btn = document.querySelector(".ri-moon-fill");
theme_change_btn.addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "white" ? "black" : "white";
    
    if (document.body.style.backgroundColor === "black") {
        theme_change_btn.classList.remove("ri-sun-fill");
        theme_change_btn.classList.add("ri-moon-fill");
    } else {
        theme_change_btn.classList.remove("ri-moon-fill");
        theme_change_btn.classList.add("ri-sun-fill");
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