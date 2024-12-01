---
layout: post
title: ATTACK AS DEFENSE: RUN-TIME BACKDOOR IMPLANTATION FOR IMAGE CONTENT PROTECTION
date: 2024-10-07 09:56:00-0400
description: Protecting sensitive image content using runtime backdoor implantation.
tags: [AI Security, Image Protection]
categories: tech-report
related_posts: false
related_publications: zhc2025attack_as_defense
---


<article>
<div class="title"><strong>ATTACK AS DEFENSE: RUN-TIME BACKDOOR  IMPLANTATION FOR IMAGE CONTENT PROTECTION
</strong></div>
<div class="author">
Haichuan Zhang, Meiyu Lin, Zhaoyi Liu, Renyuan Li, Zhiyuan Cheng, Carl Yang, Mingjie Tang
</div>

<p>——Under review as a conference paper at ICLR 2025
</p>
<p><br></p>
<h4 id="abstract">Abstract</h4>
<p>As generative models achieve great success, tampering and modifying the sensitive image contents (i.e., human faces, artist signatures, commercial logos, etc.) have induced a significant threat with social impact. The backdoor attack is a method that implants vulnerabilities in a target model, which can be activated through a trigger. In this work, we innovatively prevent the abuse of image content modification by implanting the backdoor into image-editing models. Once the protected sensitive content on an image is modified by an editing model, the backdoor will be triggered, making the editing fail. Unlike traditional backdoor attacks that use data poisoning, to enable protection on individual images and eliminate the need for model training, we developed the first framework for run-time backdoor implantation, which is both time- and resource- efficient. We generate imperceptible perturbations on the images to inject the backdoor and define the protected area as the only backdoor trigger. Editing other unprotected insensitive areas will not trigger the backdoor, which minimizes the negative impact on legal image modifications. Evaluations with state-of-the-art image editing models show that our protective method can increase the CLIP-FID of generated images from 12.72 to 39.91, or reduce the SSIM from 0.503 to 0.167 when subjected to malicious editing. At the same time, our method exhibits minimal impact on benign editing, which demonstrates the efficacy of our proposed framework. The proposed run-time backdoor can also achieve effective protection on the latest diffusion models.</p>
<div class="row">
<div class="col-12 col-sm-12 col-md-9 col-lg-8 mx-auto d-block">
{% include figure.html path="assets/img/publications/examples_ATTACK_AS_DEFNESE\OVERVIEW.png" title="post_couler" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Overview


</div>
</div>
<p>SOME EXAMPLES</p>
<div class="col-12 col-sm-12 col-md-9 col-lg-8 mx-auto d-block">
{% include figure.html path="assets/img/publications/examples_ATTACK_AS_DEFNESE/EXAMPLE1.png" title="post_couler" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<p><br></p>
</article>
