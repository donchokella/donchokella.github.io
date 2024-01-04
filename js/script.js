document.addEventListener("DOMContentLoaded", function () {
    showRandomQuote();
});

function showRandomQuote() {
    var quotes = [
        "''A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.'' - Antoine de Saint-Exupéry",

        "''Your most unhappy customers are your greatest source of learning.'' - Bill Gates",

        "'Every game is an opportunity to measure yourself against your own potential.'' - Bud Wilkinson",

        "''Games are a trigger for adult play. Play is the act of taking a set of rules seriously. And what you're doing when you're playing a game is embodying the rules.'' - Eric Zimmerman",

        "''Games enable people to come together, compete, and have fun.'' - Gabe Newell",
        "'What we try to do is create a situation where we come in and we’re going to be as efficient as we possibly can, because, just by the nature of the development process, you have so many things that can be large holes in your plans.'' - Gabe Newell",

        "''The game development process is like a journey filled with learning and constant improvement.'' - Hideo Kojima",
        "''I think game development is a war.'' - Hideo Kojima",

        "''Designing a game is like writing a novel: difficult and time-consuming, but incredibly rewarding.'' - Jane McGonigal",

        "''Games offer an experience of emotional connection and learning. This enhances players' commitment to games.'' - Jenova Chen",

        "''Games provide a platform to encourage the imagination and creativity of players.'' - John Carmack",

        "'In our games, you’re a director. You’re making a movie. And you’re the star.'' - Peter Molyneux",

        "''The best games are on the edge of their seat. It’s like riding a roller coaster. It’s the game that has you at the edge of your seat, because you’re excited about what’s going to happen next.'' - Shigeru Miyamoto",

        "''Game development is the art of offering choices to players, allowing them the freedom to explore the game world.'' - Sid Meier",
        "''A game is never complete; only abandoned.'' - Sid Meier",

        "''Games are the convergence of technology and art, allowing us to create unique and compelling experiences.'' - Tim Schafer",

        "''The game development is a chance to connect and interact with people through computers.'' - Will Wright",];

    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteText = quotes[randomIndex];

    document.getElementById("quote-text").innerText = quoteText;
}
