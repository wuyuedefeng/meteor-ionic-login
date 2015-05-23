Router.route('register', {
    name: 'register'
});

Router.route('login', {
    name: 'login'
});

//onBeforeAction
Router.onBeforeAction(function () {
    var temName = Router.current() && Router.current().route.getName();
    if(temName !== 'register'){
        if (!Meteor.userId()) {
            // if the user is not logged in, render the Login template
            this.redirect('login');
        }
    }
    this.next();
});


Router.route('/', {
  name: 'trending'
});

Router.route('/recent', {
  name: 'recent'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});
