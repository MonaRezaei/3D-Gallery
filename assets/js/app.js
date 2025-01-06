const wrapp = document.querySelector('.wrapper');
const modal = document.querySelector('.modal');

wrapp.addEventListener('click', showModal)
modal.addEventListener('dblclick', hideModal)
modal.addEventListener('mousemove', changeDgree)


function showModal(e) {
    if (e.target.tagName === 'IMG') {
        modal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`
        modal.innerHTML = `<img src="${e.target.src}" alt="">`;
        modal.style.transform = 'scale(1)';
    }
}

function hideModal(e) {
    if (e.target.tagName !== 'IMG') {
        modal.style.transform = 'scale(0)';
    }
}
function changeDgree(e) {
    if (e.target.tagName === 'IMG') {

        let xdegree = (e.offsetX - 300) / 5;
        let ydegree = -(e.offsetY - 200) / 5;

        e.target.style.transform = `rotateY(${xdegree}deg) rotateX(${ydegree}deg)`;
    } else if (e.target.tagName !== 'IMG') {

        // this.children[0].style.transform = `rotateY(0deg) rotateX(0deg)`
    }
}