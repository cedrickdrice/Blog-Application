document.addEventListener('DOMContentLoaded', function() {
  /* eslint-disable no-undef */
  // Modal for enable button
  function enableFeed() {
    Swal.fire({
      title: 'Enable Feed Displays',
      text: 'Are you sure you want to enable the selected feeds? Changes cannot be undone.',
      reverseButtons: true,
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Feed Enabled',
          text: 'Selected blog feeds have been enabled.',
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonColor: '#3971FF',
          confirmButtonText: 'Ok',
          position: 'top',
          // custom classes
          customClass: {
            container: 'alerts__button-container',
            popup: 'alerts__button-popup',
            closeButton: 'alerts__button-close',
            actions: 'alerts__button-action',
            cancelButton: 'alerts__button-cancel',
            title: 'alerts__button-title',
          },
          showClass: {
            popup: 'animate__animated animate__fadeIn',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut',
          },
        });
      }
    });
  }

  // Modal for disable button
  function disableFeed() {
    Swal.fire({
      title: 'Disable Feed Displays',
      text: 'Are you sure you want to disable the selected feeds? Changes cannot be undone.',
      reverseButtons: true,
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Feed Disabled',
          text: 'Selected blog feeds have been disabled.',
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonColor: '#3971FF',
          confirmButtonText: 'Ok',
          position: 'top',
          // custom classes
          customClass: {
            container: 'alerts__button-container',
            popup: 'alerts__button-popup',
            closeButton: 'alerts__button-close',
            actions: 'alerts__button-action',
            cancelButton: 'alerts__button-cancel',
            title: 'alerts__button-title',
          },
          showClass: {
            popup: 'animate__animated animate__fadeIn',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut',
          },
        });
      }
    });
  }
  // Modal function for delete
  function deleteFeed() {
    Swal.fire({
      title: 'Delete Feed',
      text: 'Are you sure you want to delete the selected feeds? Deleted feeds can no longer be retrieved.',
      reverseButtons: true,
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Feed Deleted',
          text: '1 Feed/s deleted.',
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonColor: '#3971FF',
          confirmButtonText: 'Ok',
          position: 'top',
          // custom classes
          customClass: {
            container: 'alerts__button-container',
            popup: 'alerts__button-popup',
            closeButton: 'alerts__button-close',
            actions: 'alerts__button-action',
            cancelButton: 'alerts__button-cancel',
            title: 'alerts__button-title',
          },
          showClass: {
            popup: 'animate__animated animate__fadeIn',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut',
          },
        });
      }
    });
  }
  // Modal for session expired
  function sessionExpired() {
    Swal.fire({
      title: 'Session has Expired',
      text: 'Log-in first to continue',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    }).then(() => {
      // Redirect here
    });
  }
  // Modal for Nothing is selected
  function nothingSelected() {
    Swal.fire({
      title: 'Nothing is selected',
      text: 'There are no selected items to update.',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // Modal for saving settings
  function saveFeedSettings() {
    Swal.fire({
      title: 'Save Success',
      text: `The blog feed settings have been saved`,
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // Modal for saving settings
  function saveDisplaySettings() {
    Swal.fire({
      title: 'Save Success',
      text: `The blog display settings have been saved`,
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // Modal for saving style settings
  function saveStyleSettings() {
    Swal.fire({
      title: 'Save Success',
      text: `The blog style settings have been saved`,
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // Modal for required field
  function requiredField() {
    Swal.fire({
      title: 'Fill Up Required Fields',
      text: 'Please fill up the missing required fields.',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // Modal for unsaved change
  function unsavedChanges() {
    Swal.fire({
      title: 'Unsaved Changes',
      text: 'Are you sure you want to leave? Changes will not be saved.',
      reverseButtons: true,
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Leave Page',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // Modal for system error
  function systemError() {
    Swal.fire({
      title: 'System error',
      text: 'Please try again. If issue persists, contact Customer Service for assistance.',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // Modal for setting location
  function locationSet() {
    Swal.fire({
      title: 'Blog Feed Location Set',
      text: 'Successfully saved the blog feed location',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  // upload display image modal
  function uploadImage() {
    Swal.fire({
      title: 'Upload Default Thumbnail.',
      html: `Please be careful not to expose personal information in the attached file. <br><br>
            <b style='color: #545454'>File Size</b>: Up to 300KB <br>
            <b style='color: #545454'>Accepted file types</b>: .png, .bmp, .jpg, .jpeg, .gif, .webp`,
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      }
    }).then(function(e) {
      // Unbind click event with preventDefault - run upload dialog box
      $('.img-file-wrapper').off( 'click' )
      document.getElementById('imgUpload').click();
    });
  }

  // Modal for enable button
  function saveBlogPost() {
    Swal.fire({
      title: 'Save Latest Blog Post/s',
      text: 'Are you sure you want to save the latest blog posts?',
      reverseButtons: true,
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Blog Post/s Saved',
          text: '1 blog post/s saved.',
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonColor: '#3971FF',
          confirmButtonText: 'Ok',
          position: 'top',
          // custom classes
          customClass: {
            container: 'alerts__button-container',
            popup: 'alerts__button-popup',
            closeButton: 'alerts__button-close',
            actions: 'alerts__button-action',
            cancelButton: 'alerts__button-cancel',
            title: 'alerts__button-title',
          },
          showClass: {
            popup: 'animate__animated animate__fadeIn',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut',
          },
        });
      }
    });
  }

  // Modal for enable button
  function removeBlogPost() {
    Swal.fire({
      title: 'Remove Recommended Blog Post/s',
      text: 'Are you sure you want to remove the recommended blog posts?',
      reverseButtons: true,
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Blog Post/s Removed',
          text: '1 blog post/s removed.',
          showCancelButton: false,
          showCloseButton: true,
          confirmButtonColor: '#3971FF',
          confirmButtonText: 'Ok',
          position: 'top',
          // custom classes
          customClass: {
            container: 'alerts__button-container',
            popup: 'alerts__button-popup',
            closeButton: 'alerts__button-close',
            actions: 'alerts__button-action',
            cancelButton: 'alerts__button-cancel',
            title: 'alerts__button-title',
          },
          showClass: {
            popup: 'animate__animated animate__fadeIn',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut',
          },
        });
      }
    });
  }

  // Modal for saving style settings
  function editPostThenSave() {
    Swal.fire({
      title: 'Blog Post Edit Saved',
      text: `Blog post details updated.`,
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Ok',
      position: 'top',
      // custom classes
      customClass: {
        container: 'alerts__button-container',
        popup: 'alerts__button-popup',
        closeButton: 'alerts__button-close',
        actions: 'alerts__button-action',
        cancelButton: 'alerts__button-cancel',
        title: 'alerts__button-title',
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
    });
  }

  document.addEventListener('click', function(e) {
    if (e.target.id === 'feed-button--enable') {
      enableFeed();
    } else if (e.target.id === 'feed-button--disable') {
      disableFeed();
    } else if (e.target.id === 'feed-button--delete') {
      deleteFeed();
    } else if (e.target.id === 'feed-button--session-expired') {
      sessionExpired();
    } else if (e.target.id === 'feed-button--nothing') {
      nothingSelected();
    } else if (e.target.id === 'feed-button--save') {
      saveFeedSettings();
    } else if (e.target.id === 'feed-button--required') {
      requiredField();
    } else if (e.target.id === 'feed-button--leave') {
      unsavedChanges();
    } else if (e.target.id === 'feed-button--error') {
      systemError();
    } else if (e.target.id === 'feed-button--loc-selector') {
      locationSet();
    } else if (e.target.id === 'display-button--save') {
      saveDisplaySettings();
    } else if (e.target.id === 'style-button--save') {
      saveStyleSettings();
    } else if (e.target.id === 'feed-button--post-save') {
      saveBlogPost();
    } else if (e.target.id === 'feed-button--post-remove') {
      removeBlogPost();
    } else if (e.target.classList.contains('feed-button--edit-post-save')) {
      editPostThenSave();
    }

  });
 
  // Show sweetalert before upload dialog box
  document.getElementById('imgUpload').addEventListener('change', function() {
    $('.img-file-wrapper').on('click',function(event){
      event.preventDefault();
      uploadImage();
    });
  });
  $('.img-file-wrapper').on('click',function(evt){
    evt.preventDefault();
    uploadImage();
  });
});
