function initMap(){
        var posInicial = {lat: 6.1981498, lng: -75.5736734813};
        var map,heatmap;
        var heatmapData = [
          new google.maps.LatLng(6.20589513, -75.56066301),
          new google.maps.LatLng(6.18497696, -75.56835808),
          new google.maps.LatLng(6.19429683, -75.5560461),
          new google.maps.LatLng(6.18918508, -75.58318927),
          new google.maps.LatLng(6.21312203, -75.5685853),
          new google.maps.LatLng(6.18915818, -75.57697586),
          new google.maps.LatLng(6.20655295, -75.57326035),];
        var pointArray = new google.maps.MVCArray(heatmapData);

        map =  new google.maps.Map(document.getElementById('map'),{
          zoom:13,
          // scrollwheel:false,
          styles: estilos.retro,
          center: posInicial,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          streetViewControl: false
          // mapTypeId: 'satellite'
        });

        map.addListener('click',function(e){
          // pointArray.push(new LatLng(e.latLng));
          pointArray.getArray().forEach(function(value,index,array_x){
            console.log( "index:" +  index + "   "+ "value: " + value + "    ")
          });
          pointArray.push(e.latLng)

        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data : pointArray
        });
        heatmap.setMap(map);


}// end Map init




