Ext.define('GuideToAmerica.view.Cities', {
    extend: 'Ext.List',
    xtype: 'cities',

    config: {
        title: 'Cities',
        cls: 'x-cities',

        store: 'Cities',
        itemTpl: [
            '<span>{name}</span>'
        ].join('')
    }
});

