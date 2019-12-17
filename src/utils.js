
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

export default utils;