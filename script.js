let doc = document;

let inp = doc.querySelector("input");
let btns = doc.querySelectorAll(".btn");
inp.value = 10;
let text = doc.querySelector("h1");

btns.forEach((btn, idx) => {
  btn.onclick = () => {
    inp.value = (idx + 1) * btns.length;
    text.innerHTML =
      idx + 1 < btns.length ? (text.innerHTML = `0${idx + 1}`) : idx + 1;
  };
});