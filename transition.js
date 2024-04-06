var slideIndex = 0;

var intervalID = setInterval(nextSlide, 5000);

function nextSlide() {
  resetLoadingBar();
  clearInterval(intervalID);
  slideIndex++;
  showSlide(slideIndex);
  intervalID = setInterval(nextSlide, 5000);
}

function prevSlide() {
  resetLoadingBar();
  clearInterval(intervalID);
  slideIndex--;
  showSlide(slideIndex);
  intervalID = setInterval(nextSlide, 5000);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.team-card');
  if (index >= slides.length) { slideIndex = 0; }
  else if (index < 0) { slideIndex = slides.length - 1; }
  else {slideIndex = index; }
  slides.forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
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

