var slideIndexP = 0;

//var intervalID = setInterval(nextSlide, 5000);

function nextSlideP() {
  resetLoadingBar();
  //clearInterval(intervalID);
  slideIndexP++;
  showSlide(slideIndexP);
  //intervalID = setInterval(nextSlide, 5000);
}

function prevSlideP() {
  resetLoadingBar();
  //clearInterval(intervalID);
  slideIndexP--;
  showSlide(slideIndexP);
  //intervalID = setInterval(nextSlide, 5000);
}

function showSlideP(index) {
  const slides = document.querySelectorAll('.team-card-picture');
  if (index >= slides.length) { slideIndexP = 0; }
  else if (index < 0) { slideIndexP = slides.length - 1; }
  else {slideIndexP = index; }
  slides.forEach(slide => slide.style.transform = `translateX(-${slideIndexP * 100}%)`);
}

function resetLoadingBar() {
  // Select the loading bar element
  var line = document.querySelector('.loading .line');
  // Remove the line element from the DOM
  line.parentNode.removeChild(line);
  // Force reflow
  void document.querySelector('.loading .line_box').offsetWidth;
  // Re-add the line element to the DOM
  document.querySelector('.loading .line_box').appendChild(line);
}
