$.index.open();

function onWhatMarcellusWallaceLookLike() {

	var vidWin = Titanium.UI.createWindow({
		title : 'Video View Demo',
		navBarHidden : true,
		backgroundColor : '#000'
	});

	var videoPlayer = Titanium.Media.createVideoPlayer({
		top : 2,
		autoplay : true,
		backgroundColor : 'black',
		height : 400,
		width : 400,
		mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
		scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
	});

	videoPlayer.url = '/video_doesHeLookLikeABitch.mp4';

	vidWin.add(videoPlayer);
	vidWin.open();
};

function onDoesHeLookLikeABitch() {
	Ti.Platform.openURL('http://vimeo.com/105078507?autoplay=1&badge=0');
};

function onLorem() {
	var win = Alloy.createController('lorem').getView();
	win.open();
};

function onMotherfuckingGifs() {
	var win = Alloy.createController('gif').getView();
	win.open();
};
