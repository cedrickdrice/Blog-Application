document.addEventListener('DOMContentLoaded', function() {
  /* eslint-disable no-undef */
  const toggleSwitch = document.querySelector('#switchB__toggle');
  // Toggle modal enable and disable
  function enableBlog() {
    if (this.checked) {
      Swal.fire({
        text: 'Blog App enabled',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
        customClass: {
          container: 'alerts__switch-container',
          popup: 'alert__switch-popup',
          content: 'alert__switch-content',
        },
        showClass: {
          popup: 'animate__animated animate__fadeIn',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut',
        },
      });
    } else {
      Swal.fire({
        text: 'Blog App disabled',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
        customClass: {
          container: 'alerts__switch-container',
          popup: 'alert__switch-popup',
          content: 'alert__switch-content',
        },
        showClass: {
          popup: 'animate__animated animate__fadeIn',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut',
        },
      });
    }
  }

  // Add event listener for the switch
  toggleSwitch.addEventListener('click', enableBlog);
});
