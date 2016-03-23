$(".configure").click(function() {
  var order = "order";/*$(".order").map(function() {
      return $(this).val();
  }).get();*/
  var check = "check";/*$(".checked").map(function() {
      return $(this).val();
  }).get();*/
  var request = $.ajax({
     url: '/set_configuration.php',
     type: 'GET',
     data: {order: order, check: check}
  });
  request.done(function() {
      alert("Request succeeded");
  })
  request.fail(function() {
      alert("Request failed");
  })
  
});
