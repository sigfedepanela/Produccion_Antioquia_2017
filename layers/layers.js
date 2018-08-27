var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_Antioquia_1 = new ol.format.GeoJSON();
var features_Antioquia_1 = format_Antioquia_1.readFeatures(json_Antioquia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antioquia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Antioquia_1.addFeatures(features_Antioquia_1);var lyr_Antioquia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antioquia_1, 
                style: style_Antioquia_1,
                title: '<img src="styles/legend/Antioquia_1.png" /> Antioquia'
            });var format_ProduccinToneladasAntioquia2017_2 = new ol.format.GeoJSON();
var features_ProduccinToneladasAntioquia2017_2 = format_ProduccinToneladasAntioquia2017_2.readFeatures(json_ProduccinToneladasAntioquia2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduccinToneladasAntioquia2017_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ProduccinToneladasAntioquia2017_2.addFeatures(features_ProduccinToneladasAntioquia2017_2);var lyr_ProduccinToneladasAntioquia2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduccinToneladasAntioquia2017_2, 
                style: style_ProduccinToneladasAntioquia2017_2,
    title: 'Producción (Toneladas) - Antioquia-2017<br />\
    <img src="styles/legend/ProduccinToneladasAntioquia2017_2_0.png" />  32 - 1000 <br />\
    <img src="styles/legend/ProduccinToneladasAntioquia2017_2_1.png" />  1000 - 2000 <br />\
    <img src="styles/legend/ProduccinToneladasAntioquia2017_2_2.png" />  2000 - 5000 <br />\
    <img src="styles/legend/ProduccinToneladasAntioquia2017_2_3.png" />  5000 - 10000 <br />\
    <img src="styles/legend/ProduccinToneladasAntioquia2017_2_4.png" />  10000 - 16400 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_Antioquia_1.setVisible(true);lyr_ProduccinToneladasAntioquia2017_2.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_Antioquia_1,lyr_ProduccinToneladasAntioquia2017_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_Antioquia_1.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_ProduccinToneladasAntioquia2017_2.set('fieldAliases', {'Id': 'Id', 'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton/': 'PROD.(Ton/', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_Antioquia_1.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_ProduccinToneladasAntioquia2017_2.set('fieldImages', {'Id': 'TextEdit', 'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton/': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_Antioquia_1.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_ProduccinToneladasAntioquia2017_2.set('fieldLabels', {'Id': 'no label', 'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton/': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_ProduccinToneladasAntioquia2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});