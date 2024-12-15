document.getElementById('continueBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        fetch('users.json')
            .then((response) => response.json())
            .then((data) => {
                const user = data.users.find((user) => user.username === username && user.password === password);
                if (user) {
                    alert('Login Successful!');
                } else {
                    alert('Invalid username or password.');
                }
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    } else {
        alert('Please fill in both fields.');
    }
});

function login() {
    window.location.href = "index.html";
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.addEventListener('click', function (event) {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-menu');
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('open');
    }
});




document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevents the form from refreshing the page

    // Retrieve values from the form
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;

    // Simple validation check
    if (name && email && message) {
        // If the form is valid, show success message
        document.getElementById('response-message').innerText = "Thank you for reaching out, " + name + "! We will get back to you soon.";
        document.getElementById('response-message').style.display = "block";
        document.getElementById('contact-form').reset();  // Reset the form fields
    } else {
        // If form is not valid, show error message
        document.getElementById('response-message').innerText = "Please fill in all fields.";
        document.getElementById('response-message').style.display = "block";
    }
});


function continuenow() {
    document.getElementById("continueBtnpp")
    windows.location.href = "paymentpage.html";
}


