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

<!-- <ol class="d-flex flex-wrap list-style-none gutter-condensed mb-2 js-pinned-items-reorder-list">
      <li class="mb-3 d-flex flex-content-stretch sortable-button-item pinned-item-list-item js-pinned-item-list-item col-12 col-md-6 col-lg-6 reorderable">
  <div class="Box d-flex p-3 width-full public source">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full position-relative">
        <div class="flex-1">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
          <span data-view-component="true" class="position-relative"><a data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:67818399,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:67818399,&quot;originating_url&quot;:&quot;https://github.com/Antlera&quot;}}" data-hydro-click-hmac="4ae8da26136ffe75a155da9b6dc3acb8ac52116001bfe419fb78e033d033ad14" id="506953078" href="/intelligent-machine-learning/dlrover" data-view-component="true" class="Link mr-1 text-bold wb-break-word" aria-labelledby="tooltip-21fa7ac1-f3b0-4537-8abf-ea7ce68f994e">
              <span class="owner text-normal">intelligent-machine-learning/</span><span class="repo">dlrover</span>
</a><tool-tip id="tooltip-21fa7ac1-f3b0-4537-8abf-ea7ce68f994e" for="506953078" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="position-absolute sr-only" aria-hidden="true" role="tooltip" style="--tool-tip-position-top: 504.5px; --tool-tip-position-left: 428.5546875px;">intelligent-machine-learning/dlrover</tool-tip></span>          <span></span><span class="Label Label--secondary v-align-middle mt-1 no-wrap v-align-baseline Label--inline">Public template</span>
        </div>
          <div>
            <input type="hidden" name="pinned_items_id_and_type[]" id="pinned-item-reorder-506953078" value="506953078-Repository" autocomplete="off" class="form-control">
            <span role="button" class="pinned-item-handle js-pinned-item-reorder" aria-label="Drag to reorder">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber">
    <path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
            </span>
            <button data-direction="up" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move dlrover up" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-up">
    <path d="M3.22 10.53a.749.749 0 0 1 0-1.06l4.25-4.25a.749.749 0 0 1 1.06 0l4.25 4.25a.749.749 0 1 1-1.06 1.06L8 6.811 4.28 10.53a.749.749 0 0 1-1.06 0Z"></path>
</svg></span>
  </span>
</button>
            <button data-direction="down" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move dlrover down" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg></span>
  </span>
</button>
          </div>
      </div>


      <p class="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
        DLRover: An Automatic Distributed Deep Learning System
      </p>

      <p class="mb-0 mt-2 f6 color-fg-muted">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>

          <a href="/intelligent-machine-learning/dlrover/stargazers" class="pinned-item-meta Link--muted">
            <svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
            890
          </a>
          <a href="/intelligent-machine-learning/dlrover/forks" class="pinned-item-meta Link--muted">
            <svg aria-label="forks" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
            108
          </a>
      </p>
    </div>
  </div>
</li>

      <li class="mb-3 d-flex flex-content-stretch sortable-button-item pinned-item-list-item js-pinned-item-list-item col-12 col-md-6 col-lg-6 reorderable">
  <div class="Box d-flex p-3 width-full public fork">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full position-relative">
        <div class="flex-1">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
          <span data-view-component="true" class="position-relative"><a data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:67818399,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:67818399,&quot;originating_url&quot;:&quot;https://github.com/Antlera&quot;}}" data-hydro-click-hmac="4ae8da26136ffe75a155da9b6dc3acb8ac52116001bfe419fb78e033d033ad14" id="701144815" href="/Antlera/multi-lora-fine-tune" data-view-component="true" class="Link mr-1 text-bold wb-break-word" aria-labelledby="tooltip-035911ed-ddfb-4696-a5d1-cefb67cbcf96">
<span class="repo">multi-lora-fine-tune</span>
</a><tool-tip id="tooltip-035911ed-ddfb-4696-a5d1-cefb67cbcf96" for="701144815" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="position-absolute sr-only" aria-hidden="true" role="tooltip" style="--tool-tip-position-top: 504.5px; --tool-tip-position-left: 841.25390625px;">multi-lora-fine-tune</tool-tip></span>          <span></span><span class="Label Label--secondary v-align-middle mt-1 no-wrap v-align-baseline Label--inline">Public</span>
        </div>
          <div>
            <input type="hidden" name="pinned_items_id_and_type[]" id="pinned-item-reorder-701144815" value="701144815-Repository" autocomplete="off" class="form-control">
            <span role="button" class="pinned-item-handle js-pinned-item-reorder" aria-label="Drag to reorder">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber">
    <path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
            </span>
            <button data-direction="up" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move multi-lora-fine-tune up" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-up">
    <path d="M3.22 10.53a.749.749 0 0 1 0-1.06l4.25-4.25a.749.749 0 0 1 1.06 0l4.25 4.25a.749.749 0 1 1-1.06 1.06L8 6.811 4.28 10.53a.749.749 0 0 1-1.06 0Z"></path>
</svg></span>
  </span>
</button>
            <button data-direction="down" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move multi-lora-fine-tune down" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg></span>
  </span>
</button>
          </div>
      </div>

        <p class="color-fg-muted text-small mt-2 mb-0">
          Forked from <a class="Link--muted Link--inTextBlock" href="/TUDB-Labs/multi-lora-fine-tune">TUDB-Labs/multi-lora-fine-tune</a>
        </p>

      <p class="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
        provide the auto and multiple lora run with the same base model 
      </p>

      <p class="mb-0 mt-2 f6 color-fg-muted">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>

      </p>
    </div>
  </div>
