'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1Ijoic3N0YXZuc2JvIiwiYSI6ImNqc3B2ZzZ6dzExbnMzenN6MnJxc3k2NnQifQ.dXVkOTacJ1TBTFR9l9-0gA'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sstavnsbo/cjsqb5mth1qpj1fqn86eywruv',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})