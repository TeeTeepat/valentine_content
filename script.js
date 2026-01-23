let yesBtn = document.querySelector("#yes-btn");
let noBtn = document.querySelector("#no-btn");
let emoText = document.querySelector(".emo-text");
let gifImg = document.querySelector(".gif img");
let size = 1;
let multiply = 1.5;

let texts = [
    "Are you sure?",
    "Think again!",
    "Don't be shy!",
    "You know you want to!",
    "Come on, say YES!",
    "It's fun, I promise!",
    "Why not give it a try?",
    "You'll regret it if you don't!",
    "Just say YES!",
    "Be brave, click YES!"
];

let gifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnA4Z2t2MjNsN2NtanJ6cGRodTc1eDRtZm95MXZjcmNpbjd5bGk2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wMlcT3exSxYAcbkby6/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGpqaHFtOTc2ODhmbGEzcHhzcDBxazJia2FlNjI1Z2pqY2wwdW0waCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BhRNXjTlP0IdQp25cd/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzUyNmcwOWdhdnpoamt4M2E2bmQ3dHo0aWZpN2djeXBjNXNuZXp3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/X3hLe7cxd4L9CmLeOt/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjAzMHg1YnhmcW1hdDB6bHY3MWNqeWhkb2c3ajQ0dzQwaDBpZzRzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/i5e4hWedUmTZCfK849/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazMyZzdqeGo5cHA1OGhzenNpajgzbTdpaXI3bDJ6eHc3MjgzZWI0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GL81RtTxZQ2KlFHUBI/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjAzMHg1YnhmcW1hdDB6bHY3MWNqeWhkb2c3ajQ0dzQwaDBpZzRzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/i5e4hWedUmTZCfK849/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXo5dHhzcm5iMTdmbzVzYndpdmYweHVhYng5dHZ1NjU1b3BqNGE4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dnRljdZNQ2HkTl75sk/giphy.gif"
];

let i = 0;
noBtn.addEventListener("click", () => {
    gifImg.src = gifs[i % gifs.length];
    emoText.textContent = texts[i % texts.length];
    size *= multiply;
    multiply *= 1.5;
    yesBtn.style.fontSize = size + "em";
    i++;
});

yesBtn.addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".congrats").style.display = "flex";
});