// Shared client-side behaviors for KGRCET site

// Highlight active nav link based on current pathname
(function highlightActiveNav() {
  try {
    var path = (location.pathname || location.href || '').toLowerCase();
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function (a) {
      var href = (a.getAttribute('href') || '').toLowerCase();
      if (!href || href === '#') return;
      // Check if current page matches the link
      var currentFile = path.split('/').pop() || 'index.html';
      var isActive = currentFile === href || 
                     (href === 'index.html' && (currentFile === '' || currentFile === 'index.html' || path.endsWith('/')));
      if (isActive) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  } catch (e) {
    console.warn('Nav highlighting error:', e);
  }
})();

// Prevent # links from scrolling
(function preventHashScroll() {
  document.addEventListener('click', function(e) {
    var target = e.target.closest('a[href="#"]');
    if (target) {
      e.preventDefault();
      // You can add modal or expand functionality here later
    }
  });
})();

// Utility to generate a simple unique id
window.generateId = function(prefix) {
  var p = prefix || 'id';
  return [p, Date.now(), Math.random().toString(36).slice(2, 8)].join('_');
};

// Lazy: expose a simple pub/sub for cross-file events if needed later
window.bus = (function() {
  var events = {};
  return {
    on: function (name, cb) { (events[name] = events[name] || []).push(cb); },
    emit: function (name, data) { (events[name] || []).forEach(function(cb){ cb(data); }); }
  };
})();



