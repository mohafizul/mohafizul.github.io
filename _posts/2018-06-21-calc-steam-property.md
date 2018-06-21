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

|Pres.(barA)|T double sqroot<br>(degC)|T Env1<br>(degC)|Error %|T Env2<br>(degC)|Error%|
|---|---|---|---|---|---|
|0||||||
|1||||||
|2||||||
|3||||||
|4||||||
|5||||||
|6||||||
|7||||||
|8||||||
|9||||||
|10||||||
|20||||||
|30||||||
|40||||||
|50||||||
|60||||||
|70||||||
|80||||||
|90||||||
|100||||||
|120||||||
|140||||||
|160||||||
|180||||||
|200||||||

Let's plot the graph to see the different  

<canvas id="popChart" width="600" height="400"></canvas>
