const btn = document.getElementById('btn-share')

function share() {
    const share = document.getElementById('share')
    share.classList.toggle('show-share-container')
}

btn.addEventListener('click', share)