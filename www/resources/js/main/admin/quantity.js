$(document).ready(function () {
  jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up"></button><button class="quantity-button quantity-down"></button></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
        spinner.find("input").val(newVal);
      } else {
        var newValue = oldValue + 1;
        spinner.find("input").val(newValue);
      }
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.equipCatValidation').on('keydown keyup change', function(e){
      let iMaxValue = this.getAttribute('max');
      let iMinValue = this.getAttribute('min');
      if (parseInt(e.target.value) > parseInt(iMaxValue) && e.keyCode !== 46 && e.keyCode !== 8) {
          e.target.value = iMaxValue;
          e.preventDefault();

      }
      if (parseInt(e.target.value) < parseInt(iMinValue) && e.keyCode !== 46 && e.keyCode !== 8) {
          e.target.value = iMaxValue;
          e.preventDefault();
      }
  });

});
