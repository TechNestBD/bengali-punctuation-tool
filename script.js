function addPunctuation() {
  const input = document.getElementById("bengaliInput").value;
  let punctuated = input;

  // সাধারণ কিছু উদাহরণ দিয়ে দাড়ি, প্রশ্নবোধক, বিস্ময় চিহ্ন বসানো
  punctuated = punctuated.replace(/(আমি|তুমি|সে|আমরা|তারা|আপনি)(?!,)/g, "$1,");
  punctuated = punctuated.replace(/(কি|কেন|কবে|কোথায়|কে)(?!\?)/g, "$1?");
  punctuated = punctuated.replace(/(বাহ|আরে|উফ)(?!!)/g, "$1!");

  document.getElementById("output").value = punctuated;
}
