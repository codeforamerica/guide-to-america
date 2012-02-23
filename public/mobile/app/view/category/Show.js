Ext.define('GuideToAmerica.view.category.Show', {
    extend: 'Ext.List',
    xtype: 'contacts',

    config: {
        title: 'Address Book',
        cls: 'x-contacts',

        store: 'Categories',
        itemTpl: [
            '<span>{name}</span>'
        ].join('')
    }
});
