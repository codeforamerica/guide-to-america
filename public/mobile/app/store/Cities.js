/*
 * We store Search model instances locally using localStorage. This makes it easy to have a single Store containing
 * all of the Searches and loading automatically. We use this to populate the list on the left, as well as in helping
 * boot the application up (see the 'first' action in app/controllers/searches.js).
 */
Ext.define('GuideToAmerica.store.Cities', {
    extend  : 'Ext.data.Store',
    requires: ['GuideToAmerica.model.Cities'],
    config: {
        model   : 'GuideToAmerica.model.Cities',
        autoLoad: true
    }
});