// Grab the elements from the DOM
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Function to toggle the visibility of the Skills section
var toggleSkills = function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
};
// Add event listener to the toggle button
toggleButton.addEventListener('click', toggleSkills);
