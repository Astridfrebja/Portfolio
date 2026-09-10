document.addEventListener('DOMContentLoaded', function () {

    console.log('page loaded');

    document.documentElement.style.scrollBehavior = 'smooth';

    // Spill av video kun når den er synlig i viewporten, pause ellers.
    // Dette sparer båndbredde/batteri når man har mange videoer på én side.
    const videos = document.querySelectorAll('.project-image');

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target;

            if (entry.isIntersecting) {
                video.play().catch(() => {
                    // Nettleseren kan blokkere autoplay i enkelte tilfeller, ignorer stille
                });
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // video spilles av når minst 50% er synlig
    });

    videos.forEach((video) => videoObserver.observe(video));

    document.querySelectorAll('.project-images').forEach(project => {

        const video = project.querySelector('video');

        if (video) {
            video.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }

        project.addEventListener('click', (event) => {
            if (event.target.tagName === 'VIDEO') return;

            const link = project.dataset.link;
            if (link) {
                window.open(link, '_blank', 'noopener');
            }
        });

    });

});