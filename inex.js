
const jokeButton=document.getElementsByClassName('button');
// jokeButton.addEventListener('click',generateJoke);

async function generateJoke() {
  let config={
      headers: {
          accept: 'application/json'
      }
  }
  let joke=await fetch('https://icanhazdadjoke.com/',config)
  let res=await joke.json();
getjoke(res)

}
function getjoke(Jokes) {
    let jokeDiv=document.getElementById('joke');
    jokeDiv.innerText=Jokes.joke;


}


