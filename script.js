document.querySelector('h1').addEventListener('click', function() {
  if (this.textContent === 'Hello, World!') {
    this.textContent = 'Text changed!';
    this.style.color = 'green';
  } else {
    this.textContent = 'Hello, World!';
    this.style.color = 'red';
  }
});   