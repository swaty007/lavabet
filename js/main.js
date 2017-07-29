$(window).on('load', function(e) {
    $('body').addClass('loaded');
});



var removeAllYuiNav = function () {
    $('ul.yui-nav.shop-panel-nav li').removeClass('selected');
};
var AddHideChildren = function () {
    $('#shop-panel-content').children().addClass('yui-hidden');
};



$('#menu_shifts').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#shopman-shifts').removeClass('yui-hidden');
});
$('#menu_online').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#shopman-online').removeClass('yui-hidden');
});
$('#menu_shop_coupon').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#shop-coupon').removeClass('yui-hidden');
});
$('#menu_outrights').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#outrights').removeClass('yui-hidden');
});
$('#menu_shop_races').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#shop-races').removeClass('yui-hidden');
});
$('#menu_shop_virtual').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#shop-virtual').removeClass('yui-hidden');
});
$('#menu_shop_keno').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#shop-keno').removeClass('yui-hidden');
});
$('#menu_cashregister').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#cashregister').removeClass('yui-hidden');
});
$('#menu_placedslips').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#placedslips').removeClass('yui-hidden');
});
$('#menu_authslips').on('click',function () {
    removeAllYuiNav();
    $(this).parents('li').addClass('selected');
    AddHideChildren();
    $('#authslips').removeClass('yui-hidden');
});




// slips-menu tab
$('.slips-menu li').on('click',function () {
    if($(this).children('a').attr('status') == 'search') {
        $('#slips-menu-search').show();
    }else {$('#slips-menu-search').hide();}

$(this).parents('ul').children().removeClass('selected');
$(this).addClass('selected');
var n = $(this).index();
$(this).parents('ul').closest('div').children('div').addClass('yui-hidden');
$(this).closest('div').children('div').eq(n).removeClass('yui-hidden');
$(this).closest('div').children('.printzet').removeClass('yui-hidden');
});

// shop-coupon class="sport-menu sport-menu-matches" tabs
$('.sport-menu.sport-menu-matches li').on('click',function () {

    $(this).parents('ul').children().removeClass('selected');
    $(this).addClass('selected');
    var n = $(this).index();
    $(this).parents('ul').closest('div').children('div').addClass('yui-hidden');
    $(this).closest('div').children('div').eq(n).removeClass('yui-hidden');
});
