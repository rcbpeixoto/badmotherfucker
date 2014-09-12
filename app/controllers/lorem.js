$.lorem.addEventListener('android:back', function(e) {
	var confirmClear = Titanium.UI.createAlertDialog({
		message : 'Close window?',
		buttonNames : ['Yes', 'No']
	});
	confirmClear.show();
	confirmClear.addEventListener('click', function(e) {
		if (e.index === 0) {
			$.lorem.close();
		}
	});
}); 