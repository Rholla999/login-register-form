const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const passwordInput = document.getElementById('password');
const verifyPasswordInput = document.getElementById('verifyPassword');
const errorMessage = document.querySelector('.error');
const signUpEl = document.querySelector('signupEl');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




verifyPasswordInput.addEventListener('input', () => {
    if (verifyPasswordInput.value === '') {
        errorMessage.style.display = 'none';
        return;
    }
   
    if (passwordInput.value !== verifyPasswordInput.value) {
        errorMessage.textContent = 'Passwords do not match';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});


const overlayRight = document.querySelector('.overlay-right')

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
  overlayRight.style.display = "none";   // hide overlay-right
});
