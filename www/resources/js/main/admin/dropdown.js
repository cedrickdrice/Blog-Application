function handleSelect() {
  /* eslint-env jquery */
  $('body').delegate('.mSelect:not(.disabled, .skeleton) .eSelect', 'click', function() {
    if ($(this).parents('.mSelect').hasClass('open')) {
      $(this).parents('.mSelect').removeClass('open');
    } else {
      $('.mSelect:not(.disabled, .skeleton)').removeClass('open');
      $(this).parents('.mSelect').addClass('open');
    }
  });

  $('body').delegate('.mSelect .dropdown .option > li > a', 'click', function() {
    var value = $(this).parents('.mSelect').find('.value span');
    var findClass = $(this).attr('class');
    if (!$(this).parent().hasClass('selected')) {
      $(this).parent().addClass('selected').siblings()
      .removeClass('selected');
      $(this).parents('.mSelect').removeClass('open');
      if ($(this).parents('.mSelect').hasClass('typeFlag')) {
        value.attr('class', findClass);
      }
      value.text($(this).text());
    }
  });
}

$(document).ready(function() {
  handleSelect();
});
