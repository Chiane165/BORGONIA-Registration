document.addEventListener('DOMContentLoaded', function() {
  const formContainer = document.querySelector('div');
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const errorMessages = formContainer.querySelectorAll('.error-message');
    errorMessages.forEach(el => el.textContent = '');

    let isValid = true;

    function showError(inputId, message) {
      const input = document.getElementById(inputId);
      let errorEl = input.nextElementSibling;
      
      if (!errorEl || !errorEl.classList.contains('error-message')) {
        errorEl = document.createElement('small');
        errorEl.className = 'error-message';
        input.parentNode.insertBefore(errorEl, input.nextSibling);
      }
      errorEl.textContent = message;
      isValid = false;
    }

    function isEmpty(value) {
      return !value || value.trim() === '';
    }

    const lettersOnly = /^[A-Za-z\s]+$/;
    const alphanumeric = /^[A-Za-z0-9]+$/;
    const mobilePattern = /^09\d{9}$/;
    const schoolIdPattern = /^\d{4}-\d{2}-\d{3}$/;

    const firstName = document.getElementById('firstname').value.trim();
    const middleName = document.getElementById('middlename').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const suffix = document.getElementById('myDropdown').value;
    const mobile = document.getElementById('mobile').value.trim();
    const section = document.getElementById('section').value.trim();
    const technology = document.getElementById('technology').value;
    const batch = document.getElementById('batch').value;
    const schoolId = document.getElementById('schoolid').value.trim();

    if (isEmpty(firstName)) {
      showError('firstname', 'First name is required.');
    } else if (!lettersOnly.test(firstName)) {
      showError('firstname', 'Only letters and spaces allowed.');
    }

    if (middleName && !/^[A-Za-z\s]+$/.test(middleName)) {
      showError('middlename', 'Only letters and spaces allowed.');
    }

    if (isEmpty(lastName)) {
      showError('lastname', 'Last name is required.');
    } else if (!lettersOnly.test(lastName)) {
      showError('lastname', 'Only letters and spaces allowed.');
    }


    if (suffix === 'Suffix') {
      showError('myDropdown', 'Please select a suffix.');
    }

    if (isEmpty(mobile)) {
      showError('mobile', 'Mobile number is required.');
    } else if (!mobilePattern.test(mobile)) {
      showError('mobile', 'Invalid mobile number format.');
    }

    if (isEmpty(section)) {
      showError('section', 'Section is required.');
    } else if (!/^[A-Za-z]$/.test(section)) {
      showError('section', 'Section must be exactly one letter.');
    }

    if (technology === 'technology') {
      showError('technology', 'Please select a technology.');
    }

    if (batch === 'batch') {
      showError('batch', 'Please select a batch.');
    }

    if (isEmpty(schoolId)) {
      showError('schoolid', 'School ID is required.');
    } else if (!schoolIdPattern.test(schoolId)) {
      showError('schoolid', 'School ID must be in the format xxxx-xx-xxx.');
    }

    if (isValid) {
      alert('Form submitted successfully!');
    }
  });
});
