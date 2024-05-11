---
layout: post
title: GPTuner - A Manual-Reading Database Tuning System via GPT-Guided Bayesian Optimization
date: 2024-03-13 09:56:00-0400
description: 
tags: AI DB
categories: tech-report
related_posts: false
related_publications: lao2023gptuner
---


<article>
<div class="title"><strong>GPTuner - A Manual-Reading Database Tuning System via GPT-Guided Bayesian Optimization
</strong></div>
<div class="author">
Jiale Lao, Yibo Wang, Yufei Li, Jianping Wang, Yunjia Zhang, Zhiyuan Cheng, Wanghu Chen, Mingjie Tang, Jianguo Wang
</div>

<p>——Accepted by the VLDB 2024, <a href="/assets/pdf/gptuner.pdf">[PDF]</a>
</p>
<p><br></p>
<h4 id="abstract">Abstract</h4>
<p>Modern database management systems (DBMS) expose hundreds of configurable knobs to control system behaviours. Determining the appropriate values for these knobs to improve DBMS performance is a long-standing problem in the database community. As there is an increasing number of knobs to tune and each knob could be in continuous or categorical values, manual tuning becomes impractical. Recently, automatic tuning systems using machine learning methods have shown great potentials. However, existing approaches still incur significant tuning costs or only yield sub-optimal performance. This is because they either ignore the extensive domain knowledge available (e.g., DBMS manuals and forum discussions) and only rely on the runtime feedback of benchmark evaluations to guide the optimization, or they utilize the domain knowledge in a limited way. Hence, we propose GPTuner, a manual-reading database tuning system. Firstly, we develop a Large Language Model (LLM)-based pipeline to collect and refine heterogeneous knowledge, and propose a prompt ensemble algorithm to unify a structured view of the refined knowledge. Secondly, using the structured knowledge, we (1) design a workload-aware and training-free knob selection strategy, (2) develop a search space optimization technique considering the value range of each knob, and (3) propose a Coarse-to-Fine Bayesian Optimization Framework to explore the optimized space. Finally, we evaluate GPTuner under different benchmarks (TPC-C and TPC-H), metrics (throughput and latency) as well as DBMS (PostgreSQL and MySQL). Compared to the state-of-the-art approaches, GPTuner identifies better configurations in 16x less time on average. Moreover, GPTuner achieves up to 30% performance improvement (higher throughput or lower latency) over the best-performing alternative.</p>
<div class="row">
<div class="col-12 col-sm-12 col-md-9 col-lg-8 mx-auto d-block">
{% include figure.html path="assets/img/publications/post_gptuner.png" title="post_gptuner" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Overview of GPTuner.
</div>
</div>
</div>
<h4 id="abstract">More About GPTuner</h4>
<p>For more information about GPTuner, please visit Jiale Lao' s blog <a href="https://solidlao.github.io/post/llm-db-tuning/">[From DB-BERT to DB-BART and Beyond]</a>, where he makes full introduction of the project background and introduce DB-Bert, which is also a masterpiece in the filed of knob-tuning and inspires GPTuner's design.</p>
<p><br></p>
</article>