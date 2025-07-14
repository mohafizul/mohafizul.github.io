---
layout: post
title: "Calculating the Axial Positions Trip Set Points from a Pump Axial Positions Datasheet"
date: 2023-08-23 15:10:15 +0800
categories: Commissioning
---

A typical axial position datasheet for a canned pump would look like the table below:

<style>
  .table td, .table th {
    padding: 0.3rem;
    font-size: 14px;
  }

  .table th.text-center {
    text-align: center;
  }

  .table th#number-column {
    padding-left: 0;
    padding-right: 0;
  }
</style>

<div class="container mt-5">
  <table class="table">
    <thead>
      <tr>
        <th scope="col" id="number-column" class="text-center">No.</th>
        <th scope="col">Item</th>
        <th scope="col">Value</th>
        <th scope="col">Unit</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row" class="text-center">1</th><td>Measuring Range</td><td>4-20</td><td>mA</td></tr>
      <tr><th scope="row" class="text-center">2</th><td>Axial Clearance</td><td>1.70</td><td>mm</td></tr>
      <tr><th scope="row" class="text-center">3</th><td>Calibration</td><td>1 mm that corresponds to</td><td>2 mA</td></tr>
      <tr><th scope="row" class="text-center">4</th><td>End Position Pump Side</td><td>10.30</td><td>mA</td></tr>
      <tr><th scope="row" class="text-center">5</th><td>End Position Motor Side</td><td>13.70</td><td>mA</td></tr>
      <tr><th scope="row" class="text-center">6</th><td>Alarm Pump Side (Note 1)</td><td>9.30</td><td>mA</td></tr>
      <tr><th scope="row" class="text-center">7</th><td>Alarm Motor side (Note 2)</td><td>14.70</td><td>mA</td></tr>
      <tr><th scope="row" class="text-center">8</th><td>Trip Pump side (Note 3)</td><td>8.30</td><td>mA</td></tr>
      <tr><th scope="row" class="text-center">9</th><td>Trip Motor side (Note 4)</td><td>15.70</td><td>mA</td></tr>
      <tr><th scope="row" class="text-center">10</th><td>Balance Position (Note 5)</td><td>10.52</td><td>mA</td></tr>
      <tr>
        <th colspan="4">
          Notes:<br>
          1. Corresponds to 0.5 mm wear<br>
          2. Corresponds to 0.5 mm wear<br>
          3. Corresponds to 1.0 mm wear<br>
          4. Corresponds to 1.0 mm wear<br>
          5. Q = 201.5 m³/h SV = 0.11 mm
        </th>
      </tr>
    </tbody>
  </table>
</div>

In order to obtain the minimum and maximum axial displacement alarm or trip set points:

1. Note that there are 2 types of positions or sides given – motor and pump. Therefore, the measuring range of 4–20 mA would represent two sides (a positive value for the pump side and a negative value for the motor side).  
   Calculating the amp allocated for each side:  
   **(20 - 4) / 2 = 8**

2. Since the measuring range starts at 4:  
   **8 + 4 = 12**

3. In row number 3, the table specifies that 2 mA equals 1 mm.  
   With this information, we can convert the values in rows number 6 to 9 to the required minimum and maximum set points by subtracting 12 from the given mA values and then dividing by 2 mA (per 1 mm):

   - **Minimum axial displacement alarm set point**  
     (9.3 - 12) / 2 = **-1.35 mm**

   - **Maximum axial displacement alarm set point**  
     (14.7 - 12) / 2 = **1.35 mm**

   - **Minimum axial displacement trip set point**  
     (8.3 - 12) / 2 = **-1.85 mm**

   - **Maximum axial displacement trip set point**  
     (15.7 - 12) / 2 = **1.85 mm**

4. Note: They are written as minimum and maximum in the alarm set point list deliverable, but in actuality, the negative and positive values represent movement directions – pump side vs. motor side axial movement.

5. With all four set points obtained, the wear amount could be confirmed using the "Notes" provided at the bottom of the table.  
   Let’s pick the minimum axial displacement alarm set point.  

   In line number 2, axial clearance for this pump is 1.7 mm which represents both the pump and motor sides:  
   **1.7 / 2 = ±0.85 mm**  
   (+0.85 mm for the motor side, -0.85 mm for the pump side).  

   To get the wear amount, subtract their corresponding clearances from the set points.  
   For the minimum axial displacement alarm:  
   **-1.35 - (-0.85) = -0.5 mm**

   This value agrees with the provided "Notes". When minimum axial displacement alarm is triggered, it suggests that **0.5 mm of wear** may have occurred on the pump side. This would be useful in estimating the wear amount at any indicated values on the DCS.
