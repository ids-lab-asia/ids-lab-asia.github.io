---
layout: page
permalink: /gallery/
title: Gallery
description: Team photos and lab moments
nav: true
nav_order: 2
---

<div class="gallery-grid">
  {%- for photo in site.static_files -%}
    {%- if photo.path contains "/assets/img/gallery/" -%}
  <div class="gallery-item">
      <img src="{{ photo.path | relative_url }}" alt="{{ photo.name }}" class="img-fluid rounded z-depth-1 gallery-img" loading="lazy">
    </div>
    {%- endif -%}
  {%- endfor -%}
</div>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.gallery-item {
  overflow: hidden;
  border-radius: 0.5rem;
}
.gallery-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.gallery-img:hover {
  transform: scale(1.03);
}
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-img {
    height: 200px;
  }
}
@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
