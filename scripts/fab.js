/**
 * Created by tomer on 10/21/15.
 */
var $fab = $('#fab');
var isExpanded = false;
var initialized = false;

$fab.on('click', function () {
    if (!isExpanded) {
        $fab.addClass('is-expanding');

        setTimeout(function () {
            $(".image").css("visibility", "hidden");
            $fab.find('.fa').removeClass('fa-plus').addClass('fa-close expand-close');
            $fab.removeClass('is-expanding').addClass('expanded');
            isExpanded = true;
            $fab.trigger('expanded');
        }, 500);
    }
});

$fab.on('click', '.expand-close', function (e) {
    var $close = $(this);
    e.stopPropagation();
    $fab.find('.inner-content').remove();
    $fab.removeClass('expanded').addClass('is-closing');

    setTimeout(function () {
        $(".image").css("visibility", "visible");
        $close.removeClass('fa-close pull-right expand-close');
        $fab.removeClass('is-closing');
        isExpanded = false;
    }, 500);
});

$fab.on('expanded', function () {
    if (!initialized) {
        $fab.append('<form class="col s12"><input dir="rtl"  id="name" type="text" class="validate" placeholder="שם"> <input placeholder="טלפון" id="phone" type="number" class="validate" dir="rtl" >  <input placeholder="אימייל" dir="rtl" id="email" type="email"> <br> <a onclick="send()" class="waves-effect waves-light btn">שלח</a></form>');
    }
    initialized = true;
});