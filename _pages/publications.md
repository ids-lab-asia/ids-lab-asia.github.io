---
layout: page
permalink: /publications/
title: Publications
description: 
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<div class="pub-filters" id="pub-filters">
  <div class="pub-filter-group">
    <span class="pub-filter-label">By Year</span>
    <div class="pub-filter-chips" data-filter-type="year"></div>
  </div>
  <div class="pub-filter-group">
    <span class="pub-filter-label">By Venue</span>
    <div class="pub-filter-chips" data-filter-type="venue"></div>
  </div>
</div>

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>

<script src="{{ '/assets/js/pub-filters.js' | relative_url }}"></script>
