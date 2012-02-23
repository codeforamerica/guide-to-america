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
    controllers: ['Cities'],

    // require any components we are using in this example
    requires: [
        'Ext.data.Store',
        'Ext.List',
        'Ext.field.Search',
        'Ext.Toolbar',
		'Ext.Loader'
    ]

});