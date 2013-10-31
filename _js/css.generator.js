//*********************************************
// defaults
//*********************************************
$(function(){

	$(window).load(function(){
		defaultStyles();
	})

	$(function(){
		$('#control').draggable();
	})

	
	$('div.contentcontrol *').on('change keyup click',function(){
		changeStyle(this);
	})
	
	$('#targetselect').on('change', function(){
		console.log('changed');
	})
	

	$('#returnvaluescloser').click(function(){
		$('#returnvalues').css('marginLeft', '-9000px')
	})

});



function defaultStyles(){
	//this sucks and needs to be rewritten
	$('.contentcontrol').each(function(){

		$(this).children('input').each(function(){
			var className = $(this).attr('name');
			var classValue = $(this).val();
			$('#target *').css(className, classValue)
			
		})
		$(this).children('select').each(function(){
			var className = $(this).attr('name');
			var classValue = $(this).val();
			$('#target *').css(className, classValue)
			
		})
	})
	//this sucks and needs to be rewritten
	
		
}

function changeStyle(id){

	var targetID = $('#targetselect').val();
	console.log(targetID);
	var className = $(id).attr('name');
	var classValue = $(id).val();

	if (targetID != "All"){
	$('#target ' + targetID).css(className, classValue)
	}
	
	if (targetID == "All") {
		$('#target').css(className, classValue)
	}
	
}

function getValues(){
	var formatBody = $('#target').attr('style');
	var formatH1 = $('#target h1').attr('style');
	var formatH2 = $('#target h2').attr('style');
	var formatH3 = $('#target h3').attr('style');
	var formatH4 = $('#target h4').attr('style');
	var formatH5 = $('#target h5').attr('style');
	var formatH6 = $('#target h6').attr('style');
	var formatP = $('#target p').attr('style');
	var formatEm = $('#target em').attr('style');
	var formatStrong = $('#target strong').attr('style');
	var formatA = $('#target a').attr('style');

	var formatBody = formatBody.replace(/;/gi, ';\n');
	var formatH1 = formatH1.replace(/;/gi, ';\n');
	var formatH2 = formatH2.replace(/;/gi, ';\n');
	var formatH3 = formatH3.replace(/;/gi, ';\n');
	var formatH4 = formatH4.replace(/;/gi, ';\n');
	var formatH5 = formatH5.replace(/;/gi, ';\n');
	var formatH6 = formatH6.replace(/;/gi, ';\n');
	var formatP = formatP.replace(/;/gi, ';\n');
	var formatEm = formatEm.replace(/;/gi, ';\n');
	var formatStrong = formatStrong.replace(/;/gi, ';\n');
	var formatA = formatA.replace(/;/gi, ';\n');

	var responseValues = ' ' +
		'body {\n' + formatBody + '}\n' +
		'h1 {\n' + formatH1 + '}\n' +
		'h2 {\n' + formatH2 + '}\n' +
		'h3 {\n' + formatH3 + '}\n' +
		'h4 {\n' + formatH4 + '}\n' +
		'h5 {\n' + formatH5 + '}\n' +
		'h6 {\n' + formatH6 + '}\n' +
		'p {\n' + formatP + '}\n' +
		'em {\n' + formatEm + '}\n' +
		'strong {\n' + formatStrong + '}' +
		'a {\n' + formatA + '}'

	
	var positionTarget = $('#target').offset();
	
	$('#returnvaluescontent').html('<pre>'+responseValues+'</pre>');
	
	$('#returnvalues').css('top', positionTarget.top + 'px').css('left', positionTarget.left + 'px').css('marginLeft', 0);
		

}



