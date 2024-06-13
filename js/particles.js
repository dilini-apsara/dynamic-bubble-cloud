import {cursorElm} from './cursor-buble.js';

console.log(cursorElm);
for (let i = 0; i < 50; i++) {

    const particle = document
        .createElement('div');

    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    particle.style.backgroundColor = `rgb(${r},${g},${b})`;
    particle.style.position = 'absolute';

    const size = 20 + Math.random() * 30;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const left = (innerWidth - size) * Math.random();
    const top = (innerHeight - size) * Math.random();
    particle.style.left = `${left}px`;
    particle.style.top = `${top}px`;
    particle.style.borderRadius = `${Math.random() * 100}%`;
    particle.style.transform = `rotate(${Math.random() * 360}deg)`

    document.body.append(particle);

    let dx = 8 + Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);
    let dy = 8 + Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);


    setInterval(() => {
        //=============================
        /*
        let r1 = cursorElm.offsetWidth / 2;
        let r2 = particle.offsetWidth / 2;

        const x1 = cursorElm.offsetLeft + r1;
        const y1 = cursorElm.offsetTop + r1;

        const x2 = particle.offsetLeft + r2;
        const y2 = particle.offsetTop + r2;

        let xdiff = x1 - x2;
        let ydiff = y1 - y2;
        let d = r1 + r2;

        let distance = Math.abs(Math.sqrt(xdiff ** 2 + ydiff ** 2));


        if (distance <= r1 && x1 > x2 && y1 > y2) {
            particle.style.left = `${x2 - r1 - 10}px`;
            particle.style.top = `${y2 - r1 - 10}px`;
            dy = -dy;
        } else if (distance <= r1 && x2 > x1 && y1 > y2) {
            particle.style.left = `${x2 + r1 + 10}px`;
            particle.style.top = `${y2 - r1 - 10}px`;

            dy=-dy;
        } else if (distance <= r1 && x2 > x1 && y2 > y1) {
            particle.style.left = `${x2 + r1 + 10}px`;
            particle.style.top = `${y2 + r1 + 10}px`;

        } else if (distance <= r1 && x1 > x2 && y2 > y1) {
            particle.style.left = `${x2 + r1 + 10}px`;
            particle.style.top = `${y2 + r1 + 10}px`;
            dx=-dx;
            dy=-dy;
        }

        // if (distance <= r1 ) {
        //         particle.style.left = `${x1 + 2*r1 + 10}px`;
        //         particle.style.top = `${y1 + 2*r1 + 10}px`;
        //     }

        if (distance <= d) {
            dx = -dx;
            dy = -dy;
        }


         */


        let flag = false;
        let r1, r2, d;
        let left, top;

        do {
            left = particle.offsetLeft + dx;
            top = particle.offsetTop + dy;

            if (cursorElm.classList.contains('hide')) break;

            const x1 = cursorElm.offsetLeft + cursorElm.offsetWidth / 2;
            const y1 = cursorElm.offsetTop + cursorElm.offsetHeight / 2;

            const x2 = left + particle.offsetWidth / 2;
            const y2 = top + particle.offsetHeight / 2;

            const yDiff = y2 - y1;
            const xDiff = x2 - x1;

            d = Math.abs(Math.hypot(yDiff, xDiff));
            r1 = cursorElm.offsetWidth / 2;
            r2 = particle.offsetWidth / 2;

            if (!flag && d <= (r1 + r2)) {
                if (cursorElm.dx / dx < 0)
                    dx = -dx;
                if (cursorElm.dy / dy < 0)
                    dy = -dy;
                flag = true;
                continue;
            }

            if (flag) {
                particle.style.left = `${left}px`;
                particle.style.top = `${top}px`;
            }
        } while (d <= (r1 + r2));

//===================================================

         left = particle.offsetLeft + dx;
         top = particle.offsetTop + dy;
        // console.log(dy);
        if (top + particle.offsetHeight >= innerHeight || top <= 0) {
            dy = -dy;
            return;
        }
        if (left + particle.offsetWidth >= innerWidth || left <= 0) {
            dx = -dx;
            return;
        }

        particle.style.left = `${left}px`;
        particle.style.top = `${top}px`;
    }, 50);


}
