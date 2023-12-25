const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
audioElement.style.display = 'none';
const toggelButton = () => {
    button.disabled = !button.disabled;
}
const tellMeJoke = (joke) => {
    VoiceRSS.speech({
        key: '19e8ae5ce0ad4fedb7170cb976e26f2e',
        src: `${joke}`,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });

}
//Get jokes from joke Api
//Passign joke to Voice Rss function
const getJokes = async () => {
    let joke;
    const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,explicit';
    try {
        const response = await fetch(url);
        const data = await response.json();
        joke = data.setup ? `${data.setup}...${data.delivery}` : data.joke;
        tellMeJoke(joke);
        toggelButton();
    }
    catch (e) {
        console.log(`something wrong happened`, e.message);

    }

}
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggelButton);