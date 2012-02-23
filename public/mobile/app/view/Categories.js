Ext.define('GuideToAmerica.view.Categories', {
    extend: 'Ext.List',
    xtype: 'categories',

    config: {
        title: 'Categories',
        cls: 'x-categories',

        store: 'Categories',
        itemTpl: [
            '<span>{name}</span>'
        ].join('')
    }
});

