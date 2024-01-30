// ボタンの追加、クリック時のコピーイベントの登録
function addCopyBtnToElement(element, copyText) {
  const copyButton = document.createElement("button");

  copyButton.innerText = "Copy";
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(copyText);
  });

  copyButton.classList.add("ml-1", "btn", "btn-default");

  element.appendChild(copyButton);
}

// 入力例/出力例の各要素にコピーボタンを追加する
const dlElements = document.querySelectorAll("dl.txt2");
dlElements.forEach((dlElement) => {
  const inputExElement = dlElement.querySelector("dt");
  const copyTargetElement = dlElement.querySelector("p");
  const copyText = copyTargetElement.innerText.trim();

  addCopyBtnToElement(inputExElement, copyText);
});
