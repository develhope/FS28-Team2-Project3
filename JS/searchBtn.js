document.querySelector('.search-button button').addEventListener('mousemove', function(e) {
  const rect = this.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  this.style.setProperty('--mouse-x', `${x}%`);
  this.style.setProperty('--mouse-y', `${y}%`);
});

console.log(x, y);