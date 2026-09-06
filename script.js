document.addEventListener('DOMContentLoaded', function() {

    console.log('page loaded');

    document.documentElement.style.scrollBehavior = 'smooth';

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

            window.open(project.dataset.link, '_blank', 'noopener');
        });

    });

});