function addPunctuation(text) {
  // বাড়তি স্পেস হটানো
  text = text.replace(/\s+/g, " ").trim();
  
  // বাক্য ভাগ করা (স্পেস এবং শব্দের উপর ভিত্তি করে)
  const sentences = text.split(/(?<=।|!|\?)\s*|(?<=\s)/).filter(s => s.trim() !== "");
  
  const questionWords = ["কি", "কেন", "কবে", "কে", "কোথায়", "কেমন", "কি করে", "কিভাবে", "কত"];
  const keywords = ["তবে", "কিন্তু", "তাই", "যদি", "যেহেতু", "কারণ", "অতএব"];
  
  let result = "";
  for (let line of sentences) {
    line = line.trim();
    if (line === "") continue;

    // কমা যোগ করা
    let words = line.split(" ");
    let sentenceWithComma = words
      .map((word, index) => {
        if (keywords.includes(word) && index > 0) {
          return "," + word;
        }
        return word;
      })
      .join(" ");

    // প্রশ্নবোধক বা দাঁড়ি যোগ করা
    if (questionWords.some(word => line.includes(word))) {
      result += sentenceWithComma + "? ";
    } else {
      result += sentenceWithComma + "। ";
    }
  }

  return result.trim();
}

document.getElementById("addPunctuationBtn").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const result = addPunctuation(inputText);
  document.getElementById("output").textContent = result;
});
