'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Instead of using the for loop, we use the forEach method
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('down', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// BUTTON SCRIOLLING
btnScrollTo.addEventListener('click', function (e) {
  // Getting the coordinates of the elements to scroll to
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // Getting the coordinates of the button clicked (btnScrollTo)
  // console.log(e.target.getBoundingClientRect());

  // Getting the current scroll positon (X/Y positions)
  // console.log('Current scroll [x/y]', window.pageXOffset, window.pageYOffset);

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   window.pageYOffset + s1coords.top
  // );

  // Scrolling and making the animation nice and smooth
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: window.pageYOffset + s1coords.top,
  //   behavior: 'smooth',
  // });

  // Modern way of scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

// PAGE NAVIGATION
/*
document.querySelectorAll('.nav__link').forEach(el =>
  el.addEventListener('click', function (e) {
    e.preventDefault(); // Prevents the page from scrolling to the HTML element which has the ID name as the anchor tag

    const id = this.getAttribute('href'); // to get the absolute url which is the (id = 'section--1')
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  })
); */

// USING EVENT DELEGATION FOR PAGE NAVIGATION (STEPS)
//1. Add event listener to common parent element
//2. Determine what element originated the event

// the parent element of the links
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target); // selects the element (the exact link) that is clicked in the parent element (nav container)

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// BUILDING THE TABBED COMPONENT
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

//using event delegation (selecting the parent element of the buttons)
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  //Matching Strategy
  const clicked = e.target.closest('.operations__tab'); // the closest method is used to get the closest element that has a specific .class name

  // A guard clause (an if statement that returns early if some condition is matched)
  if (!clicked) return; // to prevent errors

  // First remove the active class from all buttons and the content areas
  tabs.forEach(function (t) {
    // Removes the active tab from other buttons
    t.classList.remove('operations__tab--active');
  });

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // and adding the active class on the button that's currently clicked
  clicked.classList.add('operations__tab--active');

  // Revealing the content area itself
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'); //(using the dataset.tab because of the data-tab attribute used in the HTML)
});

// Menu fade animation
const handleHover = function (e, opacity) {
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //the closest method selects the siblings of the element hovered on, meaning the element closest to the nav element
  // const logo = document.querySelector('.nav__logo');
  const logo = link.closest('.nav').querySelector('img'); // selects element closest to the nav element with an image tag

  if (link.classList.contains('nav__link')) {
    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

// Passing arguements into an event handler
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

// Implementing Sticky Navigation: The Scroll Event
/*
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  // console.log(initialCoords);
  if (this.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}); */

// Implementing Sticky Navigation: Intersection Observer API
// The below callback will get called each time the observed element(target element) is intersecting the root element at the threshold defined in percentage(0.1)
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   // threshold: 0.1, or
//   threshold: [0, 0.2], // the 0% means, our callback will trigger each time the target element move completely out of the view, and also as it enters the view:port or
//   //threshold: [0, 1, 0.2] // the 1% means, the callback will be triggered when the target element move 100% into the view
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions); // the intersection API
// observer.observe(section1); // the observed element

// Implementing the sticky scroll using the intesection observer API
const header = document.querySelector('.header'); // the first section you want to scroll over
const navHeight = nav.getBoundingClientRect().height; // gets the height of the nav container
// console.log(navHeight);
const stickyNav = function (entries) {
  entries.forEach(entry => {
    // console.log(entry);
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // meaning once 0% of the header is visible (once the header is no longer visible), we want something to happen
  rootMargin: `-${navHeight}px`, // reveal the nav bar once the viewport height is equal to the nav container's height
});
headerObserver.observe(header);

// Revealing Elements on Scroll
const allSections = document.querySelectorAll('.section'); // Selects the entire section

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  }

  // observer.unobserve(entry.target); // removes the observer after scrolling through all the section
}; // Observer callback

const revealOptions = {
  root: null,
  threshold: 0.15,
}; // observer options
const sectionObserver = new IntersectionObserver(revealSection, revealOptions); //Intersection obsever

// Loop over and observe each section
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy Loading Images
const imgTarget = document.querySelectorAll('img[data-src]'); // Selects all the images which have the property of data source (original image) (HTML line: 72);

const lazyLoading = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (entry.isIntersecting) {
    // Replace the src attribute with the data-src (original image)
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  }
};

const imgObserver = new IntersectionObserver(lazyLoading, {
  root: null,
  threshold: 0.9,
});
imgTarget.forEach(img => imgObserver.observe(img));

// Building a Slider Component
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots');
let curSlide = 0;
let maxSlide = slides.length - 1;

// Implementing the dot feature (1)
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"> </button>`,
    );
  });
};
createDots();

