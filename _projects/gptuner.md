---
layout: page
title: GPTuner
description: A Manual-Reading Database Tuning System via GPT-Guided Bayesian Optimization
img: assets/img/ids_lab_logo_icon_purple.svg
importance: 4 
category: Research
---
## Project Background

Do you know that it is troublesome for DBAs to find promising configurations(knob values) for a given worklod? Oracle’s Cloud Business Group data reveals that database administrators (DBA) spend an average of 90 percent of their time on maintenance tasks like knob tuning. 

Therefor, manual tuning becomes impractical. Recent years have seen some automatic tuning systems using machine learning methods which have shown great potentials. However, existing approaches
still incur significant tuning costs or only yield sub-optimal performance. This is because they either ignore the extensive domain knowledge available (e.g., DBMS manuals and forum discussions)
and only rely on the runtime feedback of benchmark evaluations to guide the optimization, or they utilize the domain knowledge in a limited way.

## System Overview

<img src="/assets/img/projects/gptuner/sys_overview.png" alt="GPTuner overview" width="800">

**GPTuner** is a manual-reading database tuning system to suggest satisfactory knob configurations with reduced tuning costs. The figure above presents the tuning workflow that involves seven steps:
1. 📌 User provides the DBMS to be tuned (e.g., PostgreSQL or MySQL), the target workload, and the optimization objective (e.g., latency or throughput).
2. 📌 GPTuner collects and refines the heterogeneous knowledge from different sources (e.g., GPT-4, DBMS manuals, and web forums) to construct _Tuning Lake_, a collection of DBMS tuning knowledge.
3. 📌 GPTuner unifies the refined tuning knowledge from _Tuning Lake_ into a structured view accessible to machines (e.g., JSON).
4. 📌 GPTuner reduces the search space dimensionality by selecting important knobs to tune (i.e., fewer knobs to tune means fewer dimensions).
5. 📌 GPTuner optimizes the search space in terms of the value range for each knob based on structured knowledge.
6. 📌 GPTuner explores the optimized space via a novel Coarse-to-Fine Bayesian Optimization framework.
7. 📌 Finally, GPTuner identifies satisfactory knob configurations within resource limits (e.g., the maximum optimization time or iterations specified by users).

## Come and Learn More!

For more information and hands-on experience of GPTuner, please visit our Github Repo! <a href="https://github.com/SolidLao/GPTuner">[GPTuner]</a>