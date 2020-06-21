$(function () {
    $('#not_login').click(function () {

        window.open('/app/login/', target='_self');

    })

    $('#regis').click(function () {

        window.open('/app/register', target='_self');

    })

    $('#not_pay').click(function () {
        window.open('/app/orderlistnotpay/', target='_self');
    })

    $('#not_receive').click(function () {
        window.open('/app/orderlistnotreceive/', target='_self');
    })
})















