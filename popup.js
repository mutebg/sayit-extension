 



$(document).ready( function(){
    var languageSelect = $('#languages'),
    volumeInput = $('#volume');

    //alert(volumeInput.val() );

    console.log( window.speechSynthesis );

    window.speechSynthesis.getVoices().forEach(function(voice) {
        var option = $('<option>');
        option.text( voice.name );
        option.val( voice.name );
        languageSelect.append( option );
        alert(voice.name)
    });    
});