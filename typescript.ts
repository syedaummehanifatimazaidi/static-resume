// Grab the elements from the DOM
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Function to toggle the visibility of the Skills section
const toggleSkills = () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
};

// Add event listener to the toggle button
toggleButton.addEventListener('click', toggleSkills);
