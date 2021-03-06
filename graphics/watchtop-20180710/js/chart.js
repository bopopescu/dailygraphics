
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
        categories: ["Aurora","Joliet","Naperville","Elgin","Waukegan","Arlington Heights"],
              labels: {
                staggerLines: 2
            },
              title: {
                  text: null
              }
      },
      yAxis: {
        tickInterval: 50000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Internet taxes recieved'
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
                //format: '${y}',
                formatter: function() {
                  return DATA[this.point.x].share;
                },
                align: 'right'
                },

              stacking: 'normal'
            }
      },
      series: [ {
            name: 'Top municipalities',
            showInLegend: false,
            data: $.map( [ DATA[0].share_plain, DATA[1].share_plain, DATA[2].share_plain, DATA[3].share_plain, DATA[4].share_plain, DATA[5].share_plain  ], function(datavalue) {
              return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
            }
       ],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<b>' + DATA[this.point.x].gov + '</b><br><table class="mapTable table-hover table-striped table-condensed"><tr><td class="tdLEFT"><strong>Internet tax share: </strong></td><td>' + DATA[this.point.x].share + '</td></tr></table>';
      },
    },
  });

//});
