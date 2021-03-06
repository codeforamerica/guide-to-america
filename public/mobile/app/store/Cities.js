Ext.define('GuideToAmerica.store.Cities', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GuideToAmerica.model.City',
        autoLoad: true,
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: '/cities.json'
        }
    }
});
