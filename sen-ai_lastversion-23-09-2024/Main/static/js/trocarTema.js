// Função para ativar o modo escuro ou claro
function toggleDarkMode() {
    const body = document.body;
    const toggle = document.getElementById('toggle-theme');
    const imageWelcome = document.getElementById('welcomeImg');
    const imageLogo = document.getElementById('logoImg');
    const imageUser = document.getElementById('userImg');
    const imageUpload = document.getElementById('uploadImg');
    const imageGraficLight = document.getElementById('graficImage');
    const imageGraficDark = document.getElementById('graficImageDark');
    const imgLogoPopup = document.querySelector('.imgLogoPopup');
    const gerarPdfBtn = document.querySelector('.gerarPdfBtn');
    const enviar_btn_upload = document.querySelector('.enviar_btn_upload');
    const select_texto = document.querySelector('.select_texto');

    if (toggle.checked) {
        body.classList.add('dark-mode');
        imageWelcome.src = "/static/images/welcomeImageDark.png";
        imageLogo.src = "/static/images/Logo_SenAI_NovaDark.png";
        imageUser.src = "/static/images/UserImgDark.png";
        imageUpload.src = "/static/images/UploadImgDark.png";
        imageGraficLight.style.display = "none";
        imageGraficDark.style.display = "grid";
        imgLogoPopup.src = "/static/images/Logo_SenAI_NovaDark.png";

        gerarPdfBtn.style.backgroundColor = "var(--color-deep-blue)";
        gerarPdfBtn.style.color = "var(--color-snowflake)";
        gerarPdfBtn.style.border = "0.1vw var(--color-snowflake) solid";

        enviar_btn_upload.style.backgroundColor = "var(--color-deep-blue)";
        enviar_btn_upload.style.color = "var(--color-snowflake)";
        enviar_btn_upload.style.border = "0.1vw var(--color-snowflake) solid";

        if (select_texto) select_texto.style.color = "var(--color-snowflake)";

        document.getElementById('subWelcome').style.color = "#ffffff";
        document.getElementById('textWelcome').style.color = "#ffffff";

        // Salvar no localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        imageWelcome.src = "/static/images/welcomeImage.png";
        imageLogo.src = "/static/images/Logo_SenAI_NovaB.png";
        imageUser.src = "/static/images/UserImgRed.png";
        imageUpload.src = "/static/images/UploadImg.png";
        imageGraficLight.style.display = "grid";
        imageGraficDark.style.display = "none";
        imgLogoPopup.src = "/static/images/Logo_SenAI_NovaB.png";

        gerarPdfBtn.style.backgroundColor = "#F5F5F5";
        gerarPdfBtn.style.color = "#000000";
        gerarPdfBtn.style.border = "0.1vw #000000 solid";

        enviar_btn_upload.style.backgroundColor = "#F5F5F5";
        enviar_btn_upload.style.color = "#000000";
        enviar_btn_upload.style.border = "0.1vw #000000 solid";

        if (select_texto) select_texto.style.color = "#000000";

        document.getElementById('subWelcome').style.color = "#000000";
        document.getElementById('textWelcome').style.color = "#000000";

        // Salvar no localStorage
        localStorage.setItem('theme', 'light');
    }
}

// Função para carregar o tema ao iniciar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const toggle = document.getElementById('toggle-theme');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === 'dark') {
        toggle.checked = true;
        toggleDarkMode();
    } else if (savedTheme === 'light') {
        toggle.checked = false;
        toggleDarkMode();
    } else {
        // Se não houver tema salvo, usar a preferência do sistema
        toggle.checked = prefersDarkScheme;
        toggleDarkMode();
    }
}

// Carregar o tema ao iniciar a página
document.addEventListener('DOMContentLoaded', loadTheme);
