$(function() {
  $('input[name="daterange"]').daterangepicker({
  		opens: 'right',
		autoUpdateInput: false
	}, function(start, end) {
       	console.log("Callback has been called!");
    		$('input[name="Checkin"]').val(start.format('YYYY-MM-DD'));
           $('input[name="Checkout"]').val(end.format('YYYY-MM-DD'));
  	});

	$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MMM DD, YYYY') + ' \u2192 ' + picker.endDate.format('MMM DD, YYYY'));
  	});

  	$('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('Check-in \u2192 Check-out');
  	});

});