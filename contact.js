// Theme Change Functionality
const theme_change_btn = document.querySelector(".ri-moon-fill");
const blog_p = document.querySelector(".fsdfd");
const contact_p = document.querySelector(".df");
theme_change_btn.addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "white" ? "black" : "white";
    
    if (document.body.style.backgroundColor === "black") {
        df.style.color = "white";
    } else {
        theme_change_btn.classList.remove("ri-moon-fill");
        theme_change_btn.classList.add("ri-sun-fill");
        df.style.color = "black";
    }
});



const whatsappNumber = "923426271198";  

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();                            

      const f = this;     
      const text = `
        *New Contact Submission*%0A
        Name: ${encodeURIComponent(f.firstName.value.trim())} ${encodeURIComponent(f.lastName.value.trim())}%0A
        Email: ${encodeURIComponent(f.email.value.trim())}%0A
        Phone: ${encodeURIComponent(f.phone.value.trim())}%0A
        Country: ${encodeURIComponent(f.country.value)}%0A
        Message:%0A${encodeURIComponent(f.message.value.trim())}
      `.replace(/\s+/g, ''); // spaces clean

      // WhatsApp deep link
      const url = `https://wa.me/${whatsappNumber}?text=${text}`;

      window.open(url, "_blank");   
      f.reset();                
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