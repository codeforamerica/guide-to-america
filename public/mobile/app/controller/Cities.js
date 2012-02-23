/*
 * This controller is the main, and only controller for this application. It handles all the views and functionality
 * of this application.
 */
Ext.define('GuideToAmerica.controller.Cities', {
    extend: 'Ext.app.Controller',

    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
    },	
    /**
     * The launch method is called when the browser is ready, and the application can launch.
     *
     * Inside our launch method we create the list and show in in the viewport. We get the lists configuration
     * using the getListConfiguration method which we defined below.
     *
     * If the user is not on a phone, we wrap the list inside a panel which is centered on the page.
     */
    launch: function() {
        //get the configuration of the list
        var listConfiguration = this.getListConfiguration();

        //check if the device is a phone
        if (!Ext.os.is.Phone) {
            //add a panel into the viewport
            Ext.Viewport.add({
                //panel gets special styling when it is floating
                xtype: 'panel',

                //give it a fixed width and height
                width: 380,
                height: 420,

                //center the panel
                centered: true,

                //modal gives it a mask
                modal: true,

                //disable the hide on mask tap functionality of modal
                hideOnMaskTap: false,

                //give it a fit layout so the list item stretches to the size of this panel
                layout: 'fit',

                //give it 1 item which is the listConfiguration
                items: [listConfiguration]
            }).show();
        } else {
            //add the list into the viewport
            Ext.Viewport.add(listConfiguration);
        }
    },

    /**
     * Returns the configuration of the list for this example, to be inserted into the viewport in the launch method.
     */
    getListConfiguration: function() {
        return {
            //give it an xtype of list
            xtype: 'list',

            //itemTpl defines the template for each item in the list
            itemTpl: '<div class="contact">{city} <strong>{state}</strong></div>',

            //give it a link to the store instance
            store: this.getCities(),


            grouped: true,
            emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
            disableSelection: true,

            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',

                    items: [
                        { xtype: 'spacer' },
                        {
                            xtype: 'searchfield',
                            placeHolder: 'Search...',
                            listeners: {
                                scope: this,
                                clearicontap: this.onSearchClearIconTap,
                                keyup: this.onSearchKeyUp
                            }
                        },
                        { xtype: 'spacer' }
                    ]
                }
            ]
        };
    },

    /**
     * Returns a new store instance if one hasn't been created yet
     * @return {Ext.data.Store}
     */
    getCities: function() {
        //check if a store has already been set
        if (!this.store) {
            //if not, create one
            this.store = Ext.create('Ext.data.Store', {
                //define the stores fields
                fields: ['city', 'state'],

                //sort the store using the state field
                sorters: 'state',

                //group the store using the state field
                groupField: 'state',

                //and give it some data
	            proxy: {
	                type: 'ajax',
	                url: '/Cities.json'
	            }
            });
        }

        //return the store instance
        return this.store;
    },

    /**
     * Returns a new store instance if one hasn't been created yet
     * @return {Ext.data.Store}
     */
    getCategories: function() {
        //check if a store has already been set
        if (!this.store) {
            //if not, create one
            this.store = Ext.create('Ext.data.Store', {
                //define the stores fields
                fields: ['city', 'state'],

                //sort the store using the state field
                sorters: 'state',

                //group the store using the state field
                groupField: 'state',

                //and give it some data
	            proxy: {
	                type: 'ajax',
	                url: '/categories.json'
	            }
            });
        }

        //return the store instance
        return this.store;
    },

    /**
     * Returns a new store instance if one hasn't been created yet
     * @return {Ext.data.Store}
     */
    getTips: function() {
        //check if a store has already been set
        if (!this.store) {
            //if not, create one
            this.store = Ext.create('Ext.data.Store', {
                //define the stores fields
                fields: ['city', 'state'],

                //sort the store using the state field
                sorters: 'state',

                //group the store using the state field
                groupField: 'state',

                //and give it some data
	            proxy: {
	                type: 'ajax',
	                url: '/tips.json'
	            }
            });
        }

        //return the store instance
        return this.store;
    },

    /**
     * Called when the search field has a keyup event.
     *
     * This will filter the store based on the fields content.
     */
    onSearchKeyUp: function(field) {
        //get the store and the value of the field
        var value = field.getValue(),
            store = this.getCities();

        //first clear any current filters on thes tore
        store.clearFilter();

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('city').match(search) || record.get('state').match(search);

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
    },

    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function() {
        //call the clearFilter method on the store instance
        this.getCities().clearFilter();
    }
	
   


});
