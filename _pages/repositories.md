---
layout: page
permalink: /repositories/
title: repositories
description: We are committed to <b>open science</b>. We make our research and its dissemination, including publications, datasets, and software artifacts, accessible to support use and development both in academia and industry.
nav: false
nav_order: 3
---

## GitHub Repositories

{% if site.data.repositories.github_repos %}
<div class="d-flex flex-wrap list-style-none gutter-condensed mb-2 js-pinned-items-reorder-list">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}