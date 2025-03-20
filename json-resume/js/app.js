// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  function handleScreenSizeChange() {
    const element = document.getElementById('top');
    if (!element) return; // Prevent errors if the element is missing
    if (window.innerWidth >= 992) { // Screen width 768px or larger
      element.classList.remove('container'); // Remove the 'container' class
    } else { // Screen width smaller than 768px
      element.classList.add('container'); // Add the 'container' class
    }
  }
  
  // Run the function on page load and when the window is resized
  handleScreenSizeChange();
  window.addEventListener('resize', handleScreenSizeChange);