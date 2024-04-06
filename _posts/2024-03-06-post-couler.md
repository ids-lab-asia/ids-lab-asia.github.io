---
layout: post
title: Couler - Unified Machine Learning Workflow Optimization in Cloud
date: 2024-03-06 09:56:00-0400
description: 
tags: AI System
categories: tech-report
related_posts: false
related_publications: wang2024couler
---


<article>
<div class="title"><strong>Couler - Unified Machine Learning Workflow Optimization in Cloud
</strong></div>
<div class="author">
Xiaoda Wang, Yuan Tang, Tengda Guo, Bo Sang, Jingji Wu, Jian Sha, Ke Zhang, Jiang Qian, Mingjie Tang
</div>

<p>——Accepted by the IEEE ICDE 2024, <a href="/assets/pdf/couler.pdf">[PDF]</a>
</p>
<p><br></p>
<h4 id="abstract">Abstract</h4>
<p>Machine Learning (ML) has become ubiquitous, fueling data-driven applications across various organizations. Contrary to the traditional perception of ML in research, ML workflows can be complex, resource-intensive, and time-consuming. Expanding an ML workflow to encompass a wider range of data infrastructure and data types may lead to larger workloads and increased deployment costs. Currently, numerous workflow engines are available (with over ten being widely recognized). This variety poses a challenge for end-users in terms of mastering different engine APIs. While efforts have primarily focused on optimizing ML Operations (MLOps) for a specific workflow engine, current methods largely overlook workflow optimization across different engines.
In this work, we design and implement Couler, a system designed for unified ML workflow optimization in the cloud. Our main insight lies in the ability to generate an ML workflow using natural language (NL) descriptions. We integrate Large Language Models (LLMs) into workflow generation, and provide a unified programming interface for various workflow engines. This approach alleviates the need to understand various workflow engines' APIs. Moreover, Couler enhances workflow computation efficiency by introducing automated caching at multiple stages, enabling large workflow auto-parallelization and automatic hyperparameters tuning. These enhancements minimize redundant computational costs and improve fault tolerance during deep learning workflow training. Couler is extensively deployed in real-world production scenarios at Ant Group, handling approximately 22k workflows daily, and has successfully improved the CPU/Memory utilization by more than 15% and the workflow completion rate by around 17%.</p>
<div class="row">
<div class="col-12 col-sm-12 col-md-9 col-lg-8 mx-auto d-block">
{% include figure.html path="assets/img/publications/post_couler.png" title="post_couler" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Overview of Couler.
</div>
</div>
</div>
<p><br></p>
</article>