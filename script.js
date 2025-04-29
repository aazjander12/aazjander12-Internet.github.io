document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.join-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    // Grab form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const college = document.getElementById('college').value.trim();
    const about = document.getElementById('about').value.trim();

    // Basic validation
    if (!name || !email || !college || !about) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Simple email format check
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If everything is valid
    alert('Form submitted successfully!');
    form.reset(); // Clear the form
  });

  function validateEmail(email) {
    // Simple regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
