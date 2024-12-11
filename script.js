$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = $(this).serialize();

        // Send data to PHP script
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            success: function(response) {
                $('#result').html(response).fadeIn(500); // Fade in the result
            },
            error: function() {
                $('#result').html('<p>An error occurred while processing your request.</p>').fadeIn(500);
            }
        });
    });
});
$('#registrationForm').on('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    $('#loader').show(); // Show loader

    // ... (validation and AJAX code)

    $.ajax({
        // ... (AJAX settings)
        complete: function() {
            $('#loader').hide(); // Hide loader after completion
        }
    });
});