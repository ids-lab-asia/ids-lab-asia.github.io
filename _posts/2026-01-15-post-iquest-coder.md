---
layout: post
title: "IQuest-Coder-V1: Tiny Core, Titan Power for Code Intelligence"
date: 2026-01-15 10:00:00-0400
description: A technical overview of IQuest-Coder-V1, a family of code-specialized language models from 7B to 40B parameters.
tags: AI SYSTEM
categories: tech-report
related_posts: false
related_publications: iQuestCoder26
---

<article>
<div class="title"><strong>IQuest-Coder-V1 Technical Report</strong></div>
<div class="author">
IQuest Coder Team
</div>

<p><br></p>

<h4 id="overview">Overview</h4>
<p>
IQuest-Coder-V1 is a family of code-specialized large language models developed with the philosophy of <strong>"Tiny Core, Titan Power."</strong> The model family ranges from 7B to 40B parameters and achieves state-of-the-art performance on a wide range of coding benchmarks, including agentic software engineering and competitive programming tasks.
</p>

<h4 id="model-variants">Model Variants</h4>
<p>
The IQuest-Coder-V1 family includes multiple variants tailored for different use cases:
</p>
<ul>
<li><strong>Base models</strong> (7B / 14B / 40B): Pre-trained foundation models for code understanding and generation.</li>
<li><strong>Instruct models</strong>: Instruction-tuned variants optimized for general coding assistance and efficient instruction-following.</li>
<li><strong>Thinking models</strong>: Reasoning-enhanced variants that leverage reinforcement learning to produce explicit reasoning traces for complex problem-solving.</li>
<li><strong>Loop-Instruct models</strong>: Recurrent transformer variants with shared parameters across iterations, enabling significantly more efficient deployment.</li>
</ul>

<h4 id="architecture">Architecture</h4>
<p>
The model architecture is built on several key design choices:
</p>
<ul>
<li><strong>Grouped Query Attention (GQA)</strong>: 40 query heads with 8 key-value heads for efficient inference.</li>
<li><strong>Native 128K context window</strong>: Full long-context support without additional scaling techniques.</li>
<li><strong>Vocabulary size</strong>: 76,800 tokens with a hidden dimension of 5,120.</li>
<li><strong>Layer configurations</strong>: 14 layers (7B), 28 layers (14B), and 80 layers (40B).</li>
</ul>
<p>
The Loop variants introduce a recurrent transformer design with shared parameters across two iterations, which reduces memory footprint while maintaining competitive performance.
</p>

<h4 id="training">Code-Flow Multi-Stage Training</h4>
<p>
A distinctive aspect of IQuest-Coder-V1 is its <strong>code-flow multi-stage training paradigm</strong>. Unlike traditional approaches that treat code as static text, this method captures repository evolution patterns, commit transitions, and dynamic code transformations. By learning from real-world development workflows, the model develops a deeper understanding of how code evolves over time, leading to more practical and context-aware code generation.
</p>

<h4 id="benchmarks">Performance</h4>
<p>
IQuest-Coder-V1 achieves strong results across diverse coding benchmarks:
</p>
<ul>
<li><strong>SWE-Bench Verified</strong>: 76.2% — demonstrating strong agentic software engineering capability.</li>
<li><strong>LiveCodeBench v6</strong>: 81.1% — competitive programming performance.</li>
<li><strong>BigCodeBench</strong>: 49.9% — practical coding task evaluation.</li>
</ul>
<p>
Additional evaluations span Evalplus-HumanEval, Evalplus-MBPP, FullStackBench, CruxEval, Aider-Polyglot, Mercury, Bird, Spider, Terminal-Bench, Mind2Web, and BFCL V3, covering code generation, program repair, full-stack development, database queries, and tool-use scenarios.
</p>

<h4 id="dual-specialization">Dual Specialization</h4>
<p>
The model family offers two complementary specialization paths:
</p>
<ul>
<li><strong>Thinking models</strong> prioritize reasoning depth with explicit chain-of-thought traces, ideal for complex algorithmic and debugging tasks.</li>
<li><strong>Instruct models</strong> prioritize efficiency and directness, suitable for everyday coding assistance and rapid prototyping.</li>
</ul>
<p>
This dual approach allows users to choose the right trade-off between reasoning thoroughness and response speed depending on the task at hand.
</p>

<h4 id="deployment">Deployment</h4>
<p>
IQuest-Coder-V1 is production-ready with vLLM integration for OpenAI-compatible API deployment. The 40B models are recommended to run with tensor parallelism (e.g., <code>--tensor-parallel-size 8</code>). Recommended sampling parameters for instruct models are Temperature=0.6, TopP=0.85, and TopK=20.
</p>

<h4 id="resources">Resources</h4>
<ul>
<li>Project page: <a href="https://iquestlab.github.io/">https://iquestlab.github.io/</a></li>
<li>Code and technical report: <a href="https://github.com/IQuestLab/IQuest-Coder-V1">https://github.com/IQuestLab/IQuest-Coder-V1</a></li>
<li>Models on Hugging Face: <a href="https://huggingface.co/collections/IQuestLab/iquest-coder">https://huggingface.co/collections/IQuestLab/iquest-coder</a></li>
</ul>

<p><br></p>
</article>
