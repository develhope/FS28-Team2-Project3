document.querySelector('.mini-cal-btn button').addEventListener('mousemove', function(e) {
  const rect = this.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  this.style.setProperty('--mouse-x', `${x}%`);
  this.style.setProperty('--mouse-y', `${y}%`);
});

document.querySelector('.booking-btn button').addEventListener('mousemove', function(e) {
  const rect = this.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  this.style.setProperty('--mouse-x', `${x}%`);
  this.style.setProperty('--mouse-y', `${y}%`);
});
