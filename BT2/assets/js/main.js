
var lists1 = [
    {
        id: '38488',
        name: 'TYT xã Lộc Tân'
    },
    {
        id: '38489',
        name: 'TYT xã Tân Ngải - TPVL'
    },
    {
        id: '86004',
        name: 'TYT xã Thuần Lộc'
    },
    {
        id: '86003',
        name: 'Bệnh viện y dược cổ truyền - tỉnh Vĩnh Long'
    },
    {
        id: '86005',
        name: 'Trạm y tế xã Tân Hòa - Thành phố Vĩnh Long'
    },
    {
        id: '86007',
        name: 'Trạm y tế xã Bình Hòa Phước - Long Hồ'
    },
    {
        id: '86009',
        name: 'Trạm y tế xã Phú Quới - Long Hồ'
    },
]
var lists2 = [
    {
        id: '86001',
        name: 'Bệnh viện đa khoa tỉnh Vĩnh Long'
    },
    {
        id: '86002',
        name: 'Ban bảo vệ sức khỏe CB tỉnh Vĩnh Long'
    },
    {
        id: '86006',
        name: 'TTYT huyện Long Hồ'
    },
]
var btn_delete = '<button class="btn-delete btn btn-danger"><i style="color: #fff;" class="fas fa-trash-alt"></i> Xóa</button>'
var btn_add = '<button class="btn-click btn btn-dark"><i style="color: #fff;" class="fas fa-plus"></i></button>'
$(document).ready(function() {
    var tbodyTable1 = $('#myTable table tbody');
    var tbodyTable2 = $('#child table tbody');
    function displayArr(idTbody,o, btn){ 
        var tr = $('<tr/>').appendTo(idTbody);
        tr.append('<td>'+o.id+'</td>');
        tr.append('<td>'+o.name+'</td>');
        tr.append('<td data-id = '+o.id+'>'+btn+'</td>');
    }
    $.each(lists1, function(index){
        displayArr(tbodyTable1,lists1[index], btn_add);
        // console.log(lists1[index].id)
    })
    $.each(lists2, function(index){
        displayArr(tbodyTable2,lists2[index], btn_delete);
    })
    addTr();
    deleteTr();
    function addTr(){
        $('.btn-click').on('click', function(){
            var idBV1 = $(this).closest('td').attr('data-id');
            for(var i=0; i<lists1.length;i++){
                console.log(lists1[i].id);
                if(idBV1==lists1[i].id){
                    lists2.push(lists1[i]);
                    displayArr(tbodyTable2,lists2[lists2.length-1], btn_delete)
                    lists1.splice(i,1);
                    break;
                }
            }
            $(this).closest('tr').remove();
            // console.log(lists1);
            deleteTr();
        })
    }
    // Xóa và hiển thị sang cột bên phải
    function deleteTr(){
        $('.btn-delete').on('click', function(){
            // addTr();
            var idBV2 = $(this).closest('td').attr('data-id');
            // console.log(idBV2);
            for(var i=0; i<lists2.length;i++){
                console.log(lists2[i].id);
                if(idBV2==lists2[i].id){
                    lists1.push(lists2[i]);
                    displayArr(tbodyTable1,lists1[lists1.length-1], btn_add)
                    lists2.splice(i,1);
                    break;
                }
            }           
            // console.log(lists1)    
            // console.log(lists2);
            $(this).closest('tr').remove();
            addTr();
        })
    }
})