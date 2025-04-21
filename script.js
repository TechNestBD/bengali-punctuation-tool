function addPunctuation(text) {
    const questionWords = ["কেন", "কি", "কী", "কে", "কবে", "কেমন", "কোথায়", "কোন"];
    const shortPauses = ["তবে", "যদিও", "তাই", "তাতে", "অতএব", "যার", "যে", "যারপরনাই"];
    
    let words = text.trim().split(/\s+/);
    let result = "";
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let nextWord = words[i + 1] || "";

        if (questionWords.includes(word)) {
            result += word + "? ";
        } else if (shortPauses.includes(word)) {
            result += word + ", ";
        } else {
            result += word + "। ";
        }
    }

    return result.trim();
}

document.getElementById("addPunctuationBtn").addEventListener("click", function () {
    let inputText = document.getElementById("inputText").value;
    let outputText = addPunctuation(inputText);
    document.getElementById("output").innerText = outputText;
});
