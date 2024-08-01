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

        // Validate required fields
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let cheated = document.querySelector('input[name="cheated"]:checked');
        let selectedCuisines = document.querySelectorAll('input[name="cuisine"]:checked');

        if (!firstName || !lastName || !gender || !cheated) {
            alert("Please fill out all required fields.");
            return;
        }

        if (gender.value === 'male' && cheated.value === 'no') {
            alert("Ik ur a man and have a tendency to lie but no lying allowed on this form");
            return;
        }

        if (selectedCuisines.length > 2) {
            alert("You can only select up to 2 cuisines.");
            return;
        }

var form = document.getElementById('tripForm');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("tripForm")),
          }).then(
              response => response.json()
          ).then(data => {
            alert("Form submitted successfully!");
            document.getElementById('tripForm').style.display = 'none';
            document.getElementById('congratsMessage').classList.remove('hidden');
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
