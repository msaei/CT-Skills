var comParksEnabled = false;
var rrStationsEnabled = false;
var gasStationsEnabled = false;
var evChargingEnabled = false;
var busStopsEnabled = false;

function enableMarkers(array)
{
	var length = array.length;
	for(var i = 0; i < length; i++)
		array[i].setVisible(false);
}

function disableMarkers(array)
{
	var length = array.length;
	for(var i = 0; i < length; i++)
		array[i].setVisible(true);
}

//Toggle button clicked
$(document).on('click', '.toggle-button', function() {
    $(this).toggleClass('toggle-button-selected');
});

//Click on commuter parks toggle button
$(document).on('click', '.comParks', function() {
    if (comParksEnabled)
	{
		console.log("Com parks clicked");
		disableMarkers(commParksMarkers);
	}
    else
		enableMarkers(commParksMarkers);
});

//Click on gas stations toggle button
$(document).on('click', '.gasStations', function() {
    if (gasStationsEnabled)
		disableMarkers(gasStationsMarkers);
    else
		enableMarkers(gasStationsMarkers);
});

//Click on ev charging toggle button
$(document).on('click', '.evCharging', function() {
    if (evChargingEnabled)
		disableMarkers(chargeStationsMarkers);
    else
		enableMarkers(chargeStationsMarkers);
});

//Click on bus stops toggle button
$(document).on('click', '.busStops', function() {
    if (busStopsEnabled)
		disableMarkers(busStopsMarkers);
    else
		enableMarkers(busStopsMarkers);
});

//Click on railroad stations toggle button
$(document).on('click', '.rrStations', function() {
    if (rrStationsEnabled)
		disableMarkers(rrStationsMarkers);
    else
		enableMarkers(rrStationsMarkers);
});