$(document).hover('.collapsible-panel .header', function() {
  $(this).closest('.collapsible-panel').show('collapsible-panel-extended');
});

$(document).ready(function() {
    $('.interactive-tooltip').tooltipster({
      theme: 'tooltipster-light',
      trigger: 'hover',
      contentAsHTML: true,
      maxWidth: 250,
    });
});
