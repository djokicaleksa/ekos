
    let map;
    let marker;
    let lat, lng;

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // $('#search').on('click', function (e) {
    //     e.preventDefault();

    function getPins() {


        var address = $('#address').val();

        $.ajax({
            url: 'map-by-address',
            method: 'post',
            dataType: 'JSON',
            data: {address: address},
            success: function (data) {

                lat = data[0];
                lng = data[1];

                var myLatlng = new google.maps.LatLng(lat, lng);
                var geocoder = new google.maps.Geocoder();
                var infowindow = new google.maps.InfoWindow();

                google.maps.event.addDomListener(window, 'load', initialize(myLatlng, geocoder, infowindow));
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    // });



// var myLatlng = new google.maps.LatLng(44.81509918249363,20.464116358610454);


function initialize(myLatlng, geocoder, infowindow) {
    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

    };

    map = new google.maps.Map(document.getElementById("myMap"), mapOptions);

    marker = new google.maps.Marker({
        map: map,
        position: myLatlng,
        draggable: true
    });

    geocoder.geocode({'latLng': myLatlng}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {

                // $('#address').val(results[0].formatted_address);
                // $('#city').val(results[0].address_components[2].long_name);

                $('#latitude').val(marker.getPosition().lat());
                $('#longitude').val(marker.getPosition().lng());
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
            }
        }
    });


    google.maps.event.addListener(marker, 'dragend', function () {

        geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    // $('#address').val(results[0].formatted_address);
                    $('#latitude').val(marker.getPosition().lat());
                    $('#longitude').val(marker.getPosition().lng());
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                }
            }
        });
    });

}

