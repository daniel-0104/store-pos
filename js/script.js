//...................................nav bar offcanva start .............................................
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.btn-toggle');
    const offcanvas = document.querySelector('#nav');
    const closeButton = document.querySelector('.close-btn');

    if (toggleButton && offcanvas && closeButton) {
        toggleButton.addEventListener('click', function (e) {
            e.stopPropagation();
            offcanvas.classList.toggle('active');

            if (offcanvas.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = ''; 
            }
        });

        closeButton.addEventListener('click', function () {
            offcanvas.classList.remove('active');
            document.body.style.overflow = ''; 
        });

        document.addEventListener('click', function (e) {
            if (offcanvas.classList.contains('active') && !offcanvas.contains(e.target) && !toggleButton.contains(e.target)) {
                offcanvas.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    else{
        console.error('Offcanvas elements not found');
    }
});
//...................................nav bar offcanva end................................................

//...................................nav bar link bg start................................................
document.addEventListener('DOMContentLoaded', function () {
    const currentHTMLPage = window.location.href;
    const mainLinks = document.querySelectorAll('.nav-content');
    const subLinks = document.querySelectorAll('.nav-link');
    const navBar = document.querySelector('.nav');
  
    function activateMainLink(mainLink){
      mainLink.classList.add('active');
      const parentUl = mainLink.getAttribute('data-bs-target');
      const collapseElement = document.querySelector(parentUl);
      if (collapseElement){
        collapseElement.classList.add('show');
      }
    }
  
    subLinks.forEach(subLink => {
      if (currentHTMLPage.includes(subLink.getAttribute('href'))) {
        subLink.classList.add('active');
        const mainLink = subLink.closest('ul').previousElementSibling;
        if (mainLink && mainLink.classList.contains('nav-content')){
          activateMainLink(mainLink);
        }
      }
    });
  
    mainLinks.forEach(link => link.classList.remove('active'));
  
    mainLinks.forEach(link => {
      if (currentHTMLPage.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });
  
    const savedScrollPosition = sessionStorage.getItem('navbar-scroll-position');
    if (savedScrollPosition !== null) {
      navBar.scrollTop = parseInt(savedScrollPosition, 10);
    }
  
    document.querySelectorAll('#nav a').forEach(link => {
      link.addEventListener('click', function () {
        sessionStorage.setItem('navbar-scroll-position', navBar.scrollTop);
      });
    });
  });
//...................................nav bar link bg end................................................

  