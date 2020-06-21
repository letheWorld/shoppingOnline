$(function () {
    $('#all_types').click(function () {

        var $all_types_container = $("#all_types_container");

        $all_types_container.slideDown();

        var $all_type = $(this);

        var $span = $all_type.find('span').find('span');

        $span.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');

        var $sort_rule_container = $('#sort_rule_container');

        $sort_rule_container.slideUp();

        var $sort_rule = $('#sort_rule');

        var $span_sort_rule = $sort_rule.find('span').find('span');

        $span_sort_rule.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    })

    $('#all_types_container').click(function () {

        var $all_type_container = $(this);

        $all_type_container.slideUp();

        var $all_type = $('#all_types');

        var $span = $all_type.find('span').find('span');

        $span.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    })


    $('#sort_rule').click(function () {
        var $sort_rule_container = $('#sort_rule_container');

        $sort_rule_container.slideDown();

        var $sort_rule = $(this);

        var $span = $sort_rule.find('span').find('span');

        $span.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');

        var $all_type_container = $('#all_types_container');

        $all_type_container.slideUp();

        var $all_type = $('#all_types');

        var $span_all_type = $all_type.find('span').find('span');

        $span_all_type.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    })

    $('#sort_rule_container').click(function () {

        var $sort_rule_container = $(this);

        $sort_rule_container.slideUp();

        var $sort_rule = $('#sort_rule');

        var $span = $sort_rule.find('span').find('span');

        $span.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    })

    $('.subShopping').click(function () {
        console.log('sub');

        var $sub = $(this);

        var goodsid = $sub.attr('goodsid');
        // var goodsid = $sub.prop('goodsid');  //只能获取内置属性

        $.getJSON('/app/subtocart/', {'goodsid': goodsid}, function (data) {
            console.log(data)

            if (data['status'] === 301){
                window.open('/app/login/', target='_self');
            }else if (data['status'] === 200){
                $sub.next('span').html(data['c_goods_num']);
            }

        })

    })

    $('.addShopping').click(function () {
        console.log('add');

        var $add = $(this);

        var goodsid = $add.attr('goodsid');

        $.getJSON('/app/addtocart/', {'goodsid': goodsid}, function (data) {
            console.log(data)

            if (data['status'] === 301){
                window.open('/app/login/', target='_self');
            }else if (data['status'] === 200){
                $add.prev('span').html(data['c_goods_num']);
            }

        })
    })

})





















