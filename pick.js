const staffImages = document.querySelectorAll(".staff img");
const parts = document.querySelectorAll(".part");
    
staffImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        // 선택된 part로 스크롤
        parts[index].scrollIntoView({ behavior: "smooth" });
    });
});

const upTag = document.querySelector('.up');

upTag.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('mousemove', (e) => {
let mouseX = e.pageX + 10; // document의 x좌표값
let mouseY = e.pageY + 10; // document의 y좌표값

let cursor = document.querySelector('.cursor');
cursor.style.left = mouseX + 'px';
cursor.style.top = mouseY + 'px';
});