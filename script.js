function addPunctuation(text) {
  const sentences = text
    .replace(/([।?!])/g, "$1\n") // আগে থেকে থাকলে রাখে
    .replace(/(\s+)/g, " ") // বাড়তি স্পেস বাদ দেয়
    .trim()
    .split(/[।?!\n]/);

  const keywords = ["তবে", "কিন্তু", "তাই", "যদি", "যেহেতু", "কারণ", "অতএব"];
  const questionWords = ["কি", "কেন", "কবে", "কে", "কোথায়", "কেমন", "কি করে", "কিভাবে", "কত"];

  let result = "";
  for (let line of sentences) {
    line = line.trim();
    if (line === "") continue;

    if (questionWords.some(word => line.includes(word))) {
      result += line + "? ";
    } else if (keywords.some(word => line.includes(word))) {
      result += line + ", ";
    } else {
      result += line + "। ";
    }
  }

  return result.trim();
}

document.getElementById("addPunctuationBtn").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const result = addPunctuation(inputText);
  document.getElementById("output").textContent = result;
});
