
const utils = {
    addScrollToAll() {
        Array.prototype.forEach.call(document.querySelectorAll('.scrollable'),
            el => new SimpleBar(el), console.log('jel')
        );
    },
    addScroll(el) {
        new SimpleBar(el);
    }
};

// TODO обработчик анимации рамки
/*
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        [
            document.querySelector('.pie-cont__spinner'),
            document.querySelector('.pie-cont__filler'),
            document.querySelector('.pie-cont__mask'),
        ].forEach(el => {
            const animationProp = getComputedStyle(el).animation;

            el.style.animation = 'none';
            void el.offsetWidth;
            el.style.animation = animationProp;

            // getComputedStyle(el).animation;
            // el.style.animation = '';

        });

        // document.documentElement.style.setProperty('--game-state', 'paused');


        // document.documentElement.style.setProperty('--game-state', 'running');
    })

*/

export default utils;