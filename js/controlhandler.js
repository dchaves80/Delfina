var result;
function loadcontrol(controlurl)
{
    $.get( controlurl, function( data ) {
        $( "#content" ).append( $(data) );
      },"text");
    
}