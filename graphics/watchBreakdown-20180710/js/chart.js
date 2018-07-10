
  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 325,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'bar'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: ["Build Illinois Fund","Chicago","RTA","Metro East Mass<br>Transit District","Local governments",],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 2500000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Share of Internet tax revenue'
              }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
            dataLabels: {
                enabled: true,
                format: '${y}',
                align: 'right'
                },
              stacking: 'normal'
            }
      },
      series: [{
        name: 'Tax recipients',
        showInLegend: false,
        data: $.map( [ DATA[0].share_plain,DATA[1].share_plain,DATA[2].share_plain,DATA[3].share_plain,DATA[4].share_plain ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }
    ],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<b>' + DATA[this.point.x].Unit + '</b> will receive <br><b>' + DATA[this.point.x].share + '</b> or <b>' + DATA[this.point.x].percent + ' </b><br>of $37.5 million in additional <br>online retail use tax.';
      },

    },
  });
