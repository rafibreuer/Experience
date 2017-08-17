const admin = (function () {

    return {
        renderAdmin: function (object) {
            object.addItemDiv.show();
            object.ul.append('<h3 class="userText">Package List</h3>');
            object.contents.forEach(item => {
                const button = $('<button class="delete">Delete</button>');
                object.ul.append('<div> ' + item.id + ' - Inserted by: ' + item.author + '</div> ').append(button).append('<hr>');
                button.click(() => {
                    utils.areYouSure(item.id, button, '/deleteItem');
                });
            });
        },
        userList: function (obj) {
            obj.ul.empty();
            obj.addItemDiv.hide();
            obj.createUserFormClear();
            $.get('/users',
                results => {
                    results.forEach(element => {

                        const button = $('<button class="delete" value="' + element._id + '">Delete</button>');
                        obj.ul.append('<div><strong>' + element.name + '</strong><br>' + '<span> UserName: ' + element.userName.name + '<br><span>Permissions: ' + element.perm + '</div>')
                            .append(button).append('<hr>');
                        button.click(() => {
                            utils.areYouSure(element.userName.name, button, '/deleteUser');
                        })
                    });
                })
        },
        createUserForm: function (obj) {
             obj.ul.empty();
            obj.addItemDiv.hide();
            $('#form').show();
        },
        submitUserForm: function (obj) {
            if(!obj.newUserName.val() || !(obj.userPermissions.val()) || !(obj.newUserPassword.val()) || !(obj.fullUserName.val()))return;
            $.post('/newUser', {    
                name: obj.fullUserName.val(),
                permissions: obj.userPermissions.val(),
                userName: obj.newUserName.val(),
                password: obj.newUserPassword.val()
            }, res => {
                obj.ul.empty();
                if (res.error) { $('#form').append('<h4>Name: \"' + res.error + '\" already exists</h4>'); return; }
                obj.ul.append(obj.fullUserName.val() + ' was added');
                obj.createUserFormClear();
            });


        }
    }
}());