console.log('InputTest');

//document.write('Hello world! <saver/>');

$(function() {
  console.log("docuemnt ready");
});

$(document).ready(function() {
  console.log("check");
	
  var $word = $('#word'),
    $description = $('#description'),
    $sentence = $('#sentence'),
    $save = $('#save'),
    $test = $('#test'),
    e = {};
	
	console.log('input data:');
	console.log(e);

  /* save button click handler */
  $save.on('click', function() {
    e = {
        data: 'save'+','+$word.val()+','+ $description.val()+','+$sentence.val(),
        sheetUrl: 'https://docs.google.com/spreadsheets/d/1ypev0xT4ttva8n4iC8XEroasqjAar_MoQ9dACX-7qBs/edit#gid=0',
        sheetTag: 'VocabularyWords'
    };
    $.get('https://script.google.com/macros/s/AKfycby-LvY1jAOHD9EPK7MZbxF40NqbSnXcL93Ha1v0e64mtUECWc1VKlNQMLNYpzy9r4hJPA/exec', e);
	console.log('sent data:');
	console.log(e);
  });
  
  /* test button click handler */
  $test.on('click', function() {
    e = {
        data: 'test'+','+ $word.val()+','+ $description.val()+','+$sentence.val(),
        sheetUrl: 'https://docs.google.com/spreadsheets/d/1ypev0xT4ttva8n4iC8XEroasqjAar_MoQ9dACX-7qBs/edit#gid=0',
        sheetTag: 'VocabularyWords'
    };
	
	var $data = $('#data')
    $.get('https://script.google.com/macros/s/AKfycby-LvY1jAOHD9EPK7MZbxF40NqbSnXcL93Ha1v0e64mtUECWc1VKlNQMLNYpzy9r4hJPA/exec', e, function(data) {
	    //alert("Data: " + data);
    item=data.split(",");
		$('#word').val(item[0]);    
    $('#description').val(item[1]);
    $('#sentence').val(item[2]);

		//document.write("Result = "+ data);
	});
	
	console.log('received data:');
	console.log(e);
	
  });
});
