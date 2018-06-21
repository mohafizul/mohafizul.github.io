---
layout: post
custom_js:
    -   jquery
    -   jscript
    -   chart.js
title:  "Easy Calculation to Get Steam Property"
date:   2018-06-21 15:30:00 +0800
categories: Rule of Thumb
---
To get steam saturation temperature at given pressure
```phyton
Tsat = [((P)^1/2)^1/2]x100
where;
    P   = Abs. Pressure (barA)
    Tsat= Absolute Temperature (degC)
```  

Let's compare the pressure with this calculation with env1 and env2  

|Pres.<br>(barA)|T double sqroot<br>(degC)|T Env1<br>(degC)|Error %|T Env2<br>(degC)|Error%|
|---|---|---|---|---|---|
|0||||||
|1||||||
|2||||||
|4||||||
|6||||||
|8||||||
|10||||||
|20||||||
|40||||||
|60||||||
|80||||||
|100||||||
|120||||||
|140||||||
|160||||||
|180||||||
|200||||||

Let's plot the graph to see the different  

<canvas id="popChart" width="600" height="400"></canvas>
