
/*==================== TYPING ANIMATION FOR TEXT ====================*/
const dynamicTextElement = document.getElementById('dynamic-text');
const text = "Valdemar Abril Armindo completed his Integrated Master's Degree in Electrical and Computer Engineering with a specialization in Energy from the University of Coimbra in 2021. His master's thesis, which was approved with 19/20, won two scientific merit awards. He was awarded 5 academic merit awards by the University of Coimbra. He has a history of being diligent, punctual, motivated by learning and interested in growing scientifically and professionally.";
let index = 0;

function typeText() {
  if (index < text.length) {
    dynamicTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(resetText, 15000);
  }
}

function resetText() {
  index = 0;
  dynamicTextElement.textContent = '';
  typeText();
}

typeText();

/*==================== IMAGE SLIDER FOR PORTFOLIO ====================*/
function initImageSlider(imgElementId, images) {
  const imgElement = document.getElementById(imgElementId);
  let imageIndex = 0;

  function changeImage() {
    imgElement.classList.add("hide");
    setTimeout(function () {
      imageIndex = (imageIndex + 1) % images.length;
      const newImage = new Image();
      newImage.src = images[imageIndex];

      newImage.onload = function () {
        imgElement.src = newImage.src;
        imgElement.classList.remove("hide");
      };
    }, 1000);
  }

  setInterval(changeImage, 8000);
}

initImageSlider("portfolioImg1", [
  "image_folder/premiofoto1.webp",
  "image_folder/premiofoto2.webp"
]);
initImageSlider("portfolioImg2", [
  "image_folder/dissertacaofoto1.webp",
  "image_folder/dissertacaofoto2.webp",
  "image_folder/dissertacaofoto3.webp"
]);
initImageSlider("portfolioImg3", [
  "image_folder/animation.gif",
  "image_folder/ev4eu.webp"
]);

/*==================== ANIMATE CONTACT FORM ON SCROLL ====================*/
const contactContainer = document.querySelector(".contact__container");
const contactForm = document.querySelector(".contact__form");
const footerContainer = document.querySelector(".footer__container");

if (contactContainer && contactForm) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactContainer.classList.add("show");
          contactForm.classList.add("show");
        } else {
          contactContainer.classList.remove("show");
          contactForm.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(contactContainer);
  observer.observe(contactForm);
}

/*==================== ANIMATE FOOTER ON SCROLL ====================*/
if (footerContainer) {
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footerContainer.classList.add("show");
        } else {
          footerContainer.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  footerObserver.observe(footerContainer);
}

/*==================== FETCH AND UPDATE PROJECT COUNT ====================*/
function updateProjectCount() {
  fetch('https://api.github.com/users/valdemarabril/repos')
    .then(response => {
      if (!response.ok) throw new Error("Request failed: " + response.statusText);
      return response.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        const projectCount = data.length;
        document.getElementById('project-count').textContent = projectCount + "+";
      } else {
        console.log("Error: The API response does not contain a list of repositories.");
      }
    })
    .catch(error => {
      console.error('Error loading data:', error);
      document.getElementById('project-count').textContent = "0+";
    });
}

updateProjectCount();

/*==================== BUTTON TO UPDATE PROJECT COUNT ====================*/
document.getElementById('update-button').addEventListener('click', function () {
  updateProjectCount();
});

/*==================== BUTTON TO RELOAD PAGE ====================*/
document.getElementById("update-button").addEventListener("click", function () {
  console.log("Updating data...");
  location.reload();
});
