// const checkButton = document.getElementById("check-btn");

function cleanUpDOM(inputField, resultBody) {
  inputField.value = "";
  //TODO clean up when user starts typing again ...or hits submit again?
  const allChildren = resultBody.children;
  for (let i = 0; i < allChildren.length; i++) {
    const childE = allChildren[i];
    if (childE.id == "alert-para") {
      childE.innerText = "";
    }
  }
}

function removeNonAlphaNumeric(theInput) {
  console.log("validating...");
  const sanitized = theInput.replace(/[^a-zA-Z0-9]+/g, "");
  return sanitized;
}

function reverseCharacters() {}
function handleSubmit() {
  event.preventDefault();
  const userInput = document.getElementById("text-input").value.trim();
  const resultDiv = document.getElementById("result");
  let resultText = document.createElement("p");
  resultText.id = "result-text";
  if (userInput == "") {
    alert("Please input a value");
  } else if (userInput != "") {
    console.log("Not empty input.");
    const cleaned = removeNonAlphaNumeric(userInput);
    const reversed = reverseCharacters(cleaned);
  }
  // cleanUpDOM(userInput, resultDiv);
}
