$('#register').on('click', function (event) {
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm() {
    // Initiate Variables With Form Content
    var repository = $("#repository").val();
    var email = $("#email").val();

    $.ajax({
        url: "https://api.mygit.website/github/register",
        type: "POST",
        data: JSON.stringify({
            'repository': repository,
            'email': email
        }),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $("#messages").text('Check your email. You might have a surprise.');
            $("#response").modal();
        },
        error: function (jqxhr) {
            $("#messages").text(jqxhr.responseJSON.error);
            $("#response").modal();
        }
    })

}
