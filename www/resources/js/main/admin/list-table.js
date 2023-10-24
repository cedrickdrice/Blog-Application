/* global $, SimpleBar */
$(document).ready(function() {
  const oTableButtons = $(`<div class="feed-table__buttons-group">
                              <div class="blog-feed__left-grp-btn">
                                <div class="feed-button" id="feed-button--post-save" >Save</div>
                                <div class="feed-button feed-button--remove" id="feed-button--post-remove">Remove</div>
                              </div>
                              <div class="blog-feed__right-grp-btn">
                                <div class="feed-button feed-button--refresh" id="feed-button--refresh">Refresh</div>
                              </div>
                            </div>`);
  const oTable = $('#list-table').DataTable({
    ajax: '../../json/feed-table.json',
    columns: [
      {
        data: '',
      },
      { data: 'id' },
      { data: 'created' },
      // image data here
      { data: null },
      { data: 'store' },
      { data: 'title' },
      {
        data: null,
        defaultContent: '<label class="switchB eSelected"><input type="checkbox" checked class="toggle-disable"/><span class="slider toggle-subtle--styleB switchB--table round big"></span></label>',
      },
    ],
    columnDefs: [
      {
        targets: 5,
        className: 'feed-table__description',
        render(data) {
          return '<span class="feed-table__text-hover">' + data +'</span>' + '<span class="feed-button feed-button--edit-post"></span>';
        },
      },
      // Sample table image
      {
        targets: 3,
        className: 'feed-table__thumbnail',
        render(data) {
          return '<img src="../../../img/thumbnail-sample.png">';
        },
      },
      {
        targets: 0,
        searchable: false,
        orderable: false,
        className: 'feed-table__checkbox-head',
        render(data) {
          return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
        },
      }],
    // Sample Blog post missing scenario
    createdRow: function( row, data, dataIndex ) {
      if ( dataIndex == 2 ) {
        $(row).addClass( 'missing-post-row' );
        $(row).find('.toggle-disable').prop('checked', false);
        $(row).find('input[type=checkbox]').attr("disabled", true);
        $(row).on('click', function(){
          Swal.fire({
            title: 'Blog Post Missing',
            text: `Blog Post is missing from the feed. It may be updated/removed in the original blog.`,
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
        })
      }
    },
    processing: true,
    scrollCollapse: true,
    scrollY: '440px',
    order: [[1, 'asc']],
    responsive: true,
    language: {
      loadingRecords: '&nbsp;',
      info: 'Records: <span id="total-files">_TOTAL_</span>',
      lengthMenu: '_MENU_',
      processing: '<div class="loader"><div class="loaderBar"></div></div>',
      paginate: {
        previous: '&lt;',
        next: '&gt;',
      },
    },
    lengthMenu: [
      [10, 20, 50],
      ['10 rows', '20 rows', '50 rows'],
    ],
    dom: '<"feed-table__count-section"il><"feed-table__buttons-wrapper wrapper-header">rt<"feed-table__buttons-wrapper"><"feed-table__table-pagination"p><"clear">',
    drawCallback: function settings() {
      const oButtonWrapper = $('.feed-table__buttons-wrapper');
      const oHeaderButtonWrapper = $('.feed-table__buttons-wrapper.wrapper-header  > .feed-table__buttons-group');
      const oTableScrollWrapper = $('.dataTables_scrollBody');
      const scrollHeader = $('.dataTables_scrollHead');

      oButtonWrapper.append(oTableButtons);
      oHeaderButtonWrapper.remove();

      const simplebar = new SimpleBar(oTableScrollWrapper[0]);
      
      oTableScrollWrapper.css('overflow', 'initial');
      scrollHeader.css('borderTop', '1px solid #E6E8EB');
    },
  });

  // Handle click on "Select all" control
  $('#select-all-radio').on('click', function() {
    // Get all rows with search applied
    var rows = oTable.rows({ search: 'applied' }).nodes();
    // Check/uncheck checkboxes for all rows in the table
    $('.feed-table__checkbox-head input[type="checkbox"]', rows).prop('checked', this.checked);
    // make all rows bg blue toggleable
    if (this.checked) {
      $('.feed-table__checkbox-head input[type="checkbox"]', rows).closest('tr').addClass('selected-row');
    } else {
      $('.feed-table__checkbox-head input[type="checkbox"]', rows).closest('tr').removeClass('selected-row');
    }
  });

  // Toggle class when checkbox is clicked/unclicked
  $('#list-table').on('change', '.feed-table__checkbox-head input[type="checkbox"]', function() {
    if (this.checked) {
      $(this).closest('tr').addClass('selected-row');
    } else {
      $(this).closest('tr').removeClass('selected-row');
    }

    // check checkbox head if all checkbox is check
    if (($('.feed-table__checkbox-head input[type="checkbox"]').length - 1) === $('.feed-table__checkbox-head input[type="checkbox"]').filter(':checked').length) {
      const head = $('#select-all-radio');
      head.prop('indeterminate', false);
      head.prop('checked', true);
    }
  });

  // Handle click on checkbox to set indeterminate state of "Select all" control
  $('#list-table tbody').on('change', 'input[type="checkbox"]', function() {
    // If checkbox is not checked
    if (!this.checked) {
      const el = $('#select-all-radio').get(0);
      // If "Select all" control is checked and has 'indeterminate' property
      if (el && el.checked && ('indeterminate' in el)) {
        // Set visual state of "Select all" control
        // as 'indeterminate'
        el.indeterminate = true;
      }
    }
  });

  // Disable row bg
  document.addEventListener('click', function(e) {
    if (e.target && e.target.className === 'toggle-disable') {
      if (e.target.checked) {
        e.target.closest('tr').classList.remove('disabled-row');
      } else {
        e.target.closest('tr').classList.add('disabled-row');
      }
    } else if (e.target && e.target.id === 'feed-button--refresh') {
      // Reload table
      oTable.ajax.reload();
      // hide table body
      // demo refresh
      $('#list-table tbody').css('visibility', 'hidden');
      setTimeout(function() {
        $('#list-table tbody').css('visibility', 'visible');
      }, 200);
    }
  });

  // For edit scenario on blog post list
  $('#list-table').on( 'mouseenter', '.feed-table__text-hover', function () {
    $(this).siblings().css('display', 'inline-block');
  } );

  $('#list-table').on( 'mouseleave', '.feed-table__description', function () {
    $(this).children('.feed-button--edit-post').css('display', 'none');
    $(this).children('.feed-button--edit-post-save').css('display', 'none');
  } );

  $('#list-table').on( 'click', '.feed-button--edit-post', function () {
    $(this).replaceWith( '<span class="feed-button feed-button--edit-post-save">save</span>' );
  } );

  $('#list-table').on( 'click', '.feed-button--edit-post-save', function () {
    $(this).replaceWith( '<span class="feed-button feed-button--edit-post"></span>' );

  } );
  


});
