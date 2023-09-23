document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".navbar ul li a");

    function navigateToPage(e) {
        e.preventDefault();
        const pageName = e.target.id;
        loadPage(pageName);
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", navigateToPage);
    });

    function loadPage(pageName) {
        const content = document.querySelector(".center");
        fetch(pageName + ".html")
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => console.error("Sayfa yüklenirken hata oluştu: ", error));
    }
    
    loadPage("anasayfa");
});
