var skillsBtn = document.querySelector('.skills');
var skillsModal = document.querySelector('#skillsModal');

skillsBtn.addEventListener('click', function(e) {
  e.preventDefault();
  skillsModal.classList.remove('hidden');
  skillsModal.classList.add('shown');
})

var workBtn = document.querySelector('.work');
var workModal = document.querySelector('#workModal');

workBtn.addEventListener('click', function(e) {
  e.preventDefault();
  workModal.classList.remove('hidden');
  workModal.classList.add('shown');
})
