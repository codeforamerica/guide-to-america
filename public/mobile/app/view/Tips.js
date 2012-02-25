Ext.define('GuideToAmerica.view.Tips', {
    extend: 'Ext.List',
    xtype: 'tips',

    config: {
        title: 'Tips',
        cls: 'x-tips',

        store: 'Tips',
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
            '<span>{name}</span>'
        ].join('')
    }
});

