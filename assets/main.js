const canvas =  document.getElementById("game"); // Получаем елемент поля игры
const ctx = canvas.getContext("2d"); // Задаём параметры отрисовки

let hero = new Image();
hero.src = "assets/img/Darwin.png";

let bg = new Image();
bg.src = "assets/img/bg.png";

function game() {
    ctx.drawImage(bg, 0, 0, 500, 150);
    ctx.drawImage(hero, 0, 0, 30, 50);

}
game();
