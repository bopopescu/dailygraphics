var chartRate = new Highcharts.Chart({
    chart: {
      renderTo: 'graphic',
      backgroundColor: '#fafafa',
      height: 400,
      spacingBottom: 15,
      spacingTop: 10,
      spacingLeft: 10,
      spacingRight: 10,
      type: 'line'
    },
    title: {
          text: null,
    },
    yAxis: {
      tickInterval: 10,
      minorTickInterval: 'auto',
      overflow: 'justify',
      min: 0,
      max: 100,
          title: {
              text: '% LAB CHARGES'
          }
    },
    xAxis: {
      categories: ["2011","2012","2013","2014","2015","2016","2017"],
            labels: {
              staggerLines: 2
          },
      overflow: 'justify',
            title: {
                text: 'YEAR'
            }
    },
    legend: {
      enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
      line: {
          events: {

              mouseOver: function () {
                //console.log(this.chart.series[this.index].options.id)

                if(this.chart.series[this.index].options.id == "Critical-access" ){
                  this.chart.series[this.index].update({
                    color: '#0072BC'
                  });
                } else {
                  this.chart.series[this.index].update({
                    color: '#EBAB38'
                  });
                };

              },

              mouseOut: function () {

                if(this.chart.series[this.index].options.id == "Critical-access" ){
                  this.chart.series[this.index].update({
                    color: "#9DDCF9" //#CEE5B7
                  });
                } else {
                  this.chart.series[this.index].update({
                    color: "#FECF8D"
                  });
                };

              }
            }
          }
    },
    series: [{
      name: 'Dallas County Medical Center, Fordyce, Ark.',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[0].y2011,DATA[0].y2012,DATA[0].y2013,DATA[0].y2014,DATA[0].y2015,DATA[0].y2016,DATA[0].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Mountain Lakes Medical Center, Clayton, Ga.',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[1].y2011,DATA[1].y2012,DATA[1].y2013,DATA[1].y2014,DATA[1].y2015,DATA[1].y2016,DATA[1].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Mercy Hospital Columbus(Kan.)',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[2].y2011,DATA[2].y2012,DATA[2].y2013,DATA[2].y2014,DATA[2].y2015,DATA[2].y2016,DATA[2].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Pointe Coupee General Hospital, New Roads, La.',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[3].y2011,DATA[3].y2012,DATA[3].y2013,DATA[3].y2014,DATA[3].y2015,DATA[3].y2016,DATA[3].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'I-70 Community Hospital, Sweet Springs, Mo.',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[4].y2011,DATA[4].y2012,DATA[4].y2013,DATA[4].y2014,DATA[4].y2015,DATA[4].y2016,DATA[4].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Moses-Ludington Hospital, Ticonderoga, N.Y.',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[5].y2011,DATA[5].y2012,DATA[5].y2013,DATA[5].y2014,DATA[5].y2015,DATA[5].y2016,DATA[5].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Washington County Hospital, Plymouth, N.C.',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[6].y2011,DATA[6].y2012,DATA[6].y2013,DATA[6].y2014,DATA[6].y2015,DATA[6].y2016,DATA[6].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Drumright(Okla.) Regional Hospital',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[7].y2011,DATA[7].y2012,DATA[7].y2013,DATA[7].y2014,DATA[7].y2015,DATA[7].y2016,DATA[7].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Quartz Mountain Medical Center,* Mangum, Okla.',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[8].y2011,DATA[8].y2012,DATA[8].y2013,DATA[8].y2014,DATA[8].y2015,DATA[8].y2016,DATA[8].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'De Smet(S.D) Memorial Hospital',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[9].y2011,DATA[9].y2012,DATA[9].y2013,DATA[9].y2014,DATA[9].y2015,DATA[9].y2016,DATA[9].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Bayside Community Hospital, Anahuac, Texas',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[10].y2011,DATA[10].y2012,DATA[10].y2013,DATA[10].y2014,DATA[10].y2015,DATA[10].y2016,DATA[10].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Crane County Hospital District, Crane, Texas',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[11].y2011,DATA[11].y2012,DATA[11].y2013,DATA[11].y2014,DATA[11].y2015,DATA[11].y2016,DATA[11].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Rockdale(Texas) Hospital',
      color: "#9DDCF9",
      id: "Critical-access",
      data: $.map( [ DATA[12].y2011,DATA[12].y2012,DATA[12].y2013,DATA[12].y2014,DATA[12].y2015,DATA[12].y2016,DATA[12].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Georgiana(Ala.) Hospital',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[13].y2011,DATA[13].y2012,DATA[13].y2013,DATA[13].y2014,DATA[13].y2015,DATA[13].y2016,DATA[13].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Crenshaw Community Hospital, Luverne, Ala.',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[14].y2011,DATA[14].y2012,DATA[14].y2013,DATA[14].y2014,DATA[14].y2015,DATA[14].y2016,DATA[14].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Regional General Hospital, Williston, Fla.',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[15].y2011,DATA[15].y2012,DATA[15].y2013,DATA[15].y2014,DATA[15].y2015,DATA[15].y2016,DATA[15].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Stephens Memorial Hospital, Breckenridge, Texas',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[16].y2011,DATA[16].y2012,DATA[16].y2013,DATA[16].y2014,DATA[16].y2015,DATA[16].y2016,DATA[16].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Timberlands Hospital, Crockett, Texas',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[17].y2011,DATA[17].y2012,DATA[17].y2013,DATA[17].y2014,DATA[17].y2015,DATA[17].y2016,DATA[17].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Knox County Hospital, Knox City, Texas',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[18].y2011,DATA[18].y2012,DATA[18].y2013,DATA[18].y2014,DATA[18].y2015,DATA[18].y2016,DATA[18].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'Stamford Memorial Hospital, Stamford, Texas',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[19].y2011,DATA[19].y2012,DATA[19].y2013,DATA[19].y2014,DATA[19].y2015,DATA[19].y2016,DATA[19].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
      name: 'ETMC Trinity, Trinity, Texas',
      color: "#FECF8D",
      id: "Short-term",
      data: $.map( [ DATA[20].y2011,DATA[20].y2012,DATA[20].y2013,DATA[20].y2014,DATA[20].y2015,DATA[20].y2016,DATA[20].y2017 ], function(datavalue) {
      return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
    }],
    tooltip: {
        crosshairs: true,
        style: {
          width: '200px'
        },
        useHTML: true,
        // custom tooltip
        formatter: function() {
          return '<small>' + this.series.options.id + ' hospital</small><br><h5><strong>' + this.series.name + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong>' + this.x + ' lab charges % </strong></td><td style="padding:2px; margin:2px; background-color: #eee;">' + this.y + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; color:#0072bc"><strong>' + this.x + ' lab charges % </strong></td><td style="padding:2px; margin:2px;">' + this.y + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong>' + this.x + ' lab charges % </strong></td><td style="padding:2px; margin:2px; background-color: #eee;">' + this.y + '</td></tr></tbody></table>';
        }
  }

});
