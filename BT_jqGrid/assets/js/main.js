$(document).ready(function(){
    $('#myTable').jqGrid({
        url: 'data.json',
		datatype: "json",
		styleUI : 'Bootstrap',
		colNames: ['Category Name', 'Product Name', 'Country', 'Price', 'Quantity'], //tên cột hoặc viết lable trong colModel:[{lable: 'Category Name', name:'',....}]
		 colModel: [
			{ name: 'CategoryName', width: 75}, // name trùng với key của file json, align: 'center' or 'right' or 'left'(default)
			{ name: 'ProductName', width: 110 },
			{ name: 'Country', width: 80, align: 'center'},
			{ name: 'Price', width: 80, sorttype: 'integer', editable:true },
			// sorttype is used only if the data is loaded locally or loadonce is set to true
			{ name: 'Quantity', width: 80, sorttype: 'number', editable:true},                   
		],
		lable: 'Bảng với JqGrid',
		viewrecords: true, // show the current page, data rang and total records on the toolbar
		width: 780,
		height: 300,
		rowNum: 30,  //số hàng hiển thị
		loadonce: true, 
		pager: "#page",	//phân trang
    })
})