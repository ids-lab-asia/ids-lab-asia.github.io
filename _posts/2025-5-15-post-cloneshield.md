---
layout: post
title: "CloneShield: A Framework for Universal Perturbation Against Zero-Shot Voice Cloning"
date: 2025-05-15 10:00:00-0400
description:
tags: AI SECURITY
categories: tech-report
related_posts: false
related_publications: CloneShield25
---

<article>
<div class="title"><strong>CloneShield: A Framework for Universal Perturbation Against Zero-Shot Voice Cloning</strong></div>
<div class="author">
Renyuan Li, Zhibo Liang, Haichuan Zhang, Tianyu Shi, Zhiyuan Cheng, Jia Shi, Carl Yang, Mingjie Tang
</div>

<p><br></p>
<h4 id="abstract">Abstract</h4>
<p>
Recent breakthroughs in text-to-speech (TTS) voice cloning have raised serious privacy concerns, allowing highly accurate vocal identity replication from just a few seconds of reference audio, while retaining the speaker’s vocal authenticity. In this paper, we introduce \textbf{CloneShield}, a universal time-domain adversarial perturbation framework specifically designed to defend against zero-shot voice cloning. Our method provides protection that is robust across speakers and utterances, without requiring any prior knowledge of the synthesized text. We formulate perturbation generation as a multi-objective optimization problem, and propose Multi-Gradient Descent Algorithm (MGDA) to ensure the robust protection across diverse utterances. To preserve natural auditory perception for users, we decompose the adversarial perturbation via Mel-spectrogram representations and fine-tune it for each sample. This design ensures imperceptibility while maintaining strong degradation effects on zero-shot cloned outputs. Experiments on three state-of-the-art zero-shot TTS systems, five benchmark datasets and evaluations from 60 human listeners demonstrate that our method preserves near-original audio quality in protected inputs (PESQ = 3.90, SRS = 0.93) while substantially degrading both speaker similarity and speech quality in cloned samples (PESQ = 1.07, SRS = 0.08).
</p>
<p><br></p>
</article>
