Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath({
    'GuideToAmerica': 'app'
});

//define our application
Ext.application({
    //setup the startup screens and icon for mobile devices
    name: 'GuideToAmerica',
    tabletStartupScreen: 'resources/images/tablet_startup.png',
    phoneStartupScreen : 'resources/images/phone_startup.png',
    icon: 'resources/images/icon.png',
    glossOnIcon: false,

    models: ['Category', 'Tip'],
    stores: ['Categories','Tips'],
    views: ['Main'],
    controllers: ['Application'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'GuideToAmerica.view.Main'
        });
    }

});