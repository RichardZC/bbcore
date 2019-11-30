$(window).on("load", function() {
    var ctx = $("#line-chart");
 
    var chartOptions = {
       responsive: true,
       maintainAspectRatio: false,
       legend: {
          position: "bottom"
       },
       hover: {
          mode: "label"
       },
       scales: {
          xAxes: [
             {
                display: true,
                gridLines: {
                   color: "#f3f3f3",
                   drawTicks: false
                },
                scaleLabel: {
                   display: true,
                   labelString: "Month"
                }
             }
          ],
          yAxes: [
             {
                display: true,
                gridLines: {
                   color: "#f3f3f3",
                   drawTicks: false
                },
                scaleLabel: {
                   display: true,
                   labelString: "Value"
                }
             }
          ]
       },
       title: {
          display: true,
          text: "Line Chart - Legend"
       }
    };
 
    var chartData = {
       labels: ["January", "February", "March", "April", "May", "June", "July"],
       datasets: [
          {
             label: "My First dataset",
             data: [65, 59, 80, 81, 56, 55, 40],
             fill: false,
             borderColor: "#e91e63",
             pointBorderColor: "#e91e63",
             pointBackgroundColor: "#FFF",
             pointBorderWidth: 2,
             pointHoverBorderWidth: 2,
             pointRadius: 4
          },
          {
             label: "My Second dataset",
             data: [28, 48, 40, 19, 86, 27, 90],
             fill: false,
             borderColor: "#03a9f4",
             pointBorderColor: "#03a9f4",
             pointBackgroundColor: "#FFF",
             pointBorderWidth: 2,
             pointHoverBorderWidth: 2,
             pointRadius: 4
          },
          {
             label: "My Third dataset - No bezier",
             data: [45, 25, 16, 36, 67, 18, 76],
             fill: false,
             borderColor: "#ffc107",
             pointBorderColor: "#ffc107",
             pointBackgroundColor: "#FFF",
             pointBorderWidth: 2,
             pointHoverBorderWidth: 2,
             pointRadius: 4
          }
       ]
    };
 
    var config = {
       type: "line",
 
       options: chartOptions,
 
       data: chartData
    };
 
    var lineChart = new Chart(ctx, config);
 
    var ctx = $("#bar-chart");
 
    var chartOptions = {
       elements: {
          rectangle: {
             borderWidth: 2,
             borderColor: "rgb(0, 255, 0)",
             borderSkipped: "left"
          }
       },
       responsive: true,
       maintainAspectRatio: false,
       responsiveAnimationDuration: 500,
       legend: {
          position: "top"
       },
       scales: {
          xAxes: [
             {
                display: true,
                gridLines: {
                   color: "#f3f3f3",
                   drawTicks: false
                },
                scaleLabel: {
                   display: true
                }
             }
          ],
          yAxes: [
             {
                display: true,
                gridLines: {
                   color: "#f3f3f3",
                   drawTicks: false
                },
                scaleLabel: {
                   display: true
                }
             }
          ]
       },
       title: {
          display: false,
          text: "Chart.js Horizontal Bar Chart"
       }
    };
 
    var chartData = {
       labels: ["January", "February", "March", "April"],
       datasets: [
          {
             label: "My First dataset",
             data: [65, 59, 80, 81],
             backgroundColor: "#00bcd4",
             hoverBackgroundColor: "#00acc1",
             borderColor: "transparent"
          },
          {
             label: "My Second dataset",
             data: [28, 48, 40, 19],
             backgroundColor: "#ffeb3b",
             hoverBackgroundColor: "#fdd835",
             borderColor: "transparent"
          }
       ]
    };
 
    var config = {
       type: "horizontalBar",
 
       options: chartOptions,
 
       data: chartData
    };
 
    var barChart = new Chart(ctx, config);
 
    var ctx = $("#radar-chart");
 
    var chartOptions = {
       responsive: true,
       maintainAspectRatio: false,
       responsiveAnimationDuration: 500,
       legend: {
          position: "top"
       },
       title: {
          display: true,
          text: "Chart.js Radar Chart"
       },
       scale: {
          reverse: false,
          ticks: {
             beginAtZero: true
          }
       }
    };
 
    var chartData = {
       labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
       datasets: [
          {
             label: "My First dataset",
             backgroundColor: "rgba(233,30,99,.4)",
             borderColor: "transparent",
             pointBorderColor: "#e91e63",
             pointBackgroundColor: "#FFF",
             pointBorderWidth: 2,
             pointHoverBorderWidth: 2,
             pointRadius: 4,
             data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
             label: "Hidden dataset",
             hidden: true,
             data: [45, 25, 16, 36, 67, 18, 76]
          },
          {
             label: "My Second dataset",
             backgroundColor: "rgba(29,233,182,.8)",
             borderColor: "transparent",
             pointBorderColor: "#1DE9B6",
             pointBackgroundColor: "#FFF",
             pointBorderWidth: 2,
             pointHoverBorderWidth: 2,
             pointRadius: 4,
             data: [28, 48, 40, 19, 86, 27, 78]
          }
       ]
    };
 
    var config = {
       type: "radar",
 
       options: chartOptions,
 
       data: chartData
    };
 
    var radarChart = new Chart(ctx, config);
 
    var ctx = $("#polar-chart");
 
    var chartOptions = {
       responsive: true,
       maintainAspectRatio: false,
       responsiveAnimationDuration: 500,
       legend: {
          position: "top"
       },
       title: {
          display: false,
          text: "Chart.js Polar Area Chart"
       },
       scale: {
          ticks: {
             beginAtZero: true
          },
          reverse: false
       },
       animation: {
          animateRotate: false
       }
    };
 
    var chartData = {
       labels: ["January", "February", "March", "April", "May"],
       datasets: [
          {
             data: [65, 59, 80, 81, 56],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"],
             label: "My dataset"
          }
       ]
    };
 
    var config = {
       type: "polarArea",
 
       options: chartOptions,
 
       data: chartData
    };
 
    var polarChart = new Chart(ctx, config);
 
    var ctx = $("#pie-chart");
 
    var chartOptions = {
       responsive: true,
       maintainAspectRatio: false,
       responsiveAnimationDuration: 500
    };
 
    var chartData = {
       labels: ["January", "February", "March", "April", "May"],
       datasets: [
          {
             label: "My First dataset",
             data: [65, 59, 80, 81, 56],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          },
          {
             label: "My Second dataset",
             data: [28, 48, 40, 19, 86],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          },
          {
             label: "My Third dataset - No bezier",
             data: [45, 25, 16, 36, 67],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          },
          {
             label: "My Fourth dataset",
             data: [17, 62, 78, 88, 26],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          }
       ]
    };
 
    var config = {
       type: "pie",
 
       options: chartOptions,
 
       data: chartData
    };
 
    var pieChart = new Chart(ctx, config);
 
    var ctx = $("#doughnut-chart");
 
    var chartOptions = {
       responsive: true,
       maintainAspectRatio: false,
       responsiveAnimationDuration: 500
    };
 
    var chartData = {
       labels: ["January", "February", "March", "April", "May"],
       datasets: [
          {
             label: "My First dataset",
             data: [65, 59, 80, 81, 56],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          },
          {
             label: "My Second dataset",
             data: [28, 48, 40, 19, 86],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          },
          {
             label: "My Third dataset - No bezier",
             data: [45, 25, 16, 36, 67],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          },
          {
             label: "My Fourth dataset",
             data: [17, 62, 78, 88, 26],
             backgroundColor: ["#03a9f4", "#00bcd4", "#ffc107", "#e91e63", "#4caf50"]
          }
       ]
    };
 
    var config = {
       type: "doughnut",
 
       options: chartOptions,
 
       data: chartData
    };
 
    var doughnutChart = new Chart(ctx, config);
 });
 