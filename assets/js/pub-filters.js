// Publication filters (by year / by venue) + scroll reveal animation.
// Counts are tallied from the data-year / data-venue attributes emitted by _layouts/bib.html.
(function () {
  var container = document.getElementById('pub-filters');
  if (!container) return;

  // Years newer than this get their own chip; older ones are bucketed into one "≤ YEAR" chip.
  var EARLY_YEAR_CUTOFF = 2020;
  // Venues with fewer publications than this are hidden behind a "+N more" toggle.
  var VENUE_MIN_COUNT = 2;

  var entries = Array.prototype.slice.call(document.querySelectorAll('.publications .pub-entry'));
  var yearHeaders = Array.prototype.slice.call(document.querySelectorAll('.publications h2.bibliography'));

  // ---- Tally counts ----
  var yearCounts = {};
  var earlyCount = 0;
  var venueCounts = {};
  entries.forEach(function (el) {
    var y = Number(el.dataset.year);
    var v = el.dataset.venue;
    if (y) {
      if (y <= EARLY_YEAR_CUTOFF) earlyCount += 1;
      else yearCounts[y] = (yearCounts[y] || 0) + 1;
    }
    if (v) venueCounts[v] = (venueCounts[v] || 0) + 1;
  });

  var yearKeys = Object.keys(yearCounts).sort(function (a, b) { return Number(b) - Number(a); });
  // Venues: most publications first, ties alphabetical, "Other" always last.
  var venueKeys = Object.keys(venueCounts).sort(function (a, b) {
    if (a === 'Other') return 1;
    if (b === 'Other') return -1;
    var diff = venueCounts[b] - venueCounts[a];
    return diff !== 0 ? diff : a.localeCompare(b);
  });
  var majorVenues = venueKeys.filter(function (v) { return venueCounts[v] >= VENUE_MIN_COUNT; });
  var minorVenues = venueKeys.filter(function (v) { return venueCounts[v] < VENUE_MIN_COUNT; });

  // ---- Build chips ----
  function makeChip(label, count, type, value, extraClass) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pub-chip' + (extraClass ? ' ' + extraClass : '');
    btn.dataset.filterType = type;
    btn.dataset.filterValue = value;
    btn.appendChild(document.createTextNode(label));
    if (count != null) {
      var badge = document.createElement('span');
      badge.className = 'pub-chip-count';
      badge.textContent = count;
      btn.appendChild(badge);
    }
    return btn;
  }

  var yearGroup = container.querySelector('.pub-filter-chips[data-filter-type="year"]');
  var venueGroup = container.querySelector('.pub-filter-chips[data-filter-type="venue"]');

  yearGroup.appendChild(makeChip('All', entries.length, 'year', '__all__', 'active'));
  yearKeys.forEach(function (y) { yearGroup.appendChild(makeChip(y, yearCounts[y], 'year', y)); });
  if (earlyCount) yearGroup.appendChild(makeChip('≤ ' + EARLY_YEAR_CUTOFF, earlyCount, 'year', '__early__'));

  venueGroup.appendChild(makeChip('All', entries.length, 'venue', '__all__', 'active'));
  majorVenues.forEach(function (v) { venueGroup.appendChild(makeChip(v, venueCounts[v], 'venue', v)); });
  minorVenues.forEach(function (v) { venueGroup.appendChild(makeChip(v, venueCounts[v], 'venue', v, 'pub-chip-minor pub-hidden')); });
  if (minorVenues.length) {
    var moreChip = makeChip('+' + minorVenues.length + ' more', null, 'venue', '__more__', 'pub-chip-more');
    venueGroup.appendChild(moreChip);
  }

  // ---- Filtering ----
  function matches(el, type, value) {
    if (value === '__all__') return true;
    if (value === '__early__') return Number(el.dataset.year) <= EARLY_YEAR_CUTOFF;
    return el.dataset[type] === value;
  }

  function applyFilter(type, value) {
    entries.forEach(function (el) {
      el.classList.toggle('pub-hidden', !matches(el, type, value));
    });
    // Hide a year header when none of the entries in its list are visible.
    yearHeaders.forEach(function (h) {
      var list = h.nextElementSibling;
      var visible = list && list.querySelector('.pub-entry:not(.pub-hidden)');
      h.classList.toggle('pub-hidden', !visible);
    });
  }

  container.addEventListener('click', function (e) {
    var chip = e.target.closest('.pub-chip');
    if (!chip) return;

    if (chip.dataset.filterValue === '__more__') {
      var expanded = venueGroup.classList.toggle('expanded');
      Array.prototype.forEach.call(venueGroup.querySelectorAll('.pub-chip-minor'), function (c) {
        c.classList.toggle('pub-hidden', !expanded);
      });
      chip.textContent = expanded ? 'less' : '+' + minorVenues.length + ' more';
      return;
    }

    Array.prototype.forEach.call(container.querySelectorAll('.pub-chip'), function (c) { c.classList.remove('active'); });
    chip.classList.add('active');
    if (chip.dataset.filterValue === '__all__') {
      Array.prototype.forEach.call(container.querySelectorAll('.pub-chip[data-filter-value="__all__"]'), function (c) { c.classList.add('active'); });
    }
    applyFilter(chip.dataset.filterType, chip.dataset.filterValue);
  });

  // ---- Scroll reveal ----
  var revealTargets = [container].concat(yearHeaders, entries);
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (obs) {
      obs.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('revealed'); });
  }
})();
