// validation.js

function validateForm() {
    var exercise = document.getElementById('exercise').value;
    var duration = document.getElementById('duration').value;

    if (exercise.trim() === '') {
        alert('Please enter the exercise.');
        return false;
    }

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid positive duration.');
        return false;
    }

    return true;
}
