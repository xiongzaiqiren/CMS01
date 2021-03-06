/* 
* @Author: xiongzaiqiren
* @Date:   2017-11-11 18:22:35
* @Last Modified by:   xiongzaiqiren
* @Last Modified time: 2017-11-19 16:20:03
*/

/*@charset "utf-8";*/
$(function () {
    $(".leftNavSwitch a").click(function () {
        if ($(".leftNavSwitch a").html() === ">" || $(".leftNavSwitch a").html() === "&gt;") {
            if ($(window).width() >= 900) {
                $(".leftNav").animate({ left: "0px" });
                $(".rightContent").css("width", "84%");
            }
            else {
                $(".leftNav").animate({ left: "0px" });
                $(".rightContent").css("width", "50%");
            }
            $(".leftNavSwitch a").html("<");
        }
        else {
            if ($(window).width() >= 900) {
                $(".leftNav").animate({ left: "-14%" });
                $(".rightContent").css("width", "98%");
            }
            else {
                $(".leftNav").animate({ left: "-45%" });
                $(".rightContent").css("width", "95%");
            }
            $(".leftNavSwitch a").html(">");
        }
    });

    $(".leftNav .firstNav .firstNavA").click(function () {
        if ($(this).hasClass("active")) { return false; }
        else
        {
            $(".leftNav .firstNav .firstNavA").each(function (index, element) {
                $($(".leftNav .firstNav .secondNav")[index]).hide();
                $(this).removeClass("active");
            });
            $(this).addClass("active");
            $(this).parent().next("dd").children("dl").show(500);
        }
    });

    $(".Gadget").hover(function () {
        $(".Gadget dl").show(500);
        $(".btnGadget").html("-");
    }, function () {
        $(".Gadget dl").hide();
        $(".btnGadget").html("+");
    });
    $(".Gadget .btnGadget").click(function () {
        if ($(".btnGadget").html() === "+") {
            $(".Gadget dl").show(500);
            $(".btnGadget").html("-");
        }
        else {
            $(".Gadget dl").hide();
            $(".btnGadget").html("+");
        }
    });

    /*列表页*/

    /*表单页*/

    /*详情页*/
});

function checkboxSelect(category) {
    var cbData = $("input:checkbox[name='cbData']");
    if (!!cbData && cbData.length > 0) {
        $("input:checkbox[name='cbData']").each(function (index, element) {
            if (0 == category || false == category)
                $(this).attr("checked", false);
            else if (1 == category || true == category)
                $(this).attr("checked", true);
            else
                $(this).attr("checked", !$(this).is(':checked'));
        });
    }
};