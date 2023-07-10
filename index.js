const letters = [`a`, `b`, `c`];
let vCount = 1;
let cCount = 2;

const render = () => {
  const html = letters.map((letter) => {
    return `<span>${letter.toUpperCase()}</span>`;
  }).join(``);

  document.querySelector(`#output`).innerHTML = html;
  document.querySelector(`#vcCount`).innerHTML = `Vowels-${vCount} Consonants-${cCount}`;
}

render();

document.querySelector(`#vowel-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const letter = event.target.querySelector(`select`).value;
  letters.push(letter);
  vCount++;
  render();
});

document.querySelector(`#consonant-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const letter = event.target.querySelector(`select`).value;
  letters.push(letter);
  cCount++;
  render();
});

document.querySelector(`#output`).addEventListener(`click`, (event) => {
  const idx = [...event.target.parentNode.children].indexOf(event.target);
  const vowelList = ["a", "e", "i", "o", "u"];
  const consonantList = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  if (letters[idx] in vowelList) {
    console.log (`this is a vowel`)
  }
  letters.splice(idx, 1);
  // Make an array with all vowels
  // Make an array with all consonants
  // create filter
  
  render();
});