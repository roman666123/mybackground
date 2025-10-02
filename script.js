// Background slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Change image every 5 seconds

    // Function to show the next slide
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Start the slideshow
    setInterval(nextSlide, slideInterval);

    // Add sparkle effect on mouse move
    let sparkleTimeout;
    document.addEventListener('mousemove', function(e) {
        // Throttle sparkle creation
        if (sparkleTimeout) return;
        
        sparkleTimeout = setTimeout(() => {
            if (Math.random() > 0.7) { // Only create sparkles 30% of the time
                createSparkle(e.pageX, e.pageY);
            }
            sparkleTimeout = null;
        }, 100);
    });

    // Create sparkle element
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        document.body.appendChild(sparkle);

        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    });

    // Preload images for smoother transitions
    function preloadImages() {
        const imageUrls = [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80',
            'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1920&q=80',
            'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1920&q=80'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    preloadImages();

    // Add dynamic time-based greeting
    function updateGreeting() {
        const hour = new Date().getHours();
        const tagline = document.querySelector('.tagline');
        
        if (!tagline) return;
        
        let greeting = '✨ 欢迎来到我的个人空间 ✨';
        
        if (hour >= 5 && hour < 12) {
            greeting = '🌅 早安！欢迎来到我的个人空间 ✨';
        } else if (hour >= 12 && hour < 18) {
            greeting = '☀️ 午安！欢迎来到我的个人空间 ✨';
        } else if (hour >= 18 && hour < 22) {
            greeting = '🌆 晚上好！欢迎来到我的个人空间 ✨';
        } else {
            greeting = '🌙 夜深了，欢迎来到我的个人空间 ✨';
        }
        
        tagline.textContent = greeting;
    }

    updateGreeting();

    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const slides = document.querySelectorAll('.slide');
        
        slides.forEach(slide => {
            slide.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    });

    // Easter egg: Konami code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        // Create multiple sparkles
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createSparkle(x, y);
            }, i * 50);
        }
        
        // Show a message
        const message = document.createElement('div');
        message.textContent = '🎉 你发现了隐藏彩蛋！🎉';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.95);
            color: #333;
            padding: 2rem 3rem;
            border-radius: 20px;
            font-size: 2rem;
            font-weight: bold;
            z-index: 9999;
            animation: fadeInUp 0.5s ease-out;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.transition = 'opacity 1s ease-out';
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 1000);
        }, 3000);
    }

    console.log('%c欢迎来到我的个人主页！', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c如果你看到这条消息，说明你是一个好奇的开发者 👨‍💻', 'color: #764ba2; font-size: 14px;');
    console.log('%c试试输入 Konami Code (↑↑↓↓←→←→BA) 看看会发生什么... 😉', 'color: #f093fb; font-size: 12px;');
});