const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(function (dot) {
    dot.classList.remove('dots__dot--active');
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

/*nextSlide():

Purpose: Advances to the next slide.
Steps:
Checks if the current slide is already the last one (curSlide === maxSlide):
If so, resets to the first slide (curSlide = 0).
Otherwise, increments the current slide index (curSlide++).
Calls goTo() to update slide positions.
prevSlide():

Purpose: Reverts to the previous slide.
Steps:
Checks if the current slide is already the first one (curSlide === 0):
If so, jumps to the last slide (curSlide = maxSlide).
Otherwise, decrements the current slide index (curSlide--).
Calls goTo() to update slide positions */

slides.forEach(function (slide, i) {
  slide.style.transform = `translateX(${100 * i}%)`;
});

// 0%, 100%, 200%, 300%
const goToSlide = function (curImg) {
  slides.forEach(function (slide, i) {
    slide.style.transform = `translateX(${100 * (i - curImg)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Making the slide respond to a keyboard event
document.addEventListener('keydown', function (e) {
  // console.log(e);

  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Dots feature (2)
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
});

//The Load Event: Fired by the window; This event gets fired when all the html and the css is loaded completely
window.addEventListener('load', function (e) {
  console.log('Page fully loaded:', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault()
//   console.log(e);
//   e.returnValue = '';
// });
////////////////////////
//Selecting Element
/*
console.log(document.documentElement); //to select the entire document of any webpage
console.log(document.head); //to select the head section of any webpage
console.log(document.body); //to select the body of the webpage

const header = document.querySelector('.header'); // to select a single element with the className
const allSection = document.querySelectorAll('.section'); //to select multiple elements with the same className
console.log(allSection);

document.getElementById('section-1'); //to select an element with the idName
const allButtons = document.getElementsByTagName('button'); //to select all elements by their tag name
console.log(allButtons);

document.getElementsByClassName('btn'); //to select element with class names

//Creating and Inserting elements
// .insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `Use cookies for improved functionality and analytics <button class="btn btn-close-cookie">Got it! </button>`;

header.insertAdjacentElement('beforebegin', message); // beforebegin, afterbegin, beforened, afterend

//To insert the newly created elements in the DOM
// header.prepend(message); //inserts the newly created element as the first child of the header element

// header.append(message) //adds the created element as the last child of the header element

// header.before(message); //Adds the new element before the header element
// header.after(message); //Adds the new element after the header element

// Deleting Elements
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//////// Styles, Attributes and Classes
// STYLES
message.style.backgroundColor = 'darkblue'; //to add css styles
message.style.width = '120%';

//to get the styles used on an element
console.log(getComputedStyle(message).fontSize);

//to add more values to a certain property, e.g font-size
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//Working with CSS custom properties (CSS variables), changing the css custom variable property using javascript
// document.documentElement.style.setProperty('--color-primary', 'orangered');

//ATTRIBUTES
// Standard
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.id);

// Another example on attribute
// To get the href value of an anchor tag
const navLink = document.querySelector('.nav__link');
console.log(navLink);

console.log(navLink.getAttribute('href'));

//to set another value for the attributes read
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

//Non-standard
// console.log(logo.getAttribute('designer'));

console.log(logo.src); // gets the absolute location
console.log(logo.getAttribute('src')); //to get the relative location of an attribute;

// CLASSES
// logo.classList.add('c'); // to add classname
// logo.classList.remove(v); // to remove classname
// logo.classList.toggle('c');
// logo.classList.contains('s'); // chekcs if the logo element contains the 's' class
*/

// Using the mouseenter event listener
// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

// another way of attaching an event listener to an element (old fashioned)
// h1.onmouseenter = function (e) {
//   alert('Hii :D');
// };

// Removing Event Listeners
/*
const alertHi = function (e) {
  alert('Hi : D');

  // Let's say, to remove event listener after 5 seconds
  setTimeout(() => {
    h1.removeEventListener('mouseenter', alertHi);
  }, 3000);
};
h1.addEventListener('mouseenter', alertHi); */

// EVENT PROPAGATION (CAPTURING AND BUBBLING);
// (255,255, 255)
// Generates random colors
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); //e.target basically means where the click event happens

  // Stop propagation
  // e.stopPropagation(); not really a good idea to stop event propagation
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget); // e.currentTarget is the element on the which the event handler is attached. the e.currentTarget is also the same as the 'this' keyword
});


// DOM TRAVERSING (WALKING THROUGH THE DOM; SELECTING ELEMENT BASED ON ANOTHER ELEMENT)
const h1 = document.querySelector('h1');
console.log(h1);

// Going downwards: selecting child elements
console.log(h1.querySelectorAll('.highlight')); // selects all the element with the highlight class that are a children of the h1 element
console.log((h1.childNodes.textContent = 'hii')); // selects the direct children only
console.log(h1.children); // modern way of selecting direct children of the h1 elements
h1.firstElementChild.style.color = 'white'; // selects the first child of the h1 element
h1.lastElementChild.style.color = 'orangered'; // selects the last child of the h1 element

// Going upwards: selecting parent elements
console.log(h1.parentNode); // selects the direct parent of the h1 element
console.log(h1.parentElement); // functions as the above code (modern way)

// Note: the closest method finds parent elements
h1.closest('.header').style.background = 'var(--gradient-secondary)'; // selects the closest parent element that has the 'header' class

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: selecting siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
*/
