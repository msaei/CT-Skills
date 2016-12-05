var commParksMarkers = [];
var gasStationsMarkers = [];
var busStopsMarkers = [];
var rrStationsMarkers = [];
var chargeStationsMarkers = [];

var commParksLatLng = [];
var gasStationsLatLng = [];
var busStopsLatLng = [];
var railroadLatLng = [];
var chargeStationsLatLng = [];
var commParksMap;
var busStopsMap;
var rMap;
var gasMap;

//commuter
$.getJSON( "https://data.ct.gov/api/views/xf58-9cbu/rows.json", function( json ) {
    var length = json.data.length;
    var commParksData = [];
    for (var i = 0; i < length; i++)
    {
        commParksLatLng[i] = new google.maps.LatLng(
            //Latitude
            json.data[i][20][1],
            //Longitude
            json.data[i][20][2]
        );
        commParksMarkers[i] = new google.maps.Marker({map: map});
        commParksData.push(new google.maps.LatLng(
            //Latitude
            json.data[i][20][1],
            //Longitude
            json.data[i][20][2]
        ));
        //commParksMarkers[i].setPosition(commParksLatLng[i]);
    }
    commParksMap = new google.maps.visualization.HeatmapLayer({
        data: commParksData,
        map: map
    });
    commParksMap.setMap(null);
});
function toggleComParkMap() {
    commParksMap.setMap(commParksMap.getMap() ? null : map);
}


//transit bus
$.getJSON( "https://data.hartford.gov/api/views/uxtm-zebz/rows.json", function( json ) {
    var length = json.data.length;
    var busStopData = [];
    for (var i = 0; i < length; i++)
    {
        busStopsLatLng[i] = new google.maps.LatLng(
            //Latitude
            json.data[i][15][1],
            //Longitude
            json.data[i][15][2]
        );
		busStopsMarkers[i] = new google.maps.Marker({map: map});
        busStopData.push(new google.maps.LatLng(
            //Latitude
            json.data[i][15][1],
            //Longitude
            json.data[i][15][2]
        ));
        //busStopsMarkers[i].setPosition(busStopsLatLng[i]);
    }
    busStopsMap = new google.maps.visualization.HeatmapLayer({
        data: busStopData,
        map: map
    });
    busStopsMap.setMap(null);
});
function toggleBusStopsMap() {
    busStopsMap.setMap(busStopsMap.getMap() ? null : map);
}


//railroad
$.getJSON( "https://data.ct.gov/api/views/cd53-hypt/rows.json", function( json ) {
    var length = json.data.length;
    var rrData = [];
    for (var i = 0; i < length; i++)
    {
        railroadLatLng[i] = new google.maps.LatLng(
            //Latitude
            json.data[i][13],
            //Longitude
            json.data[i][12]
        );
		rrStationsMarkers[i] = new google.maps.Marker({map: map});
        rrData.push(new google.maps.LatLng(
            //Latitude
            json.data[i][13],
            //Longitude
            json.data[i][12]
        ));
        //rrStationsMarkers[i].setPosition(railroadLatLng[i]);
    }
    rMap = new google.maps.visualization.HeatmapLayer({
        data: rrData,
        map: map
    });
    rMap.setMap(null);
});
function toggleRRMap() {
    this.rMap.setMap(rMap.getMap() ? null : map);
}



//gas station generator
$.getJSON( "gasStation.json", function( json ) {
    var length = json.data.length;
    var gasData = [];
    for (var i = 0; i < length; i++)
    {
        gasStationsLatLng[i] = new google.maps.LatLng(
            //Latitude
            json.data[i][11][1],
            //Longitude
            json.data[i][11][2]
        );
		gasStationsMarkers[i] = new google.maps.Marker({map: map});
        gasData.push(new google.maps.LatLng(
            //Latitude
            json.data[i][11][1],
            //Longitude
            json.data[i][11][2]
        ));
        //gasStationsMarkers[i].setPosition(gasStationsLatLng[i]);
    }
    gasMap = new google.maps.visualization.HeatmapLayer({
        data: gasData,
        map: map
    });
    gasMap.setMap(null);

});
function toggleGasMap() {
    gasMap.setMap(gasMap.getMap() ? null : map);
}

//electrical charge station
$.getJSON( "https://data.ct.gov/api/views/d2yg-9hwe/rows.json", function( json ) {
    var length = json.data.length;
    var chargeData = [];
    for (var i = 0; i < length; i++)
    {
        chargeStationsLatLng[i] = new google.maps.LatLng(
            //Latitude
            json.data[i][13][1],
            //Longitude
            json.data[i][13][2]
        );
		chargeStationsMarkers[i] = new google.maps.Marker({map: map});
        chargeData.push(new google.maps.LatLng(
            //Latitude
            json.data[i][13][1],
            //Longitude
            json.data[i][13][2]
        ));
        //chargeStationsMarkers[i].setPosition(chargeStationsLatLng[i]);
    }
        chargeMap = new google.maps.visualization.HeatmapLayer({
            data: chargeData,
            map: map
        });
    chargeMap.setMap(null);

});
function toggleChargeMap() {
    chargeMap.setMap(chargeMap.getMap() ? null : map);
}