Template.appLayout.rendered = function () {
  Session.set('currentTab', 'trending');
};

Template.appLayout.helpers({
    shouldShowTabs:function(){
        var temName = Router.current() && Router.current().route.getName()
        if(temName === 'tabsOne' || temName === 'tabs.one' || temName === 'tabs.two' || temName === 'tabs.three')
            return true;
        return false;
    },
    connected: function() {
        return Meteor.status().connected;
    }
});
