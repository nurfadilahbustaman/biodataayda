// Fungsi untuk menambahkan efek hover pada proyek
function addHoverEffect() {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "scale(1.05)";
        });

        project.addEventListener("mouseleave", () => {
            project.style.transform = "scale(1)";
        });
    });
}

// Panggil fungsi saat halaman selesai dimuat
window.addEventListener("load", addHoverEffect);