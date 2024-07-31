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

    document.getElementById('tripForm').style.display = 'none';
    document.getElementById('congratsMessage').classList.remove('hidden');
});

document.getElementById('revealReward').addEventListener('click', function() {
    document.getElementById('reward').classList.remove('hidden');
});

