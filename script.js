const toggleOtherBtn = document.getElementById('toggleOther');
const otherSection = document.getElementById('other-opportunities');

const exploreBtn = document.querySelector('.explore-btn');
const mainSection = document.getElementById('opportunities');

// Toggle Other Opportunities
toggleOtherBtn.addEventListener('click', () => {
  otherSection.classList.toggle('hidden');
  if(!otherSection.classList.contains('hidden')) {
    toggleOtherBtn.textContent = "Hide Opportunities";
  } else {
    toggleOtherBtn.textContent = "Other Opportunities";
  }
});

// Toggle Main Opportunities
exploreBtn.addEventListener('click', () => {
  mainSection.classList.toggle('hidden');
  if(!mainSection.classList.contains('hidden')) {
    exploreBtn.textContent = "Hide Opportunities";
  } else {
    exploreBtn.textContent = "Explore Now";
  }
});
