document.addEventListener('DOMContentLoaded', function() {
  const displaySaveButton = document.getElementById('display-button--save');
  const styleSaveButton = document.getElementById('style-button--save');

  const feedTitle = document.querySelector('.settings-preview__feed-title');
  const postTitleLimitInput = document.getElementById('post-title-input');

  const postDescLimitInput = document.getElementById('post-desc-input');

  const postContainer = document.querySelector('.settings-preview__container');
  const singleItemPost = document.querySelector('.settings-preview__items');
  const postperPage = document.getElementById('post-per-page-input');

  const thumbnailDropdownValue = document.querySelector('.blog-settings-options__thumb .value span');
  const scrollingDropdownValue = document.querySelector('.blog-settings-options__scrolling .value span');
  const scrollingHeightInput = document.getElementById('scroll-size-input');
  const previewContainer = document.querySelector('.settings-preview');

  const containerDropdownValue = document.querySelector('.blog-settings-options__cont-width .value span');
  const containerWidthInput = document.getElementById('cont-width-input');
  const previewParent = document.querySelector('.settings-border');

  const gridLayoutRadio = document.getElementById('grid-layout-option');
  const listLayoutRadio = document.getElementById('list-layout-option');
  const timelineLayoutRadio = document.getElementById('timeline-layout-option');
  const carouselLayoutRadio = document.getElementById('carousel-layout-option');
  const smallWidgetLayoutRadio = document.getElementById('widget-layout-option');
  const sliderLayoutRadio = document.getElementById('slider-layout-option');

  const resetBtnStyle = document.querySelector('.feed-button--reset-style-setting');
  listLayoutRadio.addEventListener('click', previewStyleSettings);
  carouselLayoutRadio.addEventListener('click', previewStyleSettings);

  // Disable image uploading ==========================
  $('body').delegate('.mSelect.blog-settings-options__thumb .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if(currentVal === 'Disabled') {
      $('.img-file-wrapper').addClass('img-file-wrapper--disabled');
    } else if(currentVal === 'Enabled') {
      $('.img-file-wrapper').removeClass('img-file-wrapper--disabled');
    }
  });

  // Change image when input type image is changed ==========================
  document.getElementById('imgUpload').addEventListener('change', function(e) {
    var selectedFile = e.target.files[0];
    var reader = new FileReader();
    const postThumbnails = document.querySelectorAll('.setting-preview__thumbnail');

    postThumbnails.forEach(function(item) {
      item.title = selectedFile.name;
    })

    document.querySelector('.upload-file-text').innerHTML = selectedFile.name;

    reader.onload = function(event) {
      postThumbnails.forEach(function(item) {
        item.src = event.target.result;
      })
    };

    reader.readAsDataURL(selectedFile);
  });

  // Disable input
  function disableAdjust(optionLink, sizeInput, quantityInput, quantityNavInput) {
    $('body').delegate(optionLink, 'click', function() {
      const currentVal = $(this).text();
      console.log(currentVal);
      if(currentVal === 'Disabled' || currentVal === 'Automatic') {
        $(sizeInput).addClass('quantity--disabled');
        $(quantityInput).addClass('quantity--not-allowed');
        $(quantityNavInput).css('pointerEvents', 'none');
      } else if(currentVal === 'Enabled' || currentVal === 'Custom' ) {
        $(sizeInput).removeClass('quantity--disabled');
        $(quantityInput).removeClass('quantity--not-allowed');
        $(quantityNavInput).css('pointerEvents', 'auto');
      }
    });
  }
  const scrollingOptions = '.mSelect.blog-settings-options__scrolling .dropdown .option > li > a';
  const scrollSizeInput = '#scroll-size-input';
  const quantityScrollingInput = '.quantity--scrolling-input';
  const quantityNavScrollingInput = '.quantity--scrolling-input .quantity-nav';

  const widthOptions = '.mSelect.blog-settings-options__cont-width .dropdown .option > li > a';
  const widthSizeInput = '#cont-width-input';
  const quantityWidthInput = '.quantity--width-input';
  const quantityNavWidthInput = '.quantity--width-input .quantity-nav';

  disableAdjust(scrollingOptions, scrollSizeInput, quantityScrollingInput, quantityNavScrollingInput);
  disableAdjust(widthOptions, widthSizeInput, quantityWidthInput, quantityNavWidthInput);

  // Reset button for display settings
  const resetBtnDisplay = document.querySelector('.feed-button--reset-display-setting');

  resetBtnDisplay.addEventListener('click', function() {
    const postTitle = document.querySelectorAll('.settings-preview__post-title');

    postTitleLimitInput.value = 100;
    postTitle.forEach(function(item) {
      item.innerHTML = 'This is the Blog Post Title';
    })
  });

  // Style Settings

  let feedTitleFont;
  let feedTitleFontSize;
  let feedTitleColor;

  let postTitleFont;
  let postTitleFontSize;
  let postTitleColor;

  let dateFont;
  let dateFontSize;
  let dateColor;

  let postDescFont;
  let postDescFontSize;
  let postDescColor;

  let readmoreFont;
  let readmoreFontSize;
  let readmoreColor;

  // FEED TITLE
  $('body').delegate('.mSelect.blog-settings-options__choose-font-feed-title .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if(currentVal === 'Default') {
      feedTitleFont = 'Malgun Bold'
    } else if (currentVal === 'Arial') {
      feedTitleFont = 'Arial'
    } else if (currentVal === 'Dotum') {
      feedTitleFont = 'Dotum'
    } else if (currentVal === 'Calibri') {
      feedTitleFont = 'Calibri'
    }
  });

  $('body').delegate('.mSelect.blog-settings-options__choose-font-size-feed-title .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if (currentVal !== 'Default') {
      feedTitleFontSize = currentVal;
    } else {
      feedTitleFontSize = 18;
    }
  });

  // BLOG POST TITLE
  $('body').delegate('.mSelect.blog-settings-options__choose-font-post-title .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if(currentVal === 'Default') {
      postTitleFont = 'Malgun'
    } else if (currentVal === 'Arial') {
      postTitleFont = 'Arial'
    } else if (currentVal === 'Dotum') {
      postTitleFont = 'Dotum'
    } else if (currentVal === 'Calibri') {
      postTitleFont = 'Calibri'
    }
  });

  $('body').delegate('.mSelect.blog-settings-options__choose-font-size-post-title .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if (currentVal !== 'Default') {
      postTitleFontSize = currentVal;
    } else {
      postTitleFontSize = 12;
    }
  });

  // DATE
  $('body').delegate('.mSelect.blog-settings-options__choose-font-date .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if(currentVal === 'Default') {
      dateFont = 'Malgun'
    } else if (currentVal === 'Arial') {
      dateFont = 'Arial'
    } else if (currentVal === 'Dotum') {
      dateFont = 'Dotum'
    } else if (currentVal === 'Calibri') {
      dateFont = 'Calibri'
    }
  });

  $('body').delegate('.mSelect.blog-settings-options__choose-font-size-date .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if (currentVal !== 'Default') {
      dateFontSize = currentVal;
    } else {
      dateFontSize = 10;
    }
  });

  // POST DESC
  $('body').delegate('.mSelect.blog-settings-options__choose-font-post-desc .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if(currentVal === 'Default') {
      postDescFont = 'Malgun'
    } else if (currentVal === 'Arial') {
      postDescFont = 'Arial'
    } else if (currentVal === 'Dotum') {
      postDescFont = 'Dotum'
    } else if (currentVal === 'Calibri') {
      postDescFont = 'Calibri'
    }
  });

  $('body').delegate('.mSelect.blog-settings-options__choose-font-size-post-desc .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if (currentVal !== 'Default') {
      postDescFontSize = currentVal;
    } else {
      postDescFontSize = 12;
    }
  });

  // Read more
  $('body').delegate('.mSelect.blog-settings-options__choose-font-readmore .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if(currentVal === 'Default') {
      readmoreFont = 'Malgun'
    } else if (currentVal === 'Arial') {
      readmoreFont = 'Arial'
    } else if (currentVal === 'Dotum') {
      readmoreFont = 'Dotum'
    } else if (currentVal === 'Calibri') {
      readmoreFont = 'Calibri'
    }
  });

  $('body').delegate('.mSelect.blog-settings-options__choose-font-size-readmore .dropdown .option > li > a', 'click', function() {
    const currentVal = $(this).text();
    if (currentVal !== 'Default') {
      readmoreFontSize = currentVal;
    } else {
      readmoreFontSize = 12;
    }
  });

    function previewStyleSettings(){
        const postTitle = document.querySelectorAll('.settings-preview__post-title');
        const postDesc = document.querySelectorAll('.settings-preview__content');

        // Post title limit ==========================
        const postTitleLimitValue = postTitleLimitInput.value;
        // store the text and limit its string if a user adjusted the post title limit
        const postTitleValue = 'This is the Blog Post Title';
        const limitTitle = postTitleValue.substring(0, postTitleLimitValue);

        postTitle.forEach(function(item) {
            item.innerHTML = limitTitle;
        })

        // Post Description limit ==========================
        const postDescLimitValue = postDescLimitInput.value;
        const postDescValue = 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum....';
        const limitDesc = postDescValue.substring(0, postDescLimitValue);
        postDesc.forEach(function(item) {
            item.innerHTML = limitDesc;
        })

        // Post per page ==========================
        const postperPageValue = postperPage.value;
        const numberOfPost = document.querySelectorAll('.settings-preview__items').length;
        const postItems = `<div class='settings-preview__items'>
                        <div class='settings-preview__flex-cont'>
                          <img src='/images/preview-icon.svg' class='setting-preview__thumbnail' alt='Blog preview thumbnail'>
                          <div class='settings-preview__right-content'>
                            <div class='settings-preview__date'>Fri, 22 Oct 2021</div>
                            <div class='settinsg-preview__breadcrumbs'>
                              <div class='settings-preview__source'>
                                NAVER BLOG
                              </div>
                              <span class='settings-preview__post-title'>This is the Blog Post Title</span>
                            </div>
                            <div class='settings-preview__content'>
                              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum....
                            </div>
                            <a href='#none' class='settings-preview__read-more'>Read more ></a>
                          </div>
                        </div>
                      </div>`

        // if # of post is less than post per page limit, clone and add post equal to the post per page limit minus the # of post.
        // Post is 5 and limit is 6 , create and add 1 post to the post container
        if( postperPageValue > numberOfPost ) {
            // If the post layout is a carousel
            if (postContainer.classList.contains('slick-initialized')) {
                for (var i = 0; i < (postperPageValue - numberOfPost); i++) {
                    // Add slide depending on the post per page value
                    $('.settings-preview__container').slick('slickAdd', postItems);
                }
            } else {
                for (var j = 0; j < (postperPageValue - numberOfPost); j++) {
                    postContainer.append(singleItemPost.cloneNode(true));
                }
            }
        }
            // If limit is less than the # of post, subtract post per page limit to # of post
        // Post is 5 and limit is 2 , 5-2 === 3 , remove last child 3 times
        else if(postperPageValue < numberOfPost) {
            // If the post layout is a carousel
            if (postContainer.classList.contains('slick-initialized')) {
                for (var k = 0; k < (numberOfPost - postperPageValue); k++) {
                    // Remove slide depending on the post per page value
                    $('.settings-preview__container').slick('slickRemove', postperPageValue - 1);
                }
            } else {
                for (var l = 0; l < (numberOfPost - postperPageValue); l++) {
                    postContainer.removeChild(postContainer.lastElementChild);
                }
            }
        }

        const postThumbnails = document.querySelectorAll('.setting-preview__thumbnail');

        // Thumbnail dropdown value ==========================
        if (thumbnailDropdownValue.innerHTML === 'Disabled' ) {
            postThumbnails.forEach(function(item) {
                item.setAttribute('style', 'display:none !important');
            })
        } else if(thumbnailDropdownValue.innerHTML === 'Enabled') {
            postThumbnails.forEach(function(item) {
                if (postContainer.classList.contains('settings-preview__container--layout-slider')) {
                    item.setAttribute('style', 'display:block');
                }
                else if (!item.classList.contains('setting-preview__thumbnail--slider-hidden')) {
                    item.setAttribute('style', 'display:block !important');
                }
            })
        }

        // Layout ==========================
        const GRID_layout = 'settings-preview__container--layout-grid';
        const TIMELINE_layout = 'settings-preview__container--layout-timeline';
        const CAROUSEL_layout = 'settings-preview__container--layout-carousel';
        const WIDGET_layout = 'settings-preview__container--layout-widget';
        const SLIDER_layout = 'settings-preview__container--layout-slider';

        const removeSlick = function() {
            if($('.settings-preview__container').hasClass('slick-initialized')){
                $('.settings-preview__container').slick('unslick');
            }
        }
        const allPost = document.querySelectorAll('.settings-preview__items');
        if (listLayoutRadio.checked) {
            postContainer.classList.remove(GRID_layout, SLIDER_layout, TIMELINE_layout, CAROUSEL_layout, WIDGET_layout);
            allPost.forEach(function(item) {
                item.setAttribute('style', 'width:auto');
            })
            removeSlick();
        } else if (gridLayoutRadio.checked) {
            postContainer.classList.add(GRID_layout);
            postContainer.classList.remove(SLIDER_layout, TIMELINE_layout, CAROUSEL_layout, WIDGET_layout);
            removeSlick();
        } else if (carouselLayoutRadio.checked) {
            postContainer.classList.add(CAROUSEL_layout);
            postContainer.classList.remove(SLIDER_layout, TIMELINE_layout, GRID_layout, WIDGET_layout);
            removeSlick();
            // Check if the preview is already a slick slider
            if(!$('.settings-preview__container').hasClass('slick-initialized')){
                $('.settings-preview__container').slick({
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                });
            }
        } else if (timelineLayoutRadio.checked) {
            postContainer.classList.add(TIMELINE_layout);
            postContainer.classList.remove(SLIDER_layout, CAROUSEL_layout, GRID_layout, WIDGET_layout);
            removeSlick();
        } else if (smallWidgetLayoutRadio.checked) {
            postContainer.classList.add(WIDGET_layout);
            postContainer.classList.remove(SLIDER_layout, TIMELINE_layout, CAROUSEL_layout, GRID_layout);
            feedTitle.style.textAlign = 'center';
            removeSlick();
            if(!$('.settings-preview__container').hasClass('slick-initialized')){
                $('.settings-preview__container').slick({
                    infinite: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    centerMode: true,
                });
            }
        } else if (sliderLayoutRadio.checked) {
            postContainer.classList.add(SLIDER_layout);
            postContainer.classList.remove(WIDGET_layout, TIMELINE_layout, CAROUSEL_layout, GRID_layout);
            feedTitle.style.textAlign = 'center';
            removeSlick();
            if(!$('.settings-preview__container').hasClass('slick-initialized')){
                $('.settings-preview__container').slick({
                    infinite: false,
                });
            }
        }
    }

  // Function for sweetalert on clicking alert, just pass the reset function to execute
  function resetAlert(resetSetting) {
    // upload display image modal
    Swal.fire({
      title: 'Reset Settings',
      text: 'Are you sure you want to reset all settings? Alll settings will be reverted to the default and changes will not be saved.',
      showCloseButton: true,
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonColor: '#3971FF',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Reset All Settings',
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
    }).then(result => {
      if( result.isConfirmed ) {
        resetSetting();
      }
    });
  }

  resetBtnStyle.addEventListener('click', function() {
    const postTitle = document.querySelectorAll('.settings-preview__post-title');
    const dateAndTime = document.querySelectorAll('.settings-preview__date');
    const postDesc = document.querySelectorAll('.settings-preview__content');
    const readmore = document.querySelectorAll('.settings-preview__read-more');

    function resetStyle() {
      feedTitleFont = '';
      feedTitleFontSize = '';
      feedTitleColor = '#667084';

      postTitleFont = '';
      postTitleFontSize = '';
      postTitleColor = '#C4C4C4';

      dateFont = '';
      dateFontSize = '';
      dateColor = '#E8E4E4';

      postDescFont = '';
      postDescFontSize = '';
      postDescColor = '#C4C4C4';

      readmoreFont = '';
      readmoreFontSize = '';
      readmoreColor = '#008BCC';

      // Reset elements
      feedTitle.style.fontFamily = "";
      feedTitle.style.fontSize = "";
      feedTitle.style.color = "";
      feedTitle.style.display = 'block';

      function resetElementStyle(el) {
        el.forEach(function(item) {
          item.style.fontFamily = "";
          item.style.fontSize = "";
          item.style.color = "";
          item.style.display = 'block';
        });
      }

      resetElementStyle(postTitle);
      resetElementStyle(dateAndTime);
      resetElementStyle(postDesc);
      resetElementStyle(readmore);

      // Reset form
      function resetForm(el) {
        document.querySelectorAll(`.blog-settings-options__choose-font-${el} .dropdown .option > li`).forEach(function(item){
          item.removeAttribute('class');
            document.querySelector(`.blog-settings-options__choose-font-${el} .value span`).textContent = 'Default';

          if (item.querySelector('a').textContent === 'Default') {
            item.classList.add('selected');
          }
        });
      }
      resetForm('feed-title');
      resetForm('size-feed-title');
      resetForm('post-title');
      resetForm('size-post-title');
      resetForm('size-post-title');
      resetForm('date');
      resetForm('size-date');
      resetForm('post-desc');
      resetForm('size-post-desc');
      resetForm('readmore');
      resetForm('size-readmore');

      // // Reset color pickr
      // feedTitleColorPickr.setColor(feedTitleColor);
      // postTitleColorPickr.setColor(postTitleColor);
      // dateColorPickr.setColor(dateColor);
      // postDescColorPickr.setColor(postDescColor);
      // readmoreColorPickr.setColor(readmoreColor);

      // Reset toggle buttons
      function resetToggle(el) {
        document.querySelector(`.blog-settings-options__${el}-row .switchB input`).checked = true;
      }
      resetToggle('feed-title');
      resetToggle('post-title');
      resetToggle('date');
      resetToggle('post-desc');
      resetToggle('readmore');

      Swal.fire({
        title: 'Reset Settings Success',
        text: 'All settings have been restored to default.',
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
    // Call sweetalert on Style reset
    resetAlert(resetStyle);
  })
});
