// console.log(`Karub!!`);

const passwordBox = document.getElementById("password");
const button = document.getElementById("button");
const copy = document.getElementById("copy");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "<,@$#!&*.?/{}[]|-+=%";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

copy.addEventListener("click", function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
});

button.addEventListener("click", createPassword);

// document.addEventListener("onLoad", function () {
//   password = "";
// });

// DOMContentLoaded:
// Fires as soon as the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and other resources to finish loading.
// Generally faster than load because it triggers as soon as the DOM is ready.
// Suitable for cases where you want to execute JavaScript as soon as the DOM structure is available, even if all external resources haven't finished loading.
document.addEventListener("DOMContentLoaded", function () {
  password = "";
  passwordBox.value = password;
});

// load:
// Fires when the entire page, including all styles, images, and other resources, has finished loading.
// Useful when you need to ensure that all external resources are fully loaded before executing your JavaScript.
// Slower than DOMContentLoaded because it waits for all resources.

// window.addEventListener("load", function () {
//   password = "";
//   passwordBox.value = password;
// });
