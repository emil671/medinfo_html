var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

var _window = $(window),
    window_height = _window.height();


$(".vertical_topik").eq(0).css("top", ($(".vertical_topik").eq(0).find("span").width()/2-10)+"px");
$(".vertical_topik").eq(0).css("left", -($(".vertical_topik").eq(0).find("span").width()/2+20)+"px");

$(".vertical_topik").eq(1).css("top", ($(".vertical_topik").eq(1).find("span").width()/2-10)+"px");
$(".vertical_topik").eq(1).css("left", -($(".vertical_topik").eq(1).find("span").width()/2+20)+"px");

$(".vertical_topik").eq(2).css("top", ($(".vertical_topik").eq(2).find("span").width()/2-10)+"px");
$(".vertical_topik").eq(2).css("left", -($(".vertical_topik").eq(2).find("span").width()/2+20)+"px");

$(".vertical_topik").eq(3).css("top", ($(".vertical_topik").eq(3).find("span").width()/2-10)+"px");
$(".vertical_topik").eq(3).css("left", -($(".vertical_topik").eq(3).find("span").width()/2+20)+"px");

$(".vertical_topik").eq(4).css("top", ($(".vertical_topik").eq(4).find("span").width()/2-10)+"px");
$(".vertical_topik").eq(4).css("left", -($(".vertical_topik").eq(4).find("span").width()/2+20)+"px");



/* Nav begin */

    $("a.toggler").click(function(){
        var _this = $(this);
        if (_this.hasClass("active")) {
            _this.removeClass("active_last");
            setTimeout(function(){
                _this.removeClass("active_second");
            }, 300);
            setTimeout(function(){
                _this.removeClass("active");
            }, 600);
            $("body").removeClass("menu_overflow");
            $(".mobile_nav").removeAttr("style");
            $("#aside_block").removeClass("show_me");
        } else {
            _this.addClass("active");
            setTimeout(function(){
                _this.addClass("active_second");
            }, 300);
            setTimeout(function(){
                _this.addClass("active_last");
            }, 600);
            $("#aside_block").addClass("show_me");
            $(".mobile_nav").css("height", (_window.height()-130)+"px");

            setTimeout(function(){
                $("body").addClass("menu_overflow");
            }, 100);
        }
        return false;
    });

    _window.resize(function(){
        $(".mobile_nav").css("height", (_window.height()-166)+"px");
    });

    $(".mobile_nav > ul > li.submenu > a").click(function(){
    	var _this = $(this);
    	_this.parent().toggleClass("active");
    })

/* Nav end */

/* Index slider begin */
	$(".index_news_slider .bullets a").click(function(){
		var _this = $(this),
		_this_index = _this.index();
		if (_this.hasClass("active")) {} else {
			$(".index_news_slider .bullets a").removeClass("active").eq(_this_index).addClass("active");
			$(".index_news_slider .slides > div").removeClass("show_me").eq(_this_index).addClass("show_me");
		}
		return false;
	});
/* Index slider end */

/* Aside events slider begin */
	$(".aside_events .tabs a").click(function(){
		var _this = $(this),
		_this_index = _this.index();
		if (_this.hasClass("active")) {} else {
			$(".aside_events .tabs a").removeClass("active").eq(_this_index).addClass("active");
			$(".aside_events .slides > div").removeClass("show_me").eq(_this_index).addClass("show_me");
		}
		return false;
	});
/* Aside events slider end */


/* Modal begin */
    $(".sign_link").click(function(){
        $(".darkness").addClass("show_me");
        if (_window.height() < $(".modal_sign").height()) {
            $(".modal_sign > div").css("height", (_window.height()-60)+"px");
        }
        setTimeout(function(){
            $(".modal_sign").css("top", "50%").css("margin-top", -($(".modal_sign").height()/2)+"px");
        }, 300);
        return false;
    });

    $(".modal_sign a.close").click(function(){
        $(".modal_sign").removeAttr("style");
        setTimeout(function(){
            $(".darkness").removeClass("show_me");
        }, 300);
        return false;
    });
/* Modal end */



/* Map begin */

function gmap() {
    const icon = 'img/label.png';

    const title = $('#event_map').data('title');
    const address = $('#event_map').data('address');

    const latitude = $('#event_map').attr('data-latitude');
    const longitude = $('#event_map').attr('data-longitude');
    const myLatlng = new google.maps.LatLng(latitude,longitude);
    const infowindow = new google.maps.InfoWindow();

    const myOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(document.getElementById("event_map"), myOptions);
    const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: title,
        icon: icon
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<b>' + title + '</b><br/><br/>' + address);
        infowindow.open(map, this);
    });
}

if ( $("#event_map").length > 0) {
    gmap();
}

/* Map end */


/* Fise select begin */
    $(".file_select label input").change(function(){
        //alert($(".file_select label input").val())
    });
/* Fise select end */


/* Select nav mobile begin */
    $(".articles_nav select").change(function(){
        var _this_index = $(this).find("option:selected").index(),
        _this_link = $(".articles_nav ul li").eq(_this_index).find("a").attr("href");
        location.href = _this_link;
    });
/* Select nav mobile end */