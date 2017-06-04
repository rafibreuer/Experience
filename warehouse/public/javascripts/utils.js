const utils = (function () {
    return {

        areYouSure: function (item, button, path) {
            const confirm = $('<div></div>');
            confirm.append('<h5>Are you sure you want to delete: ' + item + ' <button class="confirmDelete">Yes</button> <button class="cancelDelete">No</button>')
            button.prev().append(confirm);
            button.hide();
            $('.confirmDelete').click(() => {
                $.post(path, { number: item }, res => {
                    if (res.admin) {
                        confirm.append('<h4>Sorry cannot delete at-least one admin required </h4>'); setTimeout(() => {
                            confirm.empty();
                        }, 3000); return;
                    }
                    button.prev().empty();
                });
            });
            $('.cancelDelete').click(() => {
                confirm.empty(); button.show();
            });
        },
        alert: function (elem, val) {
            elem.append('<div class="alert alert-warning alert-dismissable"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Note!</strong> ' + val + '</div>');
        }

    }

}());