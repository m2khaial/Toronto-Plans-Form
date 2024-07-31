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

        document.getElementById('tripForm').style.display = 'none';
        document.getElementById('congratsMessage').classList.remove('hidden');
    });

    // Reveal reward handler
    document.getElementById('revealReward').addEventListener('click', function() {
        document.getElementById('reward').classList.remove('hidden');
    });
});

// Existing JavaScript code...

document.getElementById('tripForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let gender = document.getElementById('gender').value;
    let cheated = document.getElementById('cheated').value;

    if (gender === 'male' && cheated === 'no') {
        alert("Ik ur a man and have a tendency to lie but no lying allowed on this form");
        return;
    }

    let selectedCuisines = document.querySelectorAll('input[name="cuisine"]:checked');
    if (selectedCuisines.length > 2) {
        alert("You can only select up to 2 cuisines.");
        return;
    }

    var form = document.getElementById("tripForm");
    var status = document.getElementById("form-status");
    var data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form.";
                }
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form.";
    });
});

document.getElementById('revealReward').addEventListener('click', function() {
    document.getElementById('reward').classList.remove('hidden');
});
