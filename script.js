const toggleBtn = document.getElementById('toggleOther');
  const otherSection = document.getElementById('other-opportunities');

  toggleBtn.addEventListener('click', () => {
    otherSection.classList.toggle('hidden');
    if(!otherSection.classList.contains('hidden')) {
      toggleBtn.textContent = "Hide Opportunities";
    } else {
      toggleBtn.textContent = "Other Opportunities";
    }
  });