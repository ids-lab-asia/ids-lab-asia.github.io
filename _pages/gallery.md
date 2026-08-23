---
layout: page
permalink: /gallery/
title: Gallery
description: Team photos and lab moments
nav: true
nav_order: 2
---

<div class="gallery">
  <div class="gallery__grid">
    {%- for photo in site.static_files -%}
      {%- if photo.path contains "/assets/img/gallery/" -%}
    <div class="gallery__item">
        <img src="{{ photo.path | relative_url }}" alt="{{ photo.name }}" loading="lazy">
    </div>
      {%- endif -%}
    {%- endfor -%}
  </div>
</div>
