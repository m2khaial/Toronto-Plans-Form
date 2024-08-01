document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the cheating options based on gender
    function updateCheatingOptions() {
        const gender = document.querySelector('input[name="data[gender]"]:checked');
        const cheatedNo = document.getElementById('cheatedNo');

        if (gender && gender.value === 'male') {
            cheatedNo.disabled = true; // Disable 'No' option
            cheatedNo.checked = false; // Uncheck 'No' if it was checked
        } else {
            cheatedNo.disabled = false; // Enable 'No' option
        }
    }

    // Add event listeners to gender radio buttons
    const genderRadios = document.querySelectorAll('input[name="data[gender]"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', updateCheatingOptions);
    });

    // Initialize the form on page load
    updateCheatingOptions();

    // Form submission handler
    document.getElementById('tripForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let gender = document.querySelector('input[name="data[gender]"]:checked').value;
        let cheated = document.querySelector('input[name="data[cheated]"]:checked').value;

        if (gender === 'male' && cheated === 'no') {
            alert("Ik ur a man and have a tendency to lie but no lying allowed on this form");
            return;
        }

        let selectedCuisines = document.querySelectorAll('input[name="data[cuisine][]"]:checked');
        if (selectedCuisines.length > 2) {
            alert("You can only select up to 2 cuisines.");
            return;
        }

        // Hide form and show congrats message
        document.getElementById('tripForm').style.display = 'none';
        document.getElementById('congratsMessage').classList.remove('hidden');
    });

    // Reveal reward handler
    document.getElementById('revealReward').addEventListener('click', function() {
        document.getElementById('reward').classList.remove('hidden');
    });
});


var form = document.getElementById('tripForm');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("tripForm")),
    }).then(response => response.json()).then(html => {
        alert("Form submitted successfully!");
        document.getElementById('tripForm').style.display = 'none';
        document.getElementById('congratsMessage').classList.remove('hidden');
    });
});
