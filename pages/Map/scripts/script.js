function initMap(){
    
    var options = {
        center: {lat: 25.0496884, lng: 121.5206111},
        zoom: 12,

        streetViewControl: false,
        mapTypeControl: false,
        mapTypeControlOptions: false,
        zoomControl: false,
        fullscreenControl: false,
    };

    //Map
    map = new google.maps.Map(document.getElementById("map"),options)


    const markers = [
        [
            "大台北駕訓班",
            25.083749,
            121.5233198,
            "images/car.svg",
            45,
            45
        ],
        [
            "濱江汽車駕訓班",
            25.0722256,
            121.5401152,
            "images/car.svg",
            45,
            45
        ],

];


    for(let i = 0;i<markers.length;i++){
        const carmarker = markers[i];
         //Marker
        const marker = new google.maps.Marker({
        position: {lat: carmarker[1], lng: carmarker[2]},
        map,
        title: carmarker[0],
        icon: {
            url: carmarker[3],
            scaledSize: new google.maps.Size(carmarker[4],carmarker[5])
        },
        animation: google.maps.Animation.DROP
    });

    const infowindow = new google.maps.InfoWindow({
        content: carmarker[0],
    });
    
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
    
    }
}



const search = Vue.createApp({
    data () {
    return {
        map: null,
        autocomplete: null, // google map Autocomplete method
        site: '', // place API要綁定的搜尋框
        place: null // 存place確定後回傳的資料
    } 
    }
});

search.mount('#search');

