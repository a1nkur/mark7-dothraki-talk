const translatorBtn = document.getElementById("btn");

translatorBtn.addEventListener("click", handleBtnClick);

const inputContainer = document.getElementById("textArea");
const outputContainer = document.querySelector("#outputBox");
const showcase = document.querySelector(".showcase__area");
// const url = "https://api.funtranslations.com/translate/minion.json";
const url = "https://api.funtranslations.com/translate/vulcan.json";
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function handleBtnClick(event) {
  // add gif class
  showcase.classList.add("gif");
  showcase.innerHTML = `<img src="./assets/spock.gif" alt="spock" />`;

  const input = inputContainer.value;
  const finalURL = constructURL(input);
  console.log(finalURL);
  fetch(finalURL)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      showcase.classList.remove("gif");
      showcase.innerHTML = `<div></div>`;
      showcase.innerHTML = `<div id="outputBox" class="output__container">
                            ${json.contents.translated}
                            </div>`;

      outputContainer.innerText = json.contents.translated;
    });
  // .catch(err => alert(err));
}

function constructURL(inputText) {
  const encodedURI = encodeURI(inputText);
  return `${url}?text=${encodedURI}`;
}
