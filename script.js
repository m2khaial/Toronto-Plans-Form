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

var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var gender = document.querySelector('input[name="gender"]:checked').value;
var cheated = document.querySelector('input[name="cheated"]:checked').value;
var earliestArrive = document.querySelector('input[name="earliestArrive"]:checked').value;
var latestLeave = document.querySelector('input[name="latestLeave"]:checked').value;
var favoriteThings = document.getElementById('favoriteThings').value;
var questions = document.getElementById('questions').value;
var fitCheck = document.getElementById('fitCheck').value;

var messageBody = "Name: " + firstName + " " + lastName +
    "<br/> Gender: " + gender +
    "<br/> Have you ever cheated?: " + cheated +
    "<br/> Earliest you can arrive: " + earliestArrive +
    "<br/> Latest you have to leave: " + latestLeave +
    "<br/> Favorite things about the hosts: " + favoriteThings +
    "<br/> Any questions: " + questions +
    "<br/> Fit check file: " + fitCheck;

function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mhkhaial15@gmail.com",
    Password : "0FAFF2D5CFF6CC7BC3942FB5FCCC2F04EF43",
    To : 'm2khaial@uwaterloo.ca',
    From : document.getElementById("firstName").value,
    Subject : "This is the subject",
    Body : messageBody,
}).then(
message => alert("Form submitted")
).catch(
    error => console.error("Error sending email:", error)
);
}