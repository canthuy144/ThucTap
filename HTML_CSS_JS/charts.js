var arr_xaxis = [2016, 2017, 2018, 2019, 2020, 2021]
var arr_samsung = [10000000, 7500000, 6000000, 6000000, 5800000, 5000000]
var arr_oppo = [9000000, 8000000, 7200000, 6500000, 5000000, 4000000]
var arr_iphone = [15000000, 12000000, 10000000, 8500000, 8000000, 8000000]
var total = arr_samsung[5] + arr_oppo[5] + arr_iphone[5];
var myObject = {
    data_x: arr_xaxis,
    data_samsung: arr_samsung,
    data_oppo: arr_oppo,
    data_iphone: arr_iphone
}

$(function() {
    Highcharts.chart('container', {
        title: {
            text: 'Product prices from 2016 to 2021'
        },
        yAxis: {
            title: {
                text: 'Price'
            },
            // accessibility: {
            //     rangeDescription: arr_yaxis
            // }
        },
        xAxis: {
            accessibility: {
                // rangeDescription: arr_xaxis
                rangeDescription: myObject.data_x

            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: arr_xaxis[0],
                pointStart: myObject.data_x[0],
                cursor: 'pointer'
            },
        },
        tooltip: {
            valueSuffix: 'vnđ'
        },
        series: [{
            name: 'Samsung',
            // data: arr_samsung
            data: myObject.data_samsung
        }, {
            name: 'Oppo',
            // data: arr_oppo
            data: myObject.data_oppo
        }, {
            name: 'Iphone',
            // data: arr_iphone
            data: myObject.data_iphone
        }],
    });
    Highcharts.chart('chart-column', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Product prices from 2016 to 2021'
        },
        yAxis: {
            title: {
                text: 'Price'
            }
        },
        xAxis: {
            categories: arr_xaxis
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} vnđ</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: 'Samsung',
            // data: arr_samsung
            data: myObject.data_samsung
        }, {
            name: 'Oppo',
            // data: arr_oppo
            data: myObject.data_oppo
        }, {
            name: 'Iphone',
            // data: arr_iphone
            data: myObject.data_iphone
        }],

    })
    Highcharts.chart('chart-circle', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Product prices in 2021'
        },
        // tooltip: {
        //     valueSuffix: '%'
        // },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                // allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                borderColor: '#000000'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        series: [{
            name: '2021',
            colorByPoint: true,
            data: [{
                name: 'Samsung',
                y: (arr_samsung[5] / total) * 100
            }, {
                name: 'Oppo',
                y: (arr_oppo[5] / total) * 100
            }, {
                name: 'Iphone',
                y: (arr_iphone[5] / total) * 100
            }]
        }]
    })
})