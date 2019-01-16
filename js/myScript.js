$("#items").keydown(function (event) {
    if (event.keyCode == 13) {
        var enteredText = $(this).val();
        var append = `<div class="row">
                        <div class="col-1 smallBtn noPadding">
                            <span class="input-group-text onlyLeftPadding"><input type="checkbox" aria-label="Checkbox for following text input"></span>
                        </div>
                        <div class="col-10 noPadding input-group-sm">
                            <input value="${enteredText}" type="text" class="form-control inputNoBoarder noPadding">
                        </div>
                        <div class="col-1">
                            <span class="input-group-text smallBtn noPadding"><i class="fas fa-times"></i></span>
                        </div>
                    </div>`;

        $("#lineitemlist").append(append);
        $(this).val("");
        console.log("The Word You Enter is :" + enteredText);
    }
});

var $container = $('.packery');

$container.packery({
    columnWidth: 10,
    //rowHeight: 80
});
$container.find('.item').each(makeEachDraggable);

function makeEachDraggable(i, itemElem) {
    // make element draggable with Draggabilly
    var draggie = new Draggabilly(itemElem);
    // bind Draggabilly events to Packery
    $container.packery('bindDraggabillyEvents', draggie);
}

$("#closeBtn").click(function () {

    var title = $("#title").val();

    var titleHtml = `<div class="item card shadow p-3 mb-5 bg-white rounded">
                            <div class="input-group mb-3 inputNoBoarder">
                                <input type="text" class="form-control inputNoBoarder"value="${title}">
                            </div>
                        `;

    $("#lineitemlist").find(".col-10 input").each(function () {

        var todoItem = $(this).val();

        titleHtml = titleHtml + `  <div class="row">
            <div class="col-2 smallBtn noPadding">
                <span class="input-group-text onlyLeftPadding"><input type="checkbox"></span>
            </div>
            <div class="col-10 noPadding input-group-sm">
                <input value="${todoItem}" type="text" class="form-control inputNoBoarder noPadding">
            </div>
        </div>`;

    });

    titleHtml = titleHtml + '</div>';

    var $titleHtml = $(titleHtml);

    $container.append($titleHtml).packery('appended', $titleHtml);
    $titleHtml.each(makeEachDraggable);

    $("#title").val("");
    $("#lineitemlist").children().remove();

});

$(".colorDiv").mouseover(function () {
    $("#colorPicker").css("display","block");
});

$(".colorDiv").mouseleave(function () {
    $("#colorPicker").css("display","none");
});