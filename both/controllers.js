AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

RegisterController = AppController.extend({});//注册
LoginController = AppController.extend({});//登录

TrendingController = AppController.extend({});

RecentController = AppController.extend({});

ProductsShowController = AppController.extend({});

UsersShowController = AppController.extend({});

NotificationsController = AppController.extend({});

ProfileController = AppController.extend({});
