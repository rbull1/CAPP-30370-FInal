/**
 * @author Ryan Bull
 */

console.log('width: ' + $(window).width());
if($(window).width() > 700) {
	$('.nav').show();
};

$(window).resize(function(e) {
	console.log('width: ' +$(this).width());
	if($(window).width > 700) {
		$('.nav').show()
	}
});

$(document).on('click',"img", function(e){
	console.log('alt: ' + $(this).attr('alt'));
	console.log('width: ' + $(this).width());
	console.log('height ' + $(this).height());
});

$(document).on('click', "h1,h2,h3,h4,h5,h6", function(e){
	console.log('Text: ' + $(this).text());
	console.log('Color: ' + $(this).css('color'));
	console.log('Font-Size: ' + $(this).css('font-size'));
});