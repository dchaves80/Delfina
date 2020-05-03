var result;
function loadcontrol(controlurl)
{
  $("#content").find("div").remove();
    $.get( controlurl, function( data ) {
        $( "#content" ).append( $(data) );
      },"text");
    
}