</li>

      <li class="mb-3 d-flex flex-content-stretch sortable-button-item pinned-item-list-item js-pinned-item-list-item col-12 col-md-6 col-lg-6 reorderable">
  <div class="Box d-flex p-3 width-full public source">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full position-relative">
        <div class="flex-1">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
          <span data-view-component="true" class="position-relative"><a data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:67818399,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:67818399,&quot;originating_url&quot;:&quot;https://github.com/Antlera&quot;}}" data-hydro-click-hmac="4ae8da26136ffe75a155da9b6dc3acb8ac52116001bfe419fb78e033d033ad14" id="651342232" href="/Antlera/easy-llm-finetuner" data-view-component="true" class="Link mr-1 text-bold wb-break-word" aria-labelledby="tooltip-c19c950a-bbc5-4bb0-b31e-54661ac25b11">
<span class="repo">easy-llm-finetuner</span>
</a><tool-tip id="tooltip-c19c950a-bbc5-4bb0-b31e-54661ac25b11" for="651342232" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip">easy-llm-finetuner</tool-tip></span>          <span></span><span class="Label Label--secondary v-align-middle mt-1 no-wrap v-align-baseline Label--inline">Public</span>
        </div>
          <div>
            <input type="hidden" name="pinned_items_id_and_type[]" id="pinned-item-reorder-651342232" value="651342232-Repository" autocomplete="off" class="form-control">
            <span role="button" class="pinned-item-handle js-pinned-item-reorder" aria-label="Drag to reorder">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber">
    <path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
            </span>
            <button data-direction="up" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move easy-llm-finetuner up" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-up">
    <path d="M3.22 10.53a.749.749 0 0 1 0-1.06l4.25-4.25a.749.749 0 0 1 1.06 0l4.25 4.25a.749.749 0 1 1-1.06 1.06L8 6.811 4.28 10.53a.749.749 0 0 1-1.06 0Z"></path>
</svg></span>
  </span>
</button>
            <button data-direction="down" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move easy-llm-finetuner down" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg></span>
  </span>
</button>
          </div>
      </div>


      <p class="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
        Easy Environment Configuration for LLM Model Finetuning
      </p>

      <p class="mb-0 mt-2 f6 color-fg-muted">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>

          <a href="/Antlera/easy-llm-finetuner/stargazers" class="pinned-item-meta Link--muted">
            <svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
            4
          </a>
          <a href="/Antlera/easy-llm-finetuner/forks" class="pinned-item-meta Link--muted">
            <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

      <li class="mb-3 d-flex flex-content-stretch sortable-button-item pinned-item-list-item js-pinned-item-list-item col-12 col-md-6 col-lg-6 reorderable">
  <div class="Box d-flex p-3 width-full public source">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full position-relative">
        <div class="flex-1">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
          <span data-view-component="true" class="position-relative"><a data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:67818399,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:67818399,&quot;originating_url&quot;:&quot;https://github.com/Antlera&quot;}}" data-hydro-click-hmac="4ae8da26136ffe75a155da9b6dc3acb8ac52116001bfe419fb78e033d033ad14" id="729868687" href="/Antlera/nanoGPT-moe" data-view-component="true" class="Link mr-1 text-bold wb-break-word" aria-labelledby="tooltip-b54a4559-4918-4a94-bd87-e8f2c78cf6f2">
<span class="repo">nanoGPT-moe</span>
</a><tool-tip id="tooltip-b54a4559-4918-4a94-bd87-e8f2c78cf6f2" for="729868687" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip">nanoGPT-moe</tool-tip></span>          <span></span><span class="Label Label--secondary v-align-middle mt-1 no-wrap v-align-baseline Label--inline">Public</span>
        </div>
          <div>
            <input type="hidden" name="pinned_items_id_and_type[]" id="pinned-item-reorder-729868687" value="729868687-Repository" autocomplete="off" class="form-control">
            <span role="button" class="pinned-item-handle js-pinned-item-reorder" aria-label="Drag to reorder">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber">
    <path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
            </span>
            <button data-direction="up" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move nanoGPT-moe up" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-up">
    <path d="M3.22 10.53a.749.749 0 0 1 0-1.06l4.25-4.25a.749.749 0 0 1 1.06 0l4.25 4.25a.749.749 0 1 1-1.06 1.06L8 6.811 4.28 10.53a.749.749 0 0 1-1.06 0Z"></path>
</svg></span>
  </span>
</button>
            <button data-direction="down" type="button" data-view-component="true" class="show-on-focus sortable-button js-sortable-button Button--secondary Button--small Button right-0">  <span class="Button-content">
    <span class="Button-label"><svg aria-label="Move nanoGPT-moe down" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg></span>
  </span>
</button>
          </div>
      </div>


      <p class="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
        Enable moe for nanogpt.
      </p>

      <p class="mb-0 mt-2 f6 color-fg-muted">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>

          <a href="/Antlera/nanoGPT-moe/stargazers" class="pinned-item-meta Link--muted">
            <svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
            4
          </a>
          <a href="/Antlera/nanoGPT-moe/forks" class="pinned-item-meta Link--muted">
            <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

</ol>


<!-- ## GitHub users

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
  {% if site.data.repositories.github_users.size > 1 %}
  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.html username=user %}
  </div>

  ---

{% endfor %}
{% endif %}
{% endif %} --> -->
