'use strict';

//Setting Up Coding Challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener(`click`, () => {
    header.style.color = `blue`;
  });
})();

//How/Why did this work?
//The explanation here is "Closure". It works becuase of closure.
//As can be seen. even though the envioronment in which the function
//in the eventlistener is gone. IT is till able to access the variables
//that were created by the time the function was created or its birth place.
//i-e The header variable which was created in the parent function is still
//in the backpack (Closure)
