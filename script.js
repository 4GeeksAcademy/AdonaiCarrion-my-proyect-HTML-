// Bootstrap 5 Form Validation
(function () {
    'use strict'
  
    // Get the form element
    const form = document.getElementById('payment-form');
    // Get the alert element
    const alertBox = document.getElementById('form-alert');
  
    if (!form) {
      return; // Exit if form not found
    }
  
    form.addEventListener('submit', function (event) {
      // Prevent default submission behavior
      event.preventDefault()
      event.stopPropagation()
  
      // Check form validity BEFORE adding the class
      const isFormValid = form.checkValidity();
  
      // Add 'was-validated' class to show feedback
      form.classList.add('was-validated')
  
      // Show or hide the custom alert message
      if (!isFormValid) {
        alertBox.classList.remove('d-none'); // Show alert
      } else {
        alertBox.classList.add('d-none'); // Hide alert
        // Form is valid!
        // You can add your form submission logic here, e.g., using fetch() or AJAX
        console.log('Form is valid. Submitting...');
        // Example: alert('Form submitted successfully!');
        // To actually submit after validation (if not using AJAX):
        // form.submit();
        // Or more commonly, send data via fetch/XHR
      }
  
    }, false)
  })()