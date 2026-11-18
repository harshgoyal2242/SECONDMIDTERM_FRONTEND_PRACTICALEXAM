  const form = document.getElementById('registrationForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            const successMessage = document.getElementById('successMessage');

            nameError.textContent = '';
            emailError.textContent = '';
            passwordError.textContent = '';
            confirmPasswordError.textContent = '';
            successMessage.textContent = '';

            let isValid = true;

            if (fullName.length < 3) {
                nameError.textContent = 'Name must have at least 3 characters.';
                isValid = false;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = 'Email must follow the pattern name@domain.com.';
                isValid = false;
            }

            const passwordPattern = /^(?=.*\d).{6,}$/;
            if (!passwordPattern.test(password)) {
                passwordError.textContent = 'Password must have at least 6 characters and contain at least one digit.';
                isValid = false;
            }

            if (confirmPassword !== password) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                isValid = false;
            }

            if (isValid) {
                successMessage.textContent = `Registration successfully welcome ${fullName}`;m
                form.reset();
            }
        });
