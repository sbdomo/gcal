function calendarTab(device){
	var html = '';

	var src = get_device_state(device, "urn:utz-com:serviceId:GCal1", "gcalsrc", 0);

	html += '<iframe src="https://www.google.com/calendar/embed?';
	html += 'showPrint=0&amp;';
	html += 'showTabs=0&amp;';
	html += 'showCalendars=0&amp;';
	html += 'showTz=0&amp;';
	html += 'mode=WEEK&amp;';
	html += 'height=500&amp;';
	html += 'wkst=1&amp;';
	html += 'bgcolor=%23FFFFFF&amp;';
	html += 'src=' + src + '&amp;';
	html += 'color=%23711616&amp"';
	html += ' style=" border-width:0 " width="600" height="350" frameborder="0" scrolling="no"></iframe>';
	
	set_panel_html(html);
}

