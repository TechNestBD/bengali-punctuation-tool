function addPunctuation(text) {
  // সিম্পল লজিক — যেখানে নতুন লাইন বা স্পেস পাওয়া যায় সেখানে "।" বসিয়ে দেওয়া
  return text
    .replace(/([^\.\?\!।])\s+/g, "$1। ")
    .replace(/।।+/g, "।") // ডাবল "।" সরানো
    .trim();
}

document.getElementById("punctuateButton").addEventListener("click", function () {
  const input = document.getElementById("inputText").value;
  const result = addPunctuation(input);
  document.getElementById("output").innerText = result;
});
