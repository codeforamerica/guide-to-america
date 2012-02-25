Ext.define('GuideToAmerica.view.tip.Show', {
    extend: 'Ext.Container',
    xtype: 'tip-show',

    config: {
        title: 'Information',
        baseCls: 'x-show-category',
        layout: 'vbox',

        items: [
            {
                id: 'content',
                tpl: [
                    '<div class="top">',
                        '<div class="name"><span>{name}</span></div>',
                    '</div>'
                ].join('')
            },
            {
                xtype: 'map',
                flex: 1,
                mapOptions: {
                    zoomControl: false,
                    panControl: false,
                    rotateControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
				    useCurrentLocation: true,					
                    zoom: 10
                }
            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});

