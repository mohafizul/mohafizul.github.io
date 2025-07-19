---
layout: post
title: "Converting Dew Point in DegC to ppm and vice versa"
date: 2022-09-12 13:30:15 +0800
categories: Operation
---

Commissioning a cryogenic system in a plant that handles ethylene or propylene requires a process known as 'system drying.' System drying is an activity conducted before introducing cryogenic fluids to the system. This step is typically performed immediately after a tightness test. Its purpose is to eliminate moisture, thereby preventing the formation of hydrates or 'ice' within the unit when it is put into operation.

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtead2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

<script>
$(document).ready(function () {
  $("#linedewpoint").keyup(function () {
    var F13 = parseFloat($("#linedewpoint").val());
    if (F13 >= 0) {
      $("#vaporpressure").val((Math.exp(Math.log(611.2) + (17.62 * F13) / (243.12 + F13))).toFixed(2));
    } else if (F13 < 0) {
      $("#vaporpressure").val((Math.exp(Math.log(611.2) + (22.46 * F13) / (272.62 + F13))).toFixed(2));
    }
    var F15 = parseFloat($("#linepressure").val());
    var F16 = parseFloat($("#vaporpressure").val());
    if (!isNaN(F15) && !isNaN(F16)) {
      $("#ppmv").val(((1000000 * F16) / ((F15 + 1.01325) * 100000)).toFixed(2));
    }
  });

  $("#linepressure,#vaporpressure").keyup(function () {
    var F15 = parseFloat($("#linepressure").val());
    var F16 = parseFloat($("#vaporpressure").val());
    if (!isNaN(F15) && !isNaN(F16)) {
      $("#ppmv").val(((1000000 * F16) / ((F15 + 1.01325) * 100000)).toFixed(2));
    }
  });

  $("#linepressure2,#ppmv2").keyup(function () {
    var F22 = parseFloat($("#linepressure2").val());
    var F23 = parseFloat($("#ppmv2").val());
    if (!isNaN(F22) && !isNaN(F23)) {
      var partial = (F23 * ((F22 + 1.01325) * 100000)) / 1000000;
      var ln = Math.log(partial);
      var dewpoint = -1;
      if (partial > 0) {
        var guess = -50;
        for (var t = -100; t <= 60; t += 0.01) {
          var ei = Math.log(611.2) + (22.46 * t) / (272.62 + t);
          var ew = Math.log(611.2) + (17.62 * t) / (243.12 + t);
          var calc = t < 0 ? ei : ew;
          if (Math.abs(calc - ln) < 0.001) {
            dewpoint = t;
            break;
          }
        }
        if (dewpoint !== -1) {
          $("#dewpoint2").val(dewpoint.toFixed(2));
        }
      }
    }
  });
});
</script>

Typically, this activity is carried out either by repeatedly pressurizing and depressurizing the system with nitrogen or through continuous purging until the desired dew point is achieved (usually below -50°C).

There are two common methods used to measure the dew point: (1) using meters that measure the dew point in terms of temperature, and (2) through tube sampling, which indicates the concentration of water vapor in the system in parts per million by volume (ppmv). Project specifications or operating procedures typically specify the required dew point temperature in degrees Celsius. This often leads to confusion when a measurement method that provides readings in ppmv is employed.

The methods for converting between dew point temperature and ppm (parts per million) are not widely available or taught, causing engineers to rely on charts with a limited pressure range.

Converting dew point temperature to ppmv and vice versa can be achieved using the Magnus equation. This equation can accurately estimate vapor pressure over water or ice with a high degree of accuracy, and it is not difficult to apply. I will demonstrate how just two instances of the Magnus equation are all that is needed to convert between dew point temperature and ppmv.

<h3>Magnus Equation</h3>

For the temperature range of -45°C to +60°C, the Magnus equation provided below can estimate the vapor pressure over water at a 95% confidence level. In this equation, \( e_w(t) \) is the saturation vapor pressure in pascals, and \( t \) is temperature in degrees Celsius.

<div>$$\ln ew(t) = \ln 611.2 + \frac{17.62t}{243.12 + t}$$</div>

For the temperature range -65°C to +0.01°C, the Magnus equation provided below can estimate vapor pressure over ice at the 95% confidence level. In this equation, \( e_i(t) \) is saturation vapor pressure in pascals and \( t \) is temperature in °C.

<div>$$\ln ei(t) = \ln 611.2 + \frac{22.46t}{272.62 + t}$$</div>

<h3>Calculator: Dew Point to Vapor Pressure</h3>

When the dew point temperature is obtained by the dew point meters, water vapor pressure could be estimated using the Magnus equations shown above, as demonstrated below.

<div class="container">
  <div class="row">
    <div class="col-auto p-0">
      <form class="form">
        <div class="form-group row">
          <label for="linedewpoint" class="col-6 col-form-label">Line Dew Point (°C)</label>
          <div class="col-6">
            <input type="text" class="form-control" id="linedewpoint" placeholder="Dewpoint">
          </div>
        </div>
        <div class="form-group row">
          <label for="vaporpressure" class="col-6 col-form-label">Vapor Pressure (Pa)</label>
          <div class="col-6">
            <input type="text" class="form-control" id="vaporpressure" placeholder="Result">
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<p></p>
<h3>Calculator: Vapor Pressure to PPM</h3>

Since PPM by volume is a ratio of partial pressure to total pressure in a million, the known vapor pressure (partial pressure) from the above calculation can be used in the equation below. In this formula, the total pressure refers to the line pressure during the measurement. The calculator below is linked to the result from the water vapor pressure calculator mentioned above.

<div class="container">
  <div class="row">
    <div class="col-auto p-0">
      <form class="form">
        <div class="form-group row">
          <label for="linepressure" class="col-6 col-form-label">Line Pressure (barG)</label>
          <div class="col-6">
            <input type="text" class="form-control" id="linepressure" placeholder="Line Pressure">
          </div>
        </div>
        <div class="form-group row">
          <label for="ppmv" class="col-6 col-form-label">PPM(v)</label>
          <div class="col-6">
            <input type="text" class="form-control" id="ppmv" placeholder="Result">
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<p></p>
The consistency of the results from calculations above are consistent with [Linde's Dew Point Chart](https://www.lindedirect.com/resources/technical-information/dew-point). By using calculation instead of chart, the dew point could be estimated at any line pressure, as chart is usually limited to a certain line pressure (760 Torr / 0 barG as shown in Linde's Chart).

<h3>Calculator: PPM to Dew Point</h3>

With the same understanding of how the dew point temperature can be converted to ppmv, we can utilize the same formula to convert ppmv back to dew point temperature, as demonstrated below. This conversion is particularly useful when employing the tube sampling method for dew point checks, as tube sampling typically provides readings in ppmv, and having the equivalent reading in dew point temperature is very useful.

<div class="container">
  <div class="row">
    <div class="col-auto p-0">
      <form class="form">
        <div class="form-group row">
          <label for="linepressure2" class="col-6 col-form-label">Line Pressure (barG)</label>
          <div class="col-6">
            <input type="text" class="form-control" id="linepressure2" placeholder="Line Pressure">
          </div>
        </div>
        <div class="form-group row">
          <label for="ppmv2" class="col-6 col-form-label">PPM(v)</label>
          <div class="col-6">
            <input type="text" class="form-control" id="ppmv2" placeholder="PPM(v)">
          </div>
        </div>
        <div class="form-group row">
          <label for="dewpoint2" class="col-6 col-form-label">Dew Point</label>
          <div class="col-6">
            <input type="text" class="form-control" id="dewpoint2" placeholder="Result">
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

