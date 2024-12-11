$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = $('#name').val();
        const email = $('#email').val();
        const password = $('#password').val();

        // Display the result
        $('#result').html(`
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
        `).fadeIn(); // Show the result with fade-in effect

        // Optionally, you can send the data to a PHP script using AJAX
        /*
        $.post('process.php', { name: name, email: email, password: password }, function(response) {
            $('#result').html(response).fadeIn();
        });
        */
    });
});
