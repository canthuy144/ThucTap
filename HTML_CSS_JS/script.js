$(document).ready(function() {

    $(".btn-delete").on("click", function() {
        $(this).closest('tr').remove();
    });

    $(".myBtn").click(function() {
        $("#myModal").modal();
        var id = $(this).closest('tr').find('td:nth-child(1)').text();
        var name = $(this).closest('tr').find('td:nth-child(2)').text();
        var price = $(this).closest('tr').find('td:nth-child(4)').text();
        $('#idSP').html(id);
        $('#tenSP').html(name);
        $('#giaSP').html(price);

    });
})