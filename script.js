document.addEventListener('DOMContentLoaded', function() {

    console.log('page loaded');

    document.documentElement.style.scrollBehavior = 'smooth';

    document.querySelectorAll('.project-images').forEach(project => {
        project.addEventListener('click', () => {
            window.open(project.dataset.link, '_blank', 'noopener')
        });
    });

});