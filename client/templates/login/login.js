Template.login.events({
    'submit form':function(e){
        e.preventDefault();

        var $target = $(e.target);

        // TODO: get phone
        var phone = $target.find('[name=phone]').val();
        if(!phone.match('^1\\d{10}$')){
            alert("输入手机号不合法");
            return ;
        }
        // TODO: get password
        var password = $target.find('[name=password]').val();

        Meteor.loginWithPhoneAndPassword({phone:phone}, password, function(error){
            if(error){
                alert(error);
            }else{
                Router.go('trending');
            }
        });
    }
});