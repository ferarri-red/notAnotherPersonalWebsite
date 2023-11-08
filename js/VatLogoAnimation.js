'use strict';

const vat = document.getElementById('VatLogo');
let xAxis = 1;
let yAxis = 1;

const handleCollision = () => {
    const { offsetHeight: vat_height, offsetWidth: vat_width, offsetTop: vat_top, offsetLeft: vat_left } = vat;
    const { innerHeight: win_height, innerWidth: win_width } = window;

    if (vat_left <= 0 || vat_left + vat_width >= win_width) {
        xAxis = -xAxis;
    }

    if (vat_top <= 0 || vat_top + vat_height >= win_height) {
        yAxis = -yAxis;
    }
};

const frame = () => {
    handleCollision();
    vat.style.top = `${vat.offsetTop + yAxis * 2}px`;
    vat.style.left = `${vat.offsetLeft + xAxis * 2}px`;

    requestAnimationFrame(frame);
};

const init = () => {
    vat.style.position = 'fixed';
    requestAnimationFrame(frame);
};

init();
