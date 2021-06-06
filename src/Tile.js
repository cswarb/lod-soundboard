const playSound = (elem, sound) => {
    return () => {
        const audioElem = elem.current;

        audioElem.src = sound.source;
        audioElem.volume = 0.5;

        audioElem.addEventListener('canplaythrough', () => {
            audioElem.play();
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var lazyloadImages;

    if ('IntersectionObserver' in window) {
        lazyloadImages = document.querySelectorAll('.lazy');
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.classList.remove('lazy');
                    image.setAttribute('style', `background-image: ${image.getAttribute('data-image')}`);
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll('.lazy');

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.setAttribute('style', `background-image: ${img.getAttribute('data-image')}`);
                    }
                });
                if (lazyloadImages.length === 0) {
                    document.removeEventListener('scroll', lazyload);
                    window.removeEventListener('resize', lazyload);
                    window.removeEventListener('orientationChange', lazyload);
                }
            }, 20);
        }

        document.addEventListener('scroll', lazyload);
        window.addEventListener('resize', lazyload);
        window.addEventListener('orientationChange', lazyload);
    }
});

const Tile = (props) => {
    return <button key={ props.i }
        type="button"
        className="sound lazy"
        data-source={ props.sound.source }
        data-image={ "url(" + props.sound.image + ")" }
        onClick={ playSound(props.elem, props.sound) }>
        <span className="sound-text-container">
            <span className="sound-icon"></span>
            <span className="sound-text">{ props.sound.title }</span>
        </span>
    </button>
}

export default Tile;
