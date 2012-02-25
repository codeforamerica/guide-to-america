Ext.define('GuideToAmerica.store.Categories', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GuideToAmerica.model.Category',
        autoLoad: true,
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: '/categories.json'
        }
    }
});
