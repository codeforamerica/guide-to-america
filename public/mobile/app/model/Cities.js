/**
 * The Search model uses localStorage to save the user's searches. As each Search consists of a number of Tweets, we
 * set up a hasMany association between this and the Tweet model. Even though the Tweet model uses a different proxy
 * (loading its data from GuideToAmerica.com instead of localStorage), the hasMany association to Tweet still works. See the
 * 'show' action in app/controllers/search.js to see the association in use.
 */
Ext.define('GuideToAmerica.model.Cities', {
    extend: 'Ext.data.Model',    
    config: {

    }
});