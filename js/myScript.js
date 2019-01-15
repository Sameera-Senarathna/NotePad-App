$("#items").keydown(function (event) {
    if(event.keyCode==13){
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
        console.log("The Word You Enter is :"+enteredText);
    }
});