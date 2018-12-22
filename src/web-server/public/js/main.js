/**
 * @author Gagan Deep Singh
 * @email hbti.gagan@gmail.com
 * @description it is the entry module of the application.
 */
var app = {
    init: function init() {
        console.log('application has started');
        this.addCommand({
            jsonrpc: '2.0',
            method: "test",
            params: { name: "Gagan" },
            id: 123
        });
    },
    addCommand: function addCommand(command) {
        $.ajax({
            url: "/add",
            dataType: 'json',
            method: "POST",
            data: JSON.stringify(command),
            success: function success(response) {
                console.log(response);
            }
        });
    }
};

$(document).ready(function () { app.init() });