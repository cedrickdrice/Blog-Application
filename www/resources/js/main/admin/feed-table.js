/* global $, SimpleBar */
$(document).ready(function() {
  const oTableButtons = $(`<div class="feed-table__buttons-group">
                              <div class="blog-feed__left-grp-btn">
                                <div class="feed-button feed-button--enable" id="feed-button--enable" >Enable</div>
                                <div class="feed-button feed-button--disable" id="feed-button--disable">Disable</div>
                                <div class="feed-button feed-button--delete" id="feed-button--delete">Delete</div>
                              </div>
                              <div class="blog-feed__right-grp-btn">
                                <div class="feed-button feed-button--refresh" id="feed-button--refresh">Refresh</div>
                                <a href="#none" class="feed-button feed-button--create" id="feed-button--create">Create Feed</a>
                              </div>
                            </div>`);

  const oTable = $('#feed-table').DataTable({
    ajax: '../../json/feed-table.json',
    columns: [
      {
        data: '',
      },
      { data: 'id' },
      { data: 'created' },
      { data: 'blog' },
      { data: 'store' },
      { data: 'title' },
      {
        data: null,
        defaultContent: '<a href="#none" class="feed-button feed-button--edit">edit</a>',
      },
      {
        data: null,
        defaultContent: '<label class="switchB eSelected"><input type="checkbox" checked class="toggle-disable"/><span class="slider toggle-subtle--styleB switchB--table round big"></span></label>',
      },
    ],
    columnDefs: [
      {
        targets: 5,
        className: 'feed-table__title',
        render(data) {
          return '<a href="#none">' + data + '</a>';
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
    order: [[1, 'asc']],
    scrollY: '440px',
    responsive: true,
    scrollCollapse: true,
    processing: true,
    language: {
      lengthMenu: '_MENU_',
      info: 'Records: <span id="total-files">_TOTAL_</span>',
      paginate: {
        previous: '&lt;',
        next: '&gt;',
      },
      loadingRecords: '&nbsp;',
      processing: '<div class="loader"><div class="loaderBar"></div></div>',
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

      const simpleBar = new SimpleBar(oTableScrollWrapper[0]);

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
  $('#feed-table').on('change', '.feed-table__checkbox-head input[type="checkbox"]', function() {
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

  // Handle click on checkbox to set state of "Select all" control
  $('#feed-table tbody').on('change', 'input[type="checkbox"]', function() {
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
      $('#feed-table tbody').css('visibility', 'hidden');
      setTimeout(function() {
        $('#feed-table tbody').css('visibility', 'visible');
      }, 200);
    }
  });
});
