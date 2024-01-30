var books = [
    {
        title: "Dom Casmurro",
        author: "Machado de Assis",
        chapters: [
            "Capítulos I a V",
            "Capítulos VI a X",
            "Capítulos XI a XV"
        ],
        urls: [
            "https://ia801802.us.archive.org/7/items/dom_casmurro_2102_librivox/domcasmurro_01_assis_64kb.mp3",
            "https://www.archive.org/download/dom_casmurro_2102_librivox/domcasmurro_02_assis_64kb.mp3",
            "https://www.archive.org/download/dom_casmurro_2102_librivox/domcasmurro_03_assis_128kb.mp3"
        ],
        cover: "https://cdn.kobo.com/book-images/6c02a9c1-c781-4bea-b424-d39e4508e63b/1200/1200/False/dom-casmurro-74.jpg"
    },
    {
        title: "Demonios",
        author: "Aluísio Azevedo",
        chapters: [
            "Seção 1 - Capítulos 1 a 3",
            "Seção 2 - Capítulos 4 a 5",
            "Seção 3 - Capítulos 6 a 9"
        ],
        urls: [
            "https://www.archive.org/download/demonios_1709_librivox/demonios_01_azevedo_128kb.mp3",
            "https://www.archive.org/download/demonios_1709_librivox/demonios_02_azevedo_128kb.mp3",
            "https://www.archive.org/download/demonios_1709_librivox/demonios_03_azevedo_128kb.mp3"
        ],
        cover: "https://m.media-amazon.com/images/I/71FDQ0ehwwL._AC_UF1000,1000_QL80_.jpg"
    }
];
var audioPlayer = document.getElementById('audioPlayer');
var playPauseButton = document.getElementById('playPauseButton');
var bookTitleElement = document.getElementById('bookTitle');
var bookAuthorElement = document.getElementById('bookAuthor');
var bookCoverElement = document.getElementById('bookCover');
var bookSelector = document.getElementById('bookSelector');
var currentChapterIndex = 0;

function updateAudio() {
    audioPlayer.src = books[bookSelector.value].urls[currentChapterIndex];
    audioPlayer.play();
    bookTitleElement.textContent = books[bookSelector.value].title;
    bookAuthorElement.textContent = books[bookSelector.value].author;
    bookCoverElement.src = books[bookSelector.value].cover;
    document.getElementById('currentChapter').textContent = books[bookSelector.value].chapters[currentChapterIndex];
}

function previousChapter() {
    if (currentChapterIndex > 0) {
        currentChapterIndex--;
        updateAudio();
    }
}

function nextChapter() {
    if (currentChapterIndex < books[bookSelector.value].chapters.length - 1) {
        currentChapterIndex++;
        updateAudio();
    }
}

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.classList.remove('play-button');
        playPauseButton.classList.add('pause-button');
    } else {
        audioPlayer.pause();
        playPauseButton.classList.remove('pause-button');
        playPauseButton.classList.add('play-button');
    }
}

function selectBook() {
    currentChapterIndex = 0;
    updateAudio();
}

updateAudio(); // Carregar o áudio do primeiro capítulo ao carregar a página
