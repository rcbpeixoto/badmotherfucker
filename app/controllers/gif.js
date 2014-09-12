$.back.addEventListener('click', function(){
	$.gif.close();
});


var imageArray = [];
for(var i=1; i<21; i++) {
	var name = '/images/does_he_look_like_a_bitch'+i+'.gif';
    imageArray.push(name);
    Ti.API.info("loaded: "+ name);
}
$.animImage.images = imageArray;
$.animImage.start();
 
$.gif.open();