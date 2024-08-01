document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the cheating options based on gender
    function updateCheatingOptions() {
        const gender = document.querySelector('input[name="gender"]:checked');
        const cheatedNo = document.getElementById('cheatedNo');
        
        if (gender && gender.value === 'male') {
            cheatedNo.disabled = true; // Disable 'No' option
        } else {
            cheatedNo.disabled = false; // Enable 'No' option
        }
    }

    // Add event listeners to gender radio buttons
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', updateCheatingOptions);
    });

    // Initialize the form on page load
    updateCheatingOptions();

    // Form submission handler
    document.getElementById('tripForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let gender = document.querySelector('input[name="gender"]:checked').value;
        let cheated = document.querySelector('input[name="cheated"]:checked').value;

        if (gender === 'male' && cheated === 'no') {
            alert("Ik ur a man and have a tendency to lie but no lying allowed on this form");
            return;
        }

        let selectedCuisines = document.querySelectorAll('input[name="cuisine"]:checked');
        if (selectedCuisines.length > 2) {
            alert("You can only select up to 2 cuisines.");
            return;
        }

        // Hide form and show congrats message
        document.getElementById('tripForm').style.display = 'none';
        document.getElementById('congratsMessage').classList.remove('hidden');
    });

    fetch(document.getElementById('tripForm').action, {
        method: 'POST',
        body: new FormData(document.getElementById('tripForm')),
    })
    .then(response => response.json())
    .then(data => {
        alert("Form submitted successfully!");
        document.getElementById('tripForm').style.display = 'none';
        document.getElementById('congratsMessage').classList.remove('hidden');
    })
    .catch(error => {
        console.error("Error submitting form:", error);
    });
});

// Reveal reward handler
document.getElementById('revealReward').addEventListener('click', function() {
    document.getElementById('reward').classList.remove('hidden');
});