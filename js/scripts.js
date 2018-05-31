function typeChange(selectObj) { 
	// get the index of the selected option 
	var idx = selectObj.selectedIndex; 
	// get the value of the selected option 
	var which = selectObj.options[idx].value;
	if (which=='All') {
		window.location.href='http://research.perkinswill.com';
	}
	else {
		window.location.href=which;
	}
}