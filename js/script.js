function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Gagal memuat " + file);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent('header-placeholder', 'user/components/navbar.html');
    loadComponent('footer-placeholder', 'user/components/footer.html');
});
