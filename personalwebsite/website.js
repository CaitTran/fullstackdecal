    // define sections and navigation constants
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    function showSection(target) {
      navBtns.forEach(b => b.classList.remove('active'));
      document.querySelector(`[data-target="${target}"]`).classList.add('active');
      sections.forEach(section => {
        if (section.id === target) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
      document.getElementById(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        showSection(btn.dataset.target);
      });
    });
    
    // -- slideshow --
    const slides = [
      {
        img: "/Users/caitlintran/Desktop/full-stack-decal/personalwebsite/BE1C0E51-6FAC-4379-B516-A2BB01488BD5_1_102_o.jpeg",
        title: "That's Me!",
        text: "Hi! I'm Caitlin Tran, a 19-year-old student studying Astrophysics and Data Science at UC Berkeley!"
      },
      {
        img: "/Users/caitlintran/Desktop/full-stack-decal/personalwebsite/01B8DD92-548E-4283-A98D-A67C4FA60BED_1_105_c.jpeg",
        title: "My pet rabbit, Citron/Sichuan!",
        text: "I adopted her from the Friends of Alameda animal shelter in September of 2025 hehe"
      },
      {
        img: "/Users/caitlintran/Desktop/full-stack-decal/personalwebsite/3043B161-8773-4324-8A8B-7176DEAFE065_1_102_o.jpeg",
        title: "Matcha every single day",
        text: "Where the bulk of my money goes..."
      }
    ];

    let currentIndex = 0;

    const slideImg    = document.getElementById('slide-img');
    const slideTitle  = document.getElementById('slide-title');
    const slideText   = document.getElementById('slide-text');
    const slideCurrent = document.getElementById('slide-current');
    const slideTotal  = document.getElementById('slide-total');
    const dotsContainer = document.getElementById('slide-dots');

    // build dots for slideshow
    slideTotal.textContent = slides.length;
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    function updateDots() {
      document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function goToSlide(index) {
    // random rotation between -8 and 8 degrees (for the photo thingies)
    const rotation = (Math.random() * 16 - 8).toFixed(1);
    document.querySelector('.slide-img-wrap').style.transform = `rotate(${rotation}deg)`;

    // fade out current content
    slideImg.classList.add('fade-out');

      setTimeout(() => {
        currentIndex = index;
        const s = slides[currentIndex];

        slideImg.src        = s.img;
        slideImg.alt        = s.title;
        slideTitle.textContent = s.title;
        slideText.textContent  = s.text;
        slideCurrent.textContent = currentIndex + 1;

        // fade back in
        slideImg.classList.remove('fade-out');
        slideTitle.classList.remove('fade-out');
        slideText.classList.remove('fade-out');

        updateDots();
      }, 300);
    }

    function changeSlide(direction) {
      let next = currentIndex + direction;
      if (next >= slides.length) next = 0;
      if (next < 0) next = slides.length - 1;
      goToSlide(next);
    }

    document.getElementById('slide-next').addEventListener('click', () => changeSlide(+1));

    // -- FORM --
    document.getElementById('submit-btn').addEventListener('click', () => {
      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in your name, email, and message before sending.');
        return;
      }

      document.getElementById('form-success').style.display = 'block';
      document.getElementById('name').value    = '';
      document.getElementById('email').value   = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    });

