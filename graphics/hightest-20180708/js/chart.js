

//$.getJSON("DATA", function(data){

  console.log( DATA[1].district );

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
        categories: ['Elgin Dist. U-46','Community Unit Dist. 300','Aurora East Unit Dist. 131','Stevenson H.S. Dist. 125','Fenton H.S. Dist. 100','Indian Prairie Unit Dist. 204'],
              labels: {
                staggerLines: 2
            }
      },
      yAxis: {
        tickInterval: 100000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'PENALTY PAYMENTS'
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
      series: [{
            name: '2017 payments',
            data: [ parseFloat(DATA[0].pay17),parseFloat(DATA[1].pay17),parseFloat(DATA[2].pay17),parseFloat(DATA[3].pay17),parseFloat(DATA[4].pay17),parseFloat(DATA[5].pay17) ]
          }, {
           name: '2016 payments',
            data: [ parseFloat( DATA[0].pay16),parseFloat(DATA[1].pay16),parseFloat(DATA[2].pay16),parseFloat(DATA[3].pay16),parseFloat(DATA[4].pay16),parseFloat(DATA[5].pay16) ]
          }, {
            name: '2015 payments',
            data: [ parseFloat(DATA[0].pay15),parseFloat(DATA[1].pay15),parseFloat(DATA[2].pay15),parseFloat(DATA[3].pay15),parseFloat(DATA[4].pay15),parseFloat(DATA[5].pay15 ) ]
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<b>' + DATA[this.point.x].district + '</b><br><table class="mapTable table-hover table-striped table-condensed"><tr><td class="tdLEFT"><span style="color:#f7a35c"><strong>2015 payments: </strong></span></td><td>' + DATA[this.point.x].pay15a + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#67B4A5">2016 payments: </strong></span></td><td>' + DATA[this.point.x].pay16a + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#0072bc">2017 payments: </strong></td><td>' + DATA[this.point.x].pay17a + '</span></td></tr><tr><td class="tdLEFT"><strong>Total: </strong></td><td>' + DATA[this.point.x].totala + '</td></tr></table>';
      },
    },
  });

//});
