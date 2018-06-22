/*global $*/

$( document ).ready(function() {
    
    var popCanvas = document.getElementById("popChart");
    var lineChart = new Chart(popCanvas, {
      type: 'line',
      data: {
        labels: [1,2,4,6,8,10,20,40,60,80,100],
        datasets: [{ 
          data: [99.606,120.212,143.613,158.832,170.414,179.886,212.385,250.385,275.586,295.009,310.999],
          label: "APWS-IF97",
          borderColor: "#3e95cd",
          fill: false
      }, { 
        data: [100.000,118.921,141.421,156.508,168.179,177.828,211.474,251.487,278.316,299.070,316.228],
        label: "Double Square Root",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'APWS-IF97 vs. Double Square Root Formula'
    }
  }
    });
});