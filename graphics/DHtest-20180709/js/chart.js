

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
        categories: ["Alabama","Alaska","Arkansas","Arizona","California","Colorado","Connecticut"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'X AXIS TITLE'
            }
      },
      yAxis: {
        tickInterval: 250,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Y AXIS TITLE'
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
              stacking: 'normal'
            }
      },
      // parseFloat is only needed if the numbers can't be read as such. In the google doc, specify columns as numbers or text
      series: [{
            name: 'Something',
            data: [ parseFloat(DATA[0].something),parseFloat(DATA[1].something),parseFloat(DATA[2].something),parseFloat(DATA[3].something),parseFloat(DATA[4].something),parseFloat(DATA[5].something),parseFloat(DATA[6].something) ]
          }, {
            name: 'Another thing',
            data: [ parseFloat(DATA[0].another_thing),parseFloat(DATA[1].another_thing),parseFloat(DATA[2].another_thing),parseFloat(DATA[3].another_thing),parseFloat(DATA[4].another_thing),parseFloat(DATA[5].another_thing),parseFloat(DATA[6].another_thing ) ]
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<b>' + DATA[this.point.x].state + '</b><br><table><tr><td><span style="color:#0072bc"><strong>Something: </strong></span></td><td>' + DATA[this.point.x].something + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#67B4A5">Another thing: </strong></span></td><td>' + DATA[this.point.x].another_thing + '</td></tr></table>';
      },
    },
  });

//});
