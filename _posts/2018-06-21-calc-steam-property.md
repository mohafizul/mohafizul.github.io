---
layout: post
title:  "Using Double Square Root Formula to obtain Saturated Steam Temperature"
date:   2018-06-21 15:30:00 +0800
categories: Tips
---
Steam properties are usually obtained from The International Association for The Properties of Water & Steam IAPWS-IF97 formula. 
This formula usually applied through an app, software, printed table or excel adds on. These tools usually are not available during 
meeting and discussion or at site, so to get a fast estimation with acceptable accuracy, a simple double square root formula below can be used:  

```phyton
Tsat = [(P^0.5)^0.5]x100
where;
    P   = Saturated Steam Pressure (barA)
    Tsat= Saturated Steam Temperature (degC)
    Note: the pressure is in abs not gauge.
```  
Comparing the double square root formula with APWS-IF97 as per table below, the errors are negligible (less than 2%).  

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


So with plant saturated steam usually is between 5 barG to 50 barG, the formula can perform well at negligible difference compare to APWS-IF97.  

|Steam Type|Pressure (barG)|Pressure (barA)|
|---------|---|---|
|Low Pressure (sat) Steam|5.5|4.5|
|Desuperheated Medium Pressure Steam|17|16|
|Desuperheated High Pressure Steam|47|46|
