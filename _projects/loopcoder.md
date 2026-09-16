---
layout: page
title: LoopCoder
description: Scaling Code Intelligence via Looped Language Models
img: assets/img/projects/loopcoder/overview.jpg
importance: 4
category: Research
---
## Project Background

While large language models (LLMs) have mastered syntax-level code generation, complex algorithmic reasoning remains a challenge. The conventional remedy is to scale model depth and parameter count, which makes both training and inference increasingly expensive.

**Looped (recurrent) transformers**, in the spirit of Universal Transformers, offer a compelling alternative: instead of stacking more distinct layers, a shared block of layers is applied repeatedly. This recurrent inductive bias aligns naturally with the recursive nature of programming logic, and lets a model spend more computation per token *without* adding parameters. However, training looped architectures at scale has historically been hindered by severe instability and the optimization difficulties of backpropagation through time (BPTT), so prior work restricted recurrence to small-scale tasks.

## LoopCoder: The First Large-Scale Looped Transformer for Code

**LoopCoder** (40B-A80B) is pre-trained on 12T+ code and general tokens, together with the **LoopCoder-Thinking** and **LoopCoder-Instruct** variants. It is the first large-scale looped transformer for code, achieving performance comparable to standard dense architectures with more parameters. The recipe spans the whole training pipeline:

1. 📌 **Dense-to-loop transformation**: rather than training a recurrent model from scratch, we *fold* a pre-trained dense checkpoint to initialize a shared recurrent block. Dense checkpoints turn out to be an ideal foundation for evolving into looped reasoners.
2. 📌 **Looped pre-training**: the folded model is then pre-trained at scale with the recurrent block unrolled, using a training protocol designed to keep BPTT stable.
3. 📌 **Looped post-training**: specialized post-training yields the Instruct variant for instruction following and the Thinking variant for long-horizon reasoning.

The released LoopCoder models are available as <a href="https://huggingface.co/IQuestLab/IQuest-Coder-V1-40B-Loop-Instruct">IQuest-Coder-V1-40B-Loop-Instruct</a> and <a href="https://huggingface.co/IQuestLab/IQuest-Coder-V1-40B-Loop-Thinking">IQuest-Coder-V1-40B-Loop-Thinking</a>.

## LoopCoder-v2: Only Loop Once

<img src="/assets/img/projects/loopcoder/overview.jpg" alt="LoopCoder-v2 overview" width="800">

A natural follow-up question is *how many loops are actually worth it*. **LoopCoder-v2** is a 7B model built on the **Parallel Loop Transformer (PLT)**, trained from scratch on 18T tokens of mixed text and code across 100+ programming languages. Two mechanisms make looping cheap at inference time:

- **CLP (Cross-Loop Position offsets)** break the sequential dependency between loops so they can run in parallel.
- **G-SWA (Gated Sliding-Window Attention)** shares the loop-1 global KV cache across loops, keeping inference time and KV memory roughly constant with respect to the loop count.

<img src="/assets/img/projects/loopcoder/gain_cost_curve.png" alt="Gain-cost trade-off across loops" width="600">

The key finding is a **gain–cost trade-off**: each additional loop brings a refinement gain but also a roughly constant offset cost from CLP. The second loop delivers the largest productive refinement (hidden states converge coherently, attention re-routes, representational diversity peaks), while a third loop and beyond become redundant or even harmful. In other words, *only loop once* (run two loops in total).

| Benchmark | No loop (R=1) | LoopCoder-v2 (R=2) |
|---|---|---|
| SWE-bench Verified | 43.0 | **64.4** |
| Multi-SWE | 14.0 | **31.0** |
| Terminal-Bench | 11.2 | **21.1** |
| BFCL | 32.2 | **40.1** |

With a single extra loop, the 7B model surpasses Qwen3-235B (45.2) on SWE-bench Verified and approaches much larger open flagships such as Qwen3-Coder-480B (67.0) and Kimi-K2 (69.2).

## Publications

- Jian Yang, Wei Zhang, Shuyue Guo, Yizhi Li, Linzheng Chai, Zhengmao Ye, Shukai Liu, Yuyang Song, Jiajun Wu, Che Liu, Tianyu Zheng, Siwei Wu, Leo L, Xudong Ma, Chuan Hao, Ran Tao, Yan Xing, Jianzhou Wang, Mingjie Tang, Aishan Liu, Zhoujun Li, Xianglong Liu, Weifeng Lv, and Bryan Dai. *LoopCoder: Scaling Code Intelligence via Looped Language Models*. Findings of ACL 2026. <a href="https://aclanthology.org/2026.findings-acl.796/">[Paper]</a>
- Jian Yang et al. *LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling*. arXiv:2606.18023, 2026. <a href="https://arxiv.org/abs/2606.18023">[Paper]</a>

## Come and Learn More!

Code: <a href="https://github.com/CSJianYang/LoopCoder">[LoopCoder]</a> · Models: <a href="https://huggingface.co/Multilingual-Multimodal-NLP/LoopCoder-V2">[LoopCoder-V2 on Hugging Face]</a> · <a href="https://github.com/IQuestLab/IQuest-Coder-V1">[IQuest-Coder-V1]</a>
