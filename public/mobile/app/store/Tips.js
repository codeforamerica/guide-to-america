Ext.define('GuideToAmerica.store.Tips', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GuideToAmerica.model.Tips',
        autoLoad: true,
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: '/tips.json'
        }
    }
});
