$(function () {
    $("#views").buttonset();

    var codeHeight = $(window).height() - $("#topbar").height() - 1;
    $(".codeBox").height(codeHeight);

    function getCheckState(checkID) {
        return $("#" + checkID).prop("checked");
    }

    function getCheckArray() {
        var i = 0, checkedTabs = [];
        for (i = 1; i < 5; i += 1) {
            if (getCheckState("cb" + i.toString())) {
                checkedTabs.push(i);
            }
        }
        return checkedTabs;
    }

    function makeTabs() {
        var checkArray = getCheckArray();

        if ($.inArray(1, checkArray) !== -1) {
            $("#htmlBox").css("display", "block");
        } else {
            $("#htmlBox").css("display", "none");
        }

        if ($.inArray(2, checkArray) !== -1) {
            $("#CSSBox").css("display", "block");
        } else {
            $("#CSSBox").css("display", "none");
        }

        if ($.inArray(3, checkArray) !== -1) {
            $("#JSBox").css("display", "block");
        } else {
            $("#JSBox").css("display", "none");
        }

        if ($.inArray(4, checkArray) !== -1) {
            $("#resultBox").css("display", "block");
        } else {
            $("#resultBox").css("display", "none");
        }
    }

    $(document).ready(function () {
        var percent = 100 / getCheckArray().length;
        $(".codeBox").width(percent.toString() + "%");
        makeTabs();
    });

    $(".cbox").click(function () {
        var tabClicked = $(this).attr("id"), percent = 100 / getCheckArray().length;
        if (getCheckArray().length === 0) {
            alert("You must keep one tab open");
            $(this).prop("checked", true);
            $(this).button("refresh");
        }
        $(".codeBox").width(percent.toString() + "%");
        makeTabs();
    });
    
    $("#runButton").click( function () {
        var htmlStuff = $("#htmlCode").val();
        var cssStuff = "<style>"+$("#cssCode").val()+"</style>";
        $("iframe").contents().find("html").html(cssStuff+htmlStuff);
    });

});
