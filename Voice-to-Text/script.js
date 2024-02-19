window.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.querySelector(".click_to_convert");
  const convertText = document.getElementById("convert_text");

  convertButton.addEventListener("click", () => {
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      convertText.value += transcript;
    });

    recognition.start();
  });
});
