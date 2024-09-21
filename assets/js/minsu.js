$(function() {
  // Mobile navbar
  $(".minsu.nav-toggle-btn").click(function() {
    $(".minsu.mobile-nav-wrapper").slideDown();
  });

  $(".minsu.mobile-nav-item").click(function() {
    $(".minsu.mobile-nav-wrapper").slideUp();
});
  // Dynamic navbar background(except main)
  $(window).scroll(function() {
    if ($(".minsu.navbar-parent").hasClass("main")) return;
    if ($(this).scrollTop() > 10) {
      $(".minsu.navbar-parent").addClass("navbar-bg");
    } else {
      $(".minsu.navbar-parent").removeClass("navbar-bg");
    }
  });
  
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Auto-append '_blank' attribute to external link
  // https://stackoverflow.com/questions/12041935/how-to-automatically-add-target-blank-to-external-links-only
  $.expr[":"].external = function(obj) {
    return !obj.href.match(/^mailto\:/) && obj.hostname != location.hostname && !obj.href.match(/^javascript\:/) && !obj.href.match(/^$/);
  };
  $("a:external").attr("target", "_blank");

  // Clipboard
  var clipboard = new ClipboardJS(".minsu.share-item.copy");

  clipboard.on("success", function() {
    alert("클립보드에 복사되었습니다.");
  });

  clipboard.on("error", function(e) {
    console.log(e);
  });

  // Auto-add responsive Youtube iframe
  $(".minsu.youtube").each(function() {
    return $(this).append('<iframe src="https://www.youtube.com/embed/' + this.id + '" frameborder="0" allowfullscreen></iframe>');
  });
});



