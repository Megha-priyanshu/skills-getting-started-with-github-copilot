document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        messageDiv.textContent = 'Please fill in all fields';
        messageDiv.className = 'message error';
        return;
    }
    
    // Simulate login (in a real app, this would send data to a server)
    if (username && password) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.className = 'message success';
        
        // Clear form
        setTimeout(() => {
            document.getElementById('loginForm').reset();
            messageDiv.textContent = '';
            messageDiv.className = 'message';
        }, 2000);
    } else {
        messageDiv.textContent = 'Invalid credentials';
        messageDiv.className = 'message error';
    }
});
