(function ($) {
	
    var viewUl = $("div#slider ul"),
        imgs = viewUl.find("img"),
        imgW = 980,
        imgsLen = imgs.length,
        totalImgsLen = imgsLen * imgW;
        current = 1;

    $("div.show").find("button").on("click", function () {
        var direction = $(this).attr("id"),
            position = imgW;
        (direction == "next") ? ++current : --current;
        if (current == 0) {
            current = imgsLen; //set last image
            direction = "next";
            position = totalImgsLen - imgW;
        } else if (current - 1 == imgsLen) {
            current = 1; //set first image
            position = 0;
        }
        doIt(viewUl, position, direction);
    });
    function doIt(container, position, direction) {
        var sign; // "-=" or "+="
        if (direction && position != 0) {
            sign = (direction == "next") ? "-=" : "+=";
        }
        var shift = {"margin-left": sign ? (sign + position) : position};
        var duration = {};
        if (position == 0 || position == totalImgsLen - imgW) {
            duration = {duration: 0};
        }
        container.animate(shift, duration);
    }

})(jQuery);