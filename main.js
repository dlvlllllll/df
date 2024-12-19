const content = '아늑한 분위기 속에서 맛있는 커피와 책을 감상해보세요'
        const text = document.querySelector(".typingtext")
        let index = 0;
        
        function typing(){
            if(index < content.length){
                text.textContent += content[index++];
                setTimeout(typing, 200);
            }
        }
        typing();

        document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 10; // document의 x좌표값
        let mouseY = e.pageY + 10; // document의 y좌표값

        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        });