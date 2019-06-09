addEventListener('click', function (event) {
    //console.log(event)
    const img = document.createElement('img');
    const size = 100;
    img.setAttribute('src', 'http://lorempixel.com/100/100');

    img.style.position = 'absolute';
    img.style.top = event.y - size / 2 + 'px';
    img.style.left = event.x - size / 2 + 'px';

    document.body.appendChild(img);
});