$(function () {
    $('#alipay').click(function () {

        console.log("支付");

        var orderid = $(this).attr('orderid');

        $.getJSON('/app/payed/', {'orderid': orderid}, function (data) {
            console.log(data);

            if (data['status'] === 200){
                window.open('/app/mine/', target='_self');
            }

        })

    })
})