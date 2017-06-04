(function () {
    const bin = {
        contents: [],
        init: function () {
            this.cacheDom();
            this.bindMethods();
        },
        bindMethods: function () {
            this.selected.change(() => {
                this.getData();
            });
            this.addItem.change(() => {
                this.addItems();
            });
            this.addBin.click(() => {
                this.newBin();
            });
            this.getUsers.click(() => {
                admin.userList(bin);
            });
            this.createUserForm.click(() => {
                admin.createUserForm(bin);
            });
            this.newUserSubmit.click(() => {
                admin.submitUserForm(bin);
            });
            this.logOutButton.click(() => {
                this.logOut();
                $('.2').hide();
            });
        },
        cacheDom: function () {
            this.selected = $('#binSelector');
            this.ul = $('#items');
            this.addItem = $('#addItem');
            this.addBin = $('#addBin');
            this.getUsers = $('#allUsers');
            this.createUserForm = $('#userFormButton');
            this.fullUserName = $('#fullUserName');
            this.userPermissions = $('#userPermissions');
            this.newUserName = $('#newUserName');
            this.newUserPassword = $('#newUserPassword');
            this.newUserSubmit = $('#newUserSubmit');
            this.logOutButton = $('#logOutButton');
        },
        render: function () {
            this.addItem.show();
            this.ul.append('<h3 class="userText">Package List</h3>');
            this.contents.forEach(item => {
                this.ul.append('<h4>' + item.id + ' - Inserted By: ' + item.author + '</h4>');
            })
        },
        logOut: function () {
            $.get('/logOut');
        },
        getData: function () {
            this.ul.empty();
            if (!this.selected.val()) this.addItem.hide();
            this.createUserFormClear();
            $.get('/contents', { bin: this.selected.val() },
                results => {
                    this.contents = results.result.bin;
                    if (results.perm)
                        admin.renderAdmin(bin);
                    else this.render();
                })
        },
        newBin: function () {
            $.post('/newBin',
                results => {
                    this.selected.append('<option value="' + results.id + '">Bin - ' + results.number + '</option>');
                })
        },
        createUserFormClear: function () {
            $('#form').hide();
            $('#form h4').text('');
            this.fullUserName.val('');
            this.userPermissions.val('');
            this.newUserName.val('');
            this.newUserPassword.val('');
        },
        addItems: function () {
            $.post('/addItem', {
                bin: this.selected.val()
                , item: this.addItem.val()
            },(res) => {
                if (res.error) {
                    const m='No Duplicate items, item can be found in bin : ' + res.found;
                    utils.alert(this.ul.prev(),m);
                    return;
                }
                this.getData();
            });
        }
    }
    bin.init();
}());