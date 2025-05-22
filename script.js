// Theme Change Functionality
const theme_change_btn = document.querySelector(".ri-moon-fill");
const main_page_h1 = document.querySelector(".main_page_h1");
const main_page_p = document.querySelector(".main_page_p");
const about_section = document.querySelector("#about");
const services_page_span = document.querySelector(".service_page_span");
const project_detail_p_one = document.querySelector(".project_detail_p_one");
const project_detail_p_two = document.querySelector(".project_detail_p_two");
const project_detail_p_three = document.querySelector(".project_detail_p_three");
const courses_left = document.querySelector(".course-left");
const course_left_h1 = document.querySelector(".course_left_h1");
const course_left_p = document.querySelector(".course_left_p");
const course_right_p = document.querySelector(".course_right_p");
const rec_course_card_one = document.querySelector(".rec_course_card_one");
const rec_course_card_two = document.querySelector(".rec_course_card_two");
const re = document.querySelector(".re");
const review = document.querySelector(".review");
const review_two = document.querySelector(".review_two");
const course_p = document.querySelector(".course_p");
const live_session_one = document.querySelector(".live_session_one");
const live_session_two = document.querySelector(".live_session_two");
const live_session_three = document.querySelector(".live_session_three");
const live_session_fourlive_session_two = document.querySelector(".live_session_four");
const blog_p = document.querySelector(".fsdfd");
const contact_p = document.querySelector(".df");
const Contact_inputs = document.querySelector(".Contact_inputs");
const sections_p_one = document.querySelector(".sections_p_one");
const sections_p_two = document.querySelector(".sections_p_two");
const sections_p_three = document.querySelector(".sections_p_three");
const sections_p_four = document.querySelector(".sections_p_four");
const sections_p_five = document.querySelector(".sections_p_five");
const sections_p_six = document.querySelector(".sections_p_six");
theme_change_btn.addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "white" ? "black" : "white";
    
    if (document.body.style.backgroundColor === "black") {
        theme_change_btn.classList.remove("ri-sun-fill");
        theme_change_btn.classList.add("ri-moon-fill");
        main_page_h1.style.color = "white";
        main_page_p.style.color = "white";
        services_page_span.style.color = "white";
        project_detail_p_one.style.color = "white";
        courses_left.style.color = "white";
        project_detail_p_two.style.color = "white";
        project_detail_p_three.style.color = "white";
        course_left_p.style.color = "white";
        course_right_p.style.color = "white";
        re.style.color = "white";
        rec_course_card_one.style.color = "white";
        rec_course_card_two.style.color = "white";
        review.style.color = "white";
        review_two.style.color = "white";
        course_left_h1.style.color = "white";
        course_p.style.color = "white";
        live_session_one.style.color = "white";
        live_session_two.style.color = "white";
        live_session_three.style.color = "white";
        live_session_fourlive_session_two.style.color = "white";
        blog_p.style.color = "white";
        contact_p.style.color = "white";
        Contact_inputs.style.color = "white";
        sections_p_one.style.color = "white";
        sections_p_two.style.color = "white";
        sections_p_three.style.color = "white";
        sections_p_four.style.color = "white";
        sections_p_five.style.color = "white";
        sections_p_six.style.color = "white";
        df.style.color = "white";
    } else {
        theme_change_btn.classList.remove("ri-moon-fill");
        theme_change_btn.classList.add("ri-sun-fill");
        main_page_h1.style.color = "black";
        main_page_p.style.color = "black";
        services_page_span.style.color = "black";
        project_detail_p_one.style.color = "black";
        courses_left.style.color = "black";
        project_detail_p_two.style.color = "black";
        project_detail_p_three.style.color = "black";
        course_left_h1.style.color = "black";
        course_right_p.style.color = "black";
        re.style.color = "black";
        rec_course_card_one.style.color = "black";
        rec_course_card_two.style.color = "black";
        review.style.color = "black";
        review_two.style.color = "black";
        course_left_p.style.color = "black";
        course_p.style.color = "black";
        live_session_one.style.color = "black";
        live_session_two.style.color = "black";
        live_session_three.style.color = "black";
        live_session_fourlive_session_two.style.color = "black";
        blog_p.style.color = "black";
        contact_p.style.color = "black";
        Contact_inputs.style.border = "2px solid black";
        sections_p_one.style.color = "black";
        sections_p_two.style.color = "black";
        sections_p_three.style.color = "black";
        sections_p_four.style.color = "black";
        sections_p_five.style.color = "black";
        sections_p_six.style.color = "black";
        df.style.color = "black";
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

// Card Slider Functionality
const slider = document.getElementById("slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const dotsContainer = document.getElementById("dots");
const cardWidth = 270; // including margin
const visibleCards = Math.floor((window.innerWidth * 0.9) / cardWidth);
const totalCards = slider.children.length;
const maxIndex = totalCards - visibleCards;
let currentIndex = 0;
for (let i = 0; i <= maxIndex; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}
const updateDots = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
};
rightArrow.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    updateDots();
  }
});
leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    updateDots();
  }
});
const animateNumbers = () => {
  const counters = document.querySelectorAll('.pro_one h4');
  counters.forEach(counter => {
      const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const current = +counter.innerText;
          const increment = target / 200; // Adjust speed of animation

          if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCounter, 10);
          } else {
              counter.innerText = target.toLocaleString(); // Format with commas for large numbers
              if (target === 2.5) counter.innerText = '2.5'; // Handle decimal case
          }
      };

      updateCounter();
      counter.classList.add('visible');
  });
};
const proSection = document.querySelector('.pro');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(proSection); 
      }
  });
}, { threshold: 0.5 });
observer.observe(proSection);

// About us or Why you choose us Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach((emoji, index) => {
        emoji.style.animationDelay = `${index * 0.2}s`;
    });
});

// Contact Form Functionality
 

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