---
layout: page
title: WAter
description: A Workload-Adaptive Knob Tuning System based on Workload Compression
img: assets/img/projects/water/workflow.png
importance: 4
category: Research
---
## Project Background

Selecting appropriate values for the configurable parameters (knobs) of a DBMS is a significant challenge. Recent machine learning (ML)-based tuning systems have shown strong potential, but their practical adoption is often limited by the high tuning cost. This cost arises from two factors: (1) the system needs to evaluate a large number of configurations to identify a satisfactory one, and (2) for each configuration, the system must execute the entire target workload on the DBMS, which is both time-consuming and resource-intensive.

Existing studies have primarily addressed the first factor by improving *sample efficiency*, that is, by reducing the number of configurations that must be evaluated. The second factor, improving *runtime efficiency* by reducing the time required for each evaluation, has received limited attention and remains underexplored.

## System Overview

<img src="/assets/img/projects/water/workflow.png" alt="WAter workflow" width="800">

**WAter** is a runtime-efficient, workload-adaptive knob tuning system that finds near-optimal configurations at a fraction of the tuning cost compared with state-of-the-art methods. Instead of repeatedly replaying the entire target workload, WAter divides the tuning process into a sequence of time slices and evaluates only a small subset of queries from the workload in each slice. Each time slice involves three steps:

1. 📌 **Workload compression**: Given an input workload, WAter greedily compresses the workload based on runtime statistics to maximize *representativity*. We design a query-level metric and a novel Greedy Algorithm that continually refines the query subset (e.g., removing uninformative queries and adding promising ones) as tuning progresses.
2. 📌 **Subset tuning with history reuse**: WAter organizes and reuses the tuning history collected on other subsets to bootstrap the local surrogate model of the tuner assigned to the current subset, achieving efficient subset tuning.
3. 📌 **Configuration verification**: WAter uses a hybrid scoring mechanism, built upon a global surrogate model, to balance exploitation and exploration and to select the most promising configurations for evaluation on the entire workload.

## Experimental Results

<img src="/assets/img/projects/water/result.png" alt="WAter results" width="800">

We evaluate WAter across different workloads (e.g., TPC-H, TPC-DS, JOB, DSB, and SQLStorm) and compare it with state-of-the-art approaches. WAter identifies the best-performing configurations with up to **73.5% less tuning time** and achieves up to **16.2% higher performance** than the best-performing alternative. We also demonstrate WAter's robustness across different hardware platforms and optimizers, as well as its scalability across database sizes.

## Publication

Yibo Wang, Jiale Lao, Chen Zhang, Cehua Yang, Jianguo Wang, and Mingjie Tang. *WAter: A Workload-Adaptive Knob Tuning System based on Workload Compression*. Proceedings of the VLDB Endowment (VLDB '27).

## Come and Learn More!

For more information and hands-on experience of WAter, please visit our Github Repo! <a href="https://github.com/Wangyibo321/WAter">[WAter]</a>
