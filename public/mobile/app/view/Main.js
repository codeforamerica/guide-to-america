Ext.define('GuideToAmerica.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
        'GuideToAmerica.view.Categories',
        'GuideToAmerica.view.category.Show',
        'GuideToAmerica.view.category.Edit',
        'GuideToAmerica.view.tip.Show',
    ],

    config: {
        autoDestroy: false,

        navigationBar: {
            ui: 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'editButton',
                    text: 'Change Location',
                    align: 'right',
                },
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'New Orleans',
                    ui: 'sencha',
                    align: 'right',
                }
            ]
        },

        items: [
            { xtype: 'categories' }
        ]
    },

    applyLayout: function(config) {
        config = config || {};

        if (Ext.os.is.Android) {
            config.animation = false;
        }

        return config;
    }
});

