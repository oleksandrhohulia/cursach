function myFunction() {
    let links = document.getElementById("links");
    let closednav = document.getElementById("closednav");

    if (links.style.display === "block") {
        links.style.display = "none";
        closednav.style.display = "flex";
    }
    else {
        links.style.display = "block";
        closednav.style.display = "none";
    }
}

document.body.addEventListener("click", function(event) {
    if (!event.target.closest("#links") && !event.target.closest(".card-menu")) {
        let links = document.getElementById("links");
        let closednav = document.getElementById("closednav");
        
        links.style.display = "none";
        closednav.style.display = "flex";
    }
});

//


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.1]
  };
  
  let observer = new IntersectionObserver(onEntry, options);
  
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  
//
const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
 
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
        }
      });
    });

    //

    var prevScrollpos = window.pageYOffset;

   
    var headerDiv = document.querySelector("header");
    var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
    
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
    
      
      if (prevScrollpos <= currentScrollPos ){
          headerDiv.classList.remove("fixedToTop");
          headerDiv.style.top ="-4rem";
      }
      
      else{  
          headerDiv.classList.add("fixedToTop");
          headerDiv.style.top = "0";
      }
    
      prevScrollpos = currentScrollPos;
    }

    //

    