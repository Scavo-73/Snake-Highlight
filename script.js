var current = null;

document.querySelector('#email').addEventListener('focus', function (e) {

    if (current) current.pause();

    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });

});

document.querySelector('#password').addEventListener('focus', function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: '-336 1386',
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
const element = document.getElementById("submit");
element.addEventListener("click", function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: '-736 1386',
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '540 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});