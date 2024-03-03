function navigationObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active'); 
          if (link.getAttribute('href') === '#' + entry.target.id && entry.isIntersecting) {
            link.classList.add('active'); 
          }
        });
      });
    }, { threshold: 0.7 }); 

    // document.querySelectorAll('section').forEach(section => {
    //   observer.observe(section);
    // });
    document.querySelectorAll('div[id]').forEach(div => {
        observer.observe(div);
    });
    
  }

export { navigationObserver };