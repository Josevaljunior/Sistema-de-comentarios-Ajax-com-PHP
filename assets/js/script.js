
$('#form1').submit(function (e) {
    e.preventDefault();

    var u_name = $('#name').val();
    var u_comment = $('#comment').val();

    //console.log(u_name, u_comment);
    $.ajax({
        url: 'http://localhost/curso_php/ajax-com-php/inserir.php',
        method: 'POST',
        data: { name: u_name, comment: u_comment },
        dataType: 'json'
    }).done(function (result) {
        console.log(result);
    });
});

function getComents() {
    $.ajax({
        url: 'http://localhost/curso_php/ajax-com-php/selecionar.php',
        method: 'GET',
        dataType: 'json'
    }).done(function (result) {
        console.log(result);

        for (var i = 0; i < result.length; i++) {
            $('.box_comment').prepend('<div class="b_comm"><h4>' + result[i].name + '</h4><p>' + result[i].comment + '</p></div>')
        }
    });

}

getComents();