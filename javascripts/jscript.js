/*global $*/

$( document ).ready(function() {
    $("#demo1").click(function() {
       alert("The paragraph was clicked.");
    });
    
    
    var popCanvas = document.getElementById("popChart");
    var lineChart = new Chart(popCanvas, {
      type: 'line',
      data: {
        labels: [0,2,4,6,8,10,20,40,60,80,100,120,140,160,180,200],
        datasets: [{ 
          data: [100,130,150,165,175,185,115,250,280,300,310,320,330,340,350,360],
          label: "Env1",
          borderColor: "#3e95cd",
          fill: false
      }, { 
        data: [102,132,152,167,177,187,117,252,282,302,312,322,332,342,352,362],
        label: "Env2",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [105,135,155,170,180,190,120,255,285,305,315,325,335,345,355,365],
        label: "Double Sqroot",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Abs Pressure (barA) vs. Env1 vs. Env2 vs. Double Sqroot Temp (degC)'
    }
  }
    });
});