const utils = {};

utils.scroll = {
    addToAll() {
        Array.prototype.forEach.call(document.querySelectorAll('.scrollable'),
            el => new SimpleBar(el, this.defConfig)
        );
    },
    add(el) {
        new SimpleBar(el, this.defConfig);
    },
};

utils.scroll.defConfig = {
    classNames: {
        'scrollbar': 'scrollable-class'
    }
};

window.addEventListener('DOMContentLoaded', () => {
    utils.scroll.addToAll();
});
