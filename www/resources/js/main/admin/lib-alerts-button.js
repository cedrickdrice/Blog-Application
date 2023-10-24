export default {
    // Modal for saving settings
    saveFeedSettings() {
        Swal.fire({
            title: 'Save Success',
            text: `The blog settings have been saved`,
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
    },
    // Modal for required field
    requiredField() {
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
    },
    // Modal for unsaved change
    unsavedChanges() {
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
}
