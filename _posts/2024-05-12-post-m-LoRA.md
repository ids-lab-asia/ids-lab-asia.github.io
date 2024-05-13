---
layout: post
title: m-LoRA - How to Efficiently Fine-Tune Dozens of Large Language Models on a Single GPU
date: 2024-05-12 22:56:00-0400
description: 
tags: AI System
categories: tech-report
related_posts: false
related_publications: false
---


<article>
<div class="title"><strong>m-LoRA: How to Efficiently Fine-Tune Dozens of Large Language Models on a Single GPU
</strong></div>
<div class="author">
Zhengmao Ye, Dengchun Li, Jingqi Tian, Tingfeng Lan, Jie Zuo, Lei Duan,  Hui Lu, Yexi Jiang, Jian Sha, Ke Zhang, Mingjie Tang
</div>


<p><br></p>
<h4 id="abstract">Abstract</h4>
<p>Transformer-based large language models (LLMs) have demonstrated outstanding performance across diverse domains, particularly when fine-turned for specific domains. Recent studies suggest that the resources required for fine-tuning LLMs can be economized through parameter-efficient methods such as Low-Rank Adaptation (LoRA). While LoRA effectively reduces computational burdens and resource demands, it currently supports only a single-job fine-tuning setup. In this paper, we present M-LORA, a high-throughput framework for fine-tuning LLMs. M-LORA efficiently trains multiple jobs on a single GPU using the LoRA method, leveraging shared pre-trained model and adaptive scheduling. M-LORA is compatible with transformer-based language models like LLaMA and ChatGLM, etc. Experiments show that M-LORA saves 53% of GPU memory when training multiple LLaMA7B models on NVIDIA A100 80GB GPU and boosts training throughput by about 17% compared to existing methods when training with various pre-trained models on different GPUs. The adaptive scheduling algorithm reduces turnaround time by 24%, end-to-end training latency by 12%, prioritizing jobs and preventing out-of-memory issues.</p>
<div class="row">
<div class="col-12 col-sm-12 col-md-9 col-lg-8 mx-auto d-block">
{% include figure.html path="assets/img/publications/post_m-lora.png" title="post_m-LoRA" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Overview of m-LoRA.
</div>
</div>
</div>
<p><br></p>
</article>
