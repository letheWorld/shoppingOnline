$(function () {
    $('.confirm').click(function () {

        var $confirm = $(this);

        var $li = $confirm.parents('li');

        var cartid = $li.attr('cartid');

        $.getJSON('/app/changecartstate/', {'cartid': cartid}, function (data) {

            console.log(data)

            if (data['status'] === 200){

                $('#total_price').html(data['total_price']);

                if (data['c_is_select']){
                    $confirm.find('span').find('span').html('√');
                }else {
                    $confirm.find('span').find('span').html('');
                }
                if (data['is_all_select']){
                    $('.all_select span span').html('√');
                }else {
                    $('.all_select span span').html('');
                }
            }
        })

    })

    $('.subShopping').click(function () {

        var $sub = $(this);

        var $li = $sub.parents('li');

        var goodsid = $sub.attr('goodsid');

        $.getJSON('/app/subtocart/', {'goodsid': goodsid}, function (data) {

            if (data['status'] === 200){

                $('#total_price').html(data['total_price']);

                if (data['c_goods_num'] > 0){
                    $sub.next('span').html(data['c_goods_num']);
                }else {
                    $li.remove();
                }
            }
        })

    })

    $('.addShopping').click(function () {

        var $add = $(this);

        var goodsid = $add.attr('goodsid');

        $.getJSON('/app/addtocart/', {'goodsid': goodsid}, function (data) {

            $('#total_price').html(data['total_price']);

            $add.prev('span').html(data['c_goods_num']);

        })
    })

    $('.all_select').click(function () {

        var $all_select = $(this);

        var select_list = [];

        var unselect_list = [];

        $('.confirm').each(function () {

            var $confirm = $(this);

            var cartid = $confirm.parents("li").attr('cartid');

            if ($confirm.find('span').find('span').html().trim()){
                select_list.push(cartid);
            }else {
                unselect_list.push(cartid);
            }
        })

        if (unselect_list.length > 0){

            $.getJSON('/app/allselect/', {'cart_list': unselect_list.join('#')}, function (data) {
                console.log(data);
                if (data['status'] === 200){
                    $('#total_price').html(data['total_price']);
                    $(".confirm").find('span').find('span').html('√');
                    $all_select.find('span').find('span').html('√');
                }
            })
        }else {
            if (select_list.length > 0){
                $.getJSON('/app/allselect/', {'cart_list': select_list.join('#')}, function (data) {
                    console.log(data);
                    if (data['status'] === 200){
                        $('#total_price').html(data['total_price']);
                        $(".confirm").find('span').find('span').html('');
                        $all_select.find('span').find('span').html('');
                    }
                })
            }
        }
    })

    $('#make_order').click(function () {

        var select_list = [];

        var unselect_list = [];

        $('.confirm').each(function () {

            var $confirm = $(this);

            var cartid = $confirm.parents("li").attr('cartid');

            if ($confirm.find('span').find('span').html().trim()){
                select_list.push(cartid);
            }else {
                unselect_list.push(cartid);
            }
        })

        if (select_list.length === 0){
            return
        }

        $.getJSON('/app/makeorder/', function (data) {
            console.log(data);

            if (data['status'] === 200){
                window.open('/app/orderdetail/?orderid=' + data['order_id'], target='_self');
                // $li = $(".menuList")
                // $li.remove()
            }
        })

    })
})