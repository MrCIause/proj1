let range;
let vid;

document.addEventListener("DOMContentLoaded", () => {
  range = document.getElementById("customRange1");
  vid = document.getElementById("main-background");

});

function getVolume() {
  alert(range.value / 100);
}

function setVol() {
  vid.volume = range.value / 100;
  vid.muted = false;
}

function goToSignUp() {
  window.location = '/proj1/SignUp/signUp.html';
}

function goToScores() {
  window.location = '/proj1/scores/scores.html';
}

function goToPlay() {
  window.location = '/proj1/ex1/game.html';
}

function goToContact() {
  window.location = '/proj1/contact/contact.html';
}

function goToGallery() {
  window.location = '/proj1/gallery/gallery.html';
}

function goToDevs() {
  window.location = '/proj1/devs/devs.html';
}