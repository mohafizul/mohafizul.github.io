---
layout: post
title:  "Quickly find steam saturated temperature when the pressure is known by using double square root method"
date:   2018-06-21 15:30:00 +0800
categories: Tips
---
Probably you sit in a meeting and you need to quickly estimate the temperature of saturated steam using a calculator instead of finding it in a steam table such as the IAPWS-IF97 formula. You could actually do that pretty accurately by doubling the square root of that steam pressure in barA as shown below: 

```phyton
Tsat = [(P^0.5)^0.5]x100
where;
    P   = Saturated Steam Pressure (barA)
    Tsat= Saturated Steam Temperature (degC)
    Note: the pressure is in abs not gauge.
```  
Now let's check how acceptable this method is vs IF97. 

|Sat. Steam Pres.<br>(barA)|Temp w/ IF97<br>(degC)|Temp w/ double sqroot<br>(degC)|Error %|
|---|---|---|---|
|1|99.606|100.000|0.40|
|2|120.212|118.921|1.07|
|4|143.613|141.421|1.53|
|6|158.832|156.508|1.46|
|8|170.414|168.179|1.31|
|10|179.886|177.828|1.14|
|20|212.385|211.474|0.43|
|40|250.358|251.487|0.45|
|60|275.586|278.316|0.99|
|80|295.009|299.070|1.38|
|100|310.999|316.228|1.68|  

The error is less than 2%! Pretty reliable.

Bonus reference: Typical saturated steam condition from the plant utility.  

|Steam Type|Pressure (barG)|Pressure (barA)|
|---------|---|---|
|Low Pressure (sat) Steam|5.5|4.5|
|Desuperheated Medium Pressure Steam|17|16|
|Desuperheated High Pressure Steam|47|46|
