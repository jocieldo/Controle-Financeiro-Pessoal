$(function() {

    Morris.Line({
        element: 'morris-area-chart',
        data: [{
            period: '2017-01',
            Receitas: 4002,
            Despesas: 3453
        }, {
            period: '2017-02',
            Receitas: 4002,
            Despesas: 3201
        }, {
            period: '2017-03',
            Receitas: 4002,
            Despesas: 2900
        }, {
            period: '2017-04',
            Receitas: 4002,
            Despesas: 3100
        }, {
            period: '2017-05',
            Receitas: 4002,
            Despesas: 2530
        }, {
            period: '2017-06',
            Receitas: 4002,
            Despesas: 3820
        }, {
            period: '2017-07',
            Receitas: 4002,
            Despesas: 2100
        }, {
            period: '2017-08',
            Receitas: 4002,
            Despesas: 3000
        }, {
            period: '2017-09',
            Receitas: 4002,
            Despesas: 3250
        }, {
            period: '2017-10',
            Receitas: 4002,
            Despesas: 2547
        }, {
            period: '2017-11',
            Receitas: 4002,
            Despesas: 2956
        }, {
            period: '2017-12',
            Receitas: 4002,
            Despesas: 2658
        }],
        xkey: 'period',
        ykeys: ['Receitas', 'Despesas'],
        labels: ['Receitas', 'Despesas'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
		barColors: ["#5cb85c", "#d9534f"],
		lineColors: ["#5cb85c", "#d9534f"]
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
