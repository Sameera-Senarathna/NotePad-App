$("#items").keydown(function (event) {
    if(event.keyCode==13){
        var enteredText = $(this).val();
        var append = `<div class="row">
                        <div class="col-1 smallBtn noPadding">
                            <span class="input-group-text onlyLeftPadding"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="col-10 noPadding input-group-sm">
                            <input value="${enteredText}" type="text" class="form-control inputNoBoarder noPadding" disabled>
                        </div>
                        <div class="col-1">
                            <span class="input-group-text"><i class="fas fa-plus"></i></span>
                        </div>
                    </div>`;

        $("#lineitemlist").append(append);
        $(this).val("");
        console.log("The Word You Enter is :"+enteredText);
    }
});