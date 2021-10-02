fetch("https://random-words-api.vercel.app/word")
  .then((data) => data.json())
  .then((wordData) => {
    const wordt = wordData[0].word;
    const definitiont = wordData[0].definition;
    const pronunciationt = wordData[0].pronunciation;

    const wordp = document.getElementById("wordp");
    const definitionp = document.getElementById("definitionp");
    const pronunciationp = document.getElementById("pronunciationp");

    wordp.innerHTML = wordt;
    definitionp.innerHTML = definitiont;
    pronunciationp.innerHTML = pronunciationt;
  });
