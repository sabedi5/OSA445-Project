// validation.js

function validateForm() {
    var exercise = document.getElementById('exercise').value;
    var duration = document.getElementById('duration').value;
    var exerciseError = document.getElementById('exerciseError');
    var durationError = document.getElementById('durationError');
    var isValid = true;

    exerciseError.textContent = '';
    durationError.textContent = '';

    if (exercise.trim() === '') {
        exerciseError.textContent = 'Please enter the exercise.';
        isValid = false;
    }

    if (isNaN(duration) || duration <= 0) {
        durationError.textContent = 'Please enter a valid positive duration.';
        isValid = false;
    }

    return isValid;
}
