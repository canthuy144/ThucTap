var arrayTime = ["01/01/2021", "01/05/2021", "02/16/2021", "02/25/2021", "03/05/2021", "03/16/2021", "03/26/2021"]
$(document).ready(function() {

    let date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    firstDay = moment(firstDay).format("DD/MM/YYYY");
    let today = moment().format("DD/MM/YYYY")
    $('#txtTU_NGAY,#txtDEN_NGAY').datepicker({
        format: 'dd/mm/yyyy',
        scroller: 'dropdown',
        showTime: false,
        timeMode: '24',
        showSecond: false,
        showCalendar: false,
        groupClass: 'i-col-m_fl'
    });
    $("#txtTU_NGAY").val(firstDay);
    $("#txtDEN_NGAY").val(today);
    $.each(arrayTime, function(index, value) {
        var dateTime = value;
        dateTime = new Date(dateTime);
        dateTime = moment(dateTime).format("DD/MM/YYYY")
        $('#table_product tr #' + index).text(dateTime);
    })

    $('#timKiem').on('click', function() {
        var dateStart = $("#txtTU_NGAY").val();
        dateStart = moment(dateStart,"DD/MM/YYYY").format('YYYY-MM-DD')
        var dateEnd = $("#txtDEN_NGAY").val();
        dateEnd = moment(dateEnd, "DD/MM/YYYY").format('YYYY-MM-DD')
        $('#table_product tr .time').each(function() {
            var time = $(this).text();
            time = moment(time, "DD/MM/YYYY").format('YYYY-MM-DD')
            if (time >= dateStart && time<= dateEnd) {
                $(this).closest('tr').show();
            } else {
                $(this).closest('tr').hide();
            }
        })

    })
})