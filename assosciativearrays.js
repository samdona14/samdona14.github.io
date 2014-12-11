//assosciative arrays
<script src="https://www.google.com/jsapi"></script>
<script>
google.load('jquery', '1.3.1');
</script>

<div id="hover">
<p>Click me</p>
</div>
<script>
$( "#hover" ).mouseover(function() {
  $( "#hover" ).append( "<div>Handler for .mouseover() called.</div>" );
});
  var card = {
    'ace':'14'
    'king' :'13'
    'queen' :'12'
    'jack' :'11'

  }

document.write(card.ace)

</script>
