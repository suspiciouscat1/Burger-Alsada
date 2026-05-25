
// this is to add a loading screen for the website
window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");

  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// makes it so when you click on the image it makes it take up the screen
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


// Add to cart popup


document.querySelectorAll('.btn-cart').forEach(function (button) {
    button.addEventListener('click', function () {
        
        var popup = document.getElementById('cart-popup');

        // fade in
        popup.style.transition = '0.4s ease';
        popup.style.opacity = '1';
        popup.style.display = 'block';

        // fadeout

        setTimeout(function () {
            popup.style.opacity = '0';


            // hide it 

            setTimeout(function () {
                popup.style.display = 'none';
            }, 400);
        }, 2000);
        
    });
});

//  
const menuOpenButton = document.querySelector("#menuopen");
const menuCloseButton = document.querySelector("#menuclose");

// when clicked on the lines icon it opens the navigation menu and when they click the x it closes it
menuOpenButton.addEventListener("click" , () => {
    document.body.classList.toggle("show-mobile-menu")
})

menuCloseButton.addEventListener("click" , () => menuOpenButton.click());


// to make it so users dont submit an empty contact form

document.getElementById("contactform").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let valid = true;

  document.getElementById("nameErr").innerHTML = "";
  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("messageErr").innerHTML = "";

  if (name === "") {
    document.getElementById("nameErr").innerHTML = "Please enter your name";
    valid = false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === "") {
    document.getElementById("emailErr").innerHTML = "Please enter your email";
    valid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailErr").innerHTML = "Enter a valid email";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageErr").innerHTML = "Please enter your message";
    valid = false;
  }

  if (valid) {
    alert("Message sent successfully!");
    document.getElementById("contactform").reset();
  }
});
