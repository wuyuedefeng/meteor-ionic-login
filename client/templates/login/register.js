Template.register.events({
    'submit form': function(e) {
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
        // TODO: get password_again
        var password_again = $target.find('[name=password_again]').val();

        if(password !== password_again){
            alert('两次密码输入不一致');
            return ;
        }

        Accounts.createUserWithPhone({phone:phone, password:password}, function (error,userId){
            if(error){
                alert(error);
            }else{
                alert(userId);
            }
        });
    }

});