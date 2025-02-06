const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const gifUrls = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnh2cTBxa2ZxbjF4MnQ1bnM0YmpjeTB4d2pkbWwzN2lmdnlucjZzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FLdmIp6wJr91JAI/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWY0NjFkYTduZGt6cG1rYWticHpubnhoaGN0dGt3b2o0bmQyMHlzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7yDboo5wUXp70JGg/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeThyeWZjcDVvOTg0dmg5OG1xOHVyb2xxNW5zcnNidmZ2Y2h1dmt5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q7YFxgjPvzczu/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG8yYXdyeGVvZGZmdW00bjV4Nm9iaGY3eWVrcTc3NXA1cHJsMzJsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndhcDQ4NmtzNTZqZnlzazA3Y3gzbWZvcmkxdGZ5eXBxYXp4cWF5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BEob5qwFkSJ7G/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5iNXNydGswdXl6OG43aDhpOHVjbTNuaHB4bHh2bG9iN3NuYmN6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OjiSLBg7s27kaIGS8o/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmRndDE0d2lpb2R4cnNzb3B3bnI5bWN1aXJqanpsZDYwNWhxMGhuZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W22FAttsijr19iqX8K/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTlpN3N4OXBsZWN0dzQyOWpqN3o5bHV5bjZyemJwcnB5ZGJweGZ3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UJAwdftDufI2icYcKT/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTliYm9sNjUwY2lnOTZ6ZGU0aWltODJ0MDExbzhvaWs2NjRnd29sayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i0SBvL9WIiUQmXTI0J/giphy.gif"
];

let messageIndex = 0;
let gifIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.getElementById('gifImage');

    // Change the button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase the font size of the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Change the GIF
    gifImage.src = gifUrls[gifIndex];
    gifIndex = (gifIndex + 1) % gifUrls.length; // Loop through GIFs
}

function handleYesClick() {
    window.location.href = "yes_page.html"; // Redirect to a confirmation page
}
