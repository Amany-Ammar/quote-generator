let btn = document.getElementById('btn');
let output = document.getElementById('quote');

var quotes = [
    '“Be yourself; everyone else is already taken.”\n ― Oscar Wilde',
    '“Two things are infinite: the universe and human stupidity; and I amm not sure about the universe.” \n ― Albert Einstein',
    '“A room without books is like a body without a soul.” \n ― Marcus Tullius Cicero',
    '“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.” \n ― Bernard M. Baruch',
    '“You have gotta dance like there is nobody watching,Love like you will never be hurt, Sing like there is nobody listening, And live like it is heaven on earth.” \n― William W. Purkey',
    '“You only live once, but if you do it right, once is enough.”\n― Mae West',
    '“Be the change that you wish to see in the world.”\n― Mahatma Gandhi',
    '“If you tell the truth, you do not have to remember anything.”\n― Mark Twain',
    '“To live is the rarest thing in the world. Most people exist, that is all.”\n― Oscar Wilde',
    '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”\n― Martin Luther King Jr.',
    '“Live as if you were to die tomorrow. Learn as if you were to live forever.”\n― Mahatma Gandhi'
]
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
})