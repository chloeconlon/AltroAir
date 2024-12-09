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
