---
layout: post
title: "Converting Dew Point in DegC to ppm and vice versa"
date: 2022-09-12 13:30:15 +0800
categories: Operation
---

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

<h2>Converting Temperature to ppm and vice versa for Dew Point Measurement.</h2>

<p>Commissioning a cryogenic system in a plant that handles ethylene or propylene requires a process known as ‘system drying.’ System drying is an activity conducted before introducing cryogenic fluids to the system...</p>

<h3>Magnus Equation</h3>
<p>For the temperature range of -45°C to +60°C:</p>
<div>$$\ln ew(t) = \ln 611.2 + \frac{17.62t}{243.12 + t}$$</div>
<p>For the temperature range -65°C to +0.01°C:</p>
<div>$$\ln ei(t) = \ln 611.2 + \frac{22.46t}{272.62 + t}$$</div>

<h3>Calculator: Dew Point to Vapor Pressure</h3>
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

<h3>Calculator: Vapor Pressure to PPM</h3>
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

<h3>Calculator: PPM to Dew Point</h3>
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

<p>Additional calculations and scripts originally used in WordPress shortcodes (177, 211, 214, and 217) have been integrated directly via HTML and JavaScript above.</p>

