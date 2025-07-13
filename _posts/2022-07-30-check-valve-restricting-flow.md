---
layout: post
title: "Check Valve Restricting Flow"
date: 2022-07-30 11:51:31 +0800
categories: Commissioning
---
I have experience in a batch processing unit project where saturated LP steam (2 barG, 133 degC) couldn’t lift the piston inside a 1-inch plug-type check valve, causing the steam to be completely blocked. 

Recently in another project we had pumps (both main and standby) that delivered flow way below the pump curve. However, similar pumps (same brand, similar sizes) installed in other locations were operating normally.

During commissioning or startup, when encountering flow or pressure issues, the most practical course of action is to perform a pressure survey. A pressure survey, usually carried out by installing temporary pressure gauges in a few selected locations, is the easiest method. It can be performed without needing to shut down the line and is still highly effective in identifying issues in the pipeline.

After performing pressure survey to these troubled pumps, we could narrow down the location of the pressure drop which was between discharge check valve and control valve. Comparing other normally operating pumps with these 2 pumps, we saw the difference in discharge line arrangement, particularly in the check valve selection. The discharge check valve in troubled pump was of a plug type check valve while swing type check valves were used for the others. Since we already had an experience before with this type of check valve, we were confident that the flow was restricted by the piston in the check valve.

It's not easy to convince the Plant Owner on our suspicion. They claimed after so many years operating the plant they never had any check valves restricting the flow. Our proposal to remove the spring and plug inside the check valve was rejected after risk assessment because by doing so, the standby pump will lose its reverse flow protection. The best option available to us was to change the check valve spring to a less rigid type. Unfortunately, after conducting a pump test run with a softer spring, no significant improvement was observed. Owner became more confident that the flow issues had nothing to do with check valve selection. We also unchoked the line with spring wire to eliminate any debris inside the line, but to no avail. 

To convince Owner that the root cause was still the check valve, we searched for the same check valve in the warehouse & tore down every part of the check valve. Full lift-off check valve plug, with spring compressed to its minimum length only allows small flow of liquid to pass through as shown in Figure 1. Client was convinced this time and allowed us to remove the plug and spring for a test run. The flow improved and root cause confirmed.

![You All Along](/assets/images/figure-4.png)

As shown in the snapshot below, plug type check valve does restricting the flow even when the plug is "fully lifted-off" by the upstream pressure. If this type of check valve is selected, Process & Piping team should confirm the pressure drop with vendor to evaluate if it will be restricting the flow.

![Check Valve Snapshot](/assets/images/figure-3.png)
