$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
});

function submitFunc() {
    console.log("I am here");
    var test = $("#tbl :input").serialize();
}

