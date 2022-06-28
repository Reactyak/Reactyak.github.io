document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.btn');
    let heart = document.querySelector('.heart');
    let containerImg = document.querySelector('.img');
    let arrClass = ['ease-in', 'ease-in2', 'ease-out2', 'ease-out', 'ease-in-out2', 'ease-in-out'];
    let arrImg = [];

    btn.addEventListener('click', () => {
        clone();
        rand(arrClass);
        up();
    });

    function clone() {
        for (let i = 0; i < 20; i++) {
            let clone = heart.cloneNode(true);
            containerImg.appendChild(clone);
            arrImg.push(clone);
        }
    }

    function up() {
        let counter = arrImg.length;

        arrImg.map(element => {

            const animation = element.animate([
                {
                    transform: 'translateY(0)'
                },
                {
                    transform: `translateY(-${document.body.offsetHeight + element.offsetHeight}px)`
                }
            ], {
                duration: Math.floor(Math.round(Math.random() * 10000)),
                easing: 'ease-in-out',
                fill: 'forwards'
            });

            animation.addEventListener('finish', () => {
                counter--;
                if (counter === 0) {
                    clear(arrImg);
                }
            });
        })
    }

    function rand(cl) {
        arrImg.forEach(element => {
            let index = Math.floor(Math.random() * arrClass.length);
            element.classList.add(cl[index]);
        })
    }

    /**
     * @param {Array<HTMLElement>} list
     */
    function clear(list) {
        list.forEach(el => el.remove());
    }
});
