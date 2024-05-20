---
layout: post
title: BadPart: Unified Black-box Adversarial Patch Attacks against Pixel-wise Regression Tasks
date: 2024-05-20 15:58:00-0400
description: 
tags: ML CV
categories: tech-report
related_posts: false
related_publications: cheng2024badpart
---


<article>
<div class="title"><strong>Unified Black-box Adversarial Patch Attacks against Pixel-wise Regression Tasks
</strong></div>
<div class="author">
Zhiyuan Cheng and Zhaoyi Liu and Tengda Guo and Shiwei Feng and Dongfang Liu and Mingjie Tang and Xiangyu Zhang
</div>

<p>——Accepted by the ICML 2024, <a href="https://arxiv.org/pdf/2404.00924">[PDF]</a>
</p>
<p><br></p>
<h4 id="abstract">Abstract</h4>
<p>Pixel-wise regression tasks (e.g., monocular depth estimation (MDE) and optical flow estimation (OFE)) have been widely involved in our daily life in applications like autonomous driving, augmented reality and video composition. Although certain applications are security-critical or bear societal significance, the adversarial robustness of such models are not sufficiently studied, especially in the black-box scenario. In this work, we introduce the first unified black-box adversarial patch attack framework against pixel-wise regression tasks, aiming to identify the vulnerabilities of these models under query-based black-box attacks. We propose a novel square-based adversarial patch optimization framework and employ probabilistic square sampling and score-based gradient estimation techniques to generate the patch effectively and efficiently, overcoming the scalability problem of previous black-box patch attacks. Our attack prototype, named BADPART, is evaluated on both MDE and OFE tasks, utilizing a total of 7 models. BADPART surpasses 3 baseline methods in terms of both attack performance and efficiency. We also apply BADPART on the Google online service for portrait depth estimation, causing 43.5% relative distance error with 50K queries. State-of-the-art (SOTA) countermeasures cannot defend our attack effectively.</p>
<div class="row">
<div class="col-12 col-sm-12 col-md-9 col-lg-8 mx-auto d-block">
{% include figure.html path="assets/img/publications/post_badpart.png" title="post_badpart" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Overview of BadPart.
</div>
</div>
</div>
<p><br></p>
</article>