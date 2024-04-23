const html = document.getElementById("html");
const css = document.getElementById("css");
const javascript = document.getElementById("javascript");
const result = document.getElementById("output");
const copyButton = document.getElementById("copy-btn");
const saveButton = document.getElementById("save-btn");
const lockButton = document.getElementById("lock-btn");

function output() {
  result.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
  result.contentWindow.eval(javascript.value);
}

// Function to copy code to clipboard
copyButton.addEventListener("click", function () {

  var textareas = document.querySelectorAll("textarea");
  var combinedText = "";

   // Concatenate the content of all text areas
  textareas.forEach(function (textarea) {
    combinedText += textarea.value + "\n";
  });
    // Create a temporary textarea element to hold the text
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = combinedText;
  document.body.appendChild(tempTextarea);

   // Select the text in the temporary textarea
  tempTextarea.select();

   // Copy the selected text to the clipboard
  document.execCommand("copy");

   // Remove the temporary textarea
  document.body.removeChild(tempTextarea);
  alert("Text copied to clipboard!");

});


// Function to save code to local storage
saveButton.addEventListener("click", function () {
  localStorage.setItem("Content1", html.value);
  localStorage.setItem("Content2", css.value);
  localStorage.setItem("Content3", javascript.value);
  alert("Code saved successfully!");
});


// Function to toggle lock/unlock state of code editor
lockButton.addEventListener("click", function () {
  
  var textAreas = document.querySelectorAll("textarea");

  // Check if any text area is locked
  var isAnyLocked = false;
  textAreas.forEach(function (textArea) {
    if (textArea.disabled) {
      isAnyLocked = true;
    }
  });
  // Toggle lock/unlock based on the state of the first text area
  var newState = !textAreas[0].disabled;
  textAreas.forEach(function (textArea) {
    textArea.disabled = newState;
  });

  // Change button text based on the new state
  if (newState) {
    lockButton.textContent = "Unlock All";
  } else {
    lockButton.textContent = "Lock All";
  }
});
