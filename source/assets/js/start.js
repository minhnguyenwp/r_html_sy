(function($) {
    /**
 * START - ONLOAD - JS
 */
    /* ----------------------------------------------- */
    /* ------------- FrontEnd Functions -------------- */
    /* ----------------------------------------------- */

    /* ----------------------------------------------- */
    /* ----------------------------------------------- */
    /* OnLoad Page */
    $(document).ready(function($) {});
    /* OnLoad Window */
    var init = function() {
        Highcharts.chart('categoryChart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Injection',
                    'Broken Authentication and Session Management',
                    'Cross-Site Scripting (XSS)',
                    'Broken Access Control',
                    'Security Data Exposure',
                    'Using Components with Know Vulnerabilities',
                    'Underprotected APIs'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'No. Vulnerabilities'
                }
            },
            legend: {
                reversed: true,
                enabled: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            colors: [
                '#4786B3', '#e79536', '#92B143'
            ],
            series: [
                {
                    name: 'John',
                    data: [
                        5,
                        3,
                        4,
                        7,
                        2,
                        1,
                        4
                    ]
                }, {
                    name: 'Jane',
                    data: [
                        2,
                        2,
                        3,
                        2,
                        1,
                        7,
                        3
                    ]
                }, {
                    name: 'Joe',
                    data: [
                        3,
                        4,
                        4,
                        2,
                        5,
                        4,
                        2
                    ]
                }
            ]
        });

        Highcharts.chart('toolChart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            colors: [
                '#92B143', '#e79536', '#4786B3'
            ],
            series: [
                {
                    name: 'Brands',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Coverity',
                            y: 35
                        }, {
                            name: 'Ms Portal',
                            y: 20,
                        }, {
                            name: 'Protocode',
                            y: 45
                        }
                    ]
                }
            ]
        });

    };
    window.onload = init;
})(jQuery);
