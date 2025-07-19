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

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

<script>
$(document).ready(function() {
  $("#linedewpoint").keyup(function(){
    var F13  = parseFloat($("#linedewpoint").val());
    if(F13>0){
      $("#vaporpressure").val((Math.exp(Math.log(611.2) + (17.62*F13)/(243.12+F13))).toFixed(2));
      F15 = Math.exp(Math.log(611.2) + (17.62*F13)/(243.12+F13));	
      var F16  = parseFloat($("#linepressure").val());
      if($.isNumeric(F16)&&$.isNumeric(F15)){
        $("#ppmv").val(((1000000*F15)/(101325+F16*100000)).toFixed(2));
      }else{
        $("#ppmv").val("");
      };
    }else if(F13<1){
      $("#vaporpressure").val((Math.exp(Math.log(611.2) + (22.46*F13)/(272.62+F13))).toFixed(2));
      F15 = Math.exp(Math.log(611.2) + (22.46*F13)/(272.62+F13));
      if($.isNumeric(F16)&&$.isNumeric(F15)){
        $("#ppmv").val(((1000000*F15)/(101325+F16*100000)).toFixed(2));
      }else{
        $("#ppmv").val("");
      };
    }else{
      $("#vaporpressure").val("")
      F15="";
      $("#ppmv").val("");
    };			
  });

  $("#linepressure").keyup(function(){
    var F16  = parseFloat($("#linepressure").val());
    if($.isNumeric(F16)&&$.isNumeric(F15)){
      $("#ppmv").val(((1000000*F15)/(101325+F16*100000)).toFixed(2));
    }else{
      $("#ppmv").val("");
    };
  });

  $("#linepres").keyup(function(){
    var F30  = parseFloat($("#linepres").val());
    var F31  = parseFloat($("#hppmv").val());
    var F32  = F31*(101325+F30*100000)/1000000
    if($.isNumeric(F30)&&$.isNumeric(F31)&&F32>611.2){
      $("#dewpoint").val((243.12*Math.log(F32/611.2)/(17.62-Math.log(F32/611.2))).toFixed(2));
    }else if(($.isNumeric(F30)&&$.isNumeric(F31)&&F32<=611.2)){
      $("#dewpoint").val((272.62*Math.log(F32/611.2)/(22.46-Math.log(F32/611.2))).toFixed(2));
    }else{
      $("#dewpoint").val("");
    };
  });

  $("#hppmv").keyup(function(){
    var F30  = parseFloat($("#linepres").val());
    var F31  = parseFloat($("#hppmv").val());
    var F32  = F31*(101325+F30*100000)/1000000
    if($.isNumeric(F30)&&$.isNumeric(F31)&&F32>611.2){
      $("#dewpoint").val((243.12*Math.log(F32/611.2)/(17.62-Math.log(F32/611.2))).toFixed(2));
    }else if(($.isNumeric(F30)&&$.isNumeric(F31)&&F32<=611.2)){
      $("#dewpoint").val((272.62*Math.log(F32/611.2)/(22.46-Math.log(F32/611.2))).toFixed(2));
    }else{
      $("#dewpoint").val("");
    };
  });
});
</script>

## Converting Temperature to ppm and vice versa for Dew Point Measurement

This post explores how to convert between temperature (dew point) and ppm (parts per million) using thermodynamic principles and empirical equations.

We start from basic psychrometric formulas and bring it into real-world engineering practices using the calculator embedded below.

---

### Calculator: Dew Point to Vapor Pressure

```html
<div class="container">
  <div class="row">
    <div class="col-auto p-0">				
      <form class="form">			
        <div class="form-group row">
          <label for="linedewpoint" class="col-6 col-form-label">Line Dew Point (°C)</label>
          <div class="col-6">
            <input type="LDP" class="form-control" id="linedewpoint" placeholder="Dewpoint">
          </div>
        </div>				
        <div class="form-group row">				
          <label for="vaporpressure" class="col-6 col-form-label">Vapor Pressure (Pa)</label>
          <div class="col-6">
            <input type="vapres" class="form-control" id="vaporpressure" placeholder="Result">
          </div>
        </div>				
      </form>          
    </div>
  </div>		
</div>
```

---

### LaTeX Formula Sample

To convert dew point temperature to vapor pressure:

$$
e = 611.2 \times \exp\left(\frac{17.62 \times T}{243.12 + T}\right)
$$

Or if below 0°C:

$$
e = 611.2 \times \exp\left(\frac{22.46 \times T}{272.62 + T}\right)
$$

---

Additional calculations and scripts originally used in WordPress shortcodes (177, 211, 214, and 217) have been integrated directly via HTML and JavaScript above.

