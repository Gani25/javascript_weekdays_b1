let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

for (let singlePara of paragraphs) {
  //   console.log(singlePara);
  //   console.dir(singlePara);

  console.log(singlePara.innerText);
  console.log(singlePara.innerHTML);
  console.log(singlePara.textContent);
  console.dir(singlePara);
}
