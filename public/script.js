// runs the function to generate song lines as soon as the page loads
document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.getElementById("output")

  // array for each line of the output
  const songLines = [
    "Happy",
    "birthday",
    "to",
    "you.",
    "Happy",
    "birthday",
    "to",
    "you.",
    "Happy",
    "birthday",
    "dear",
    username + ".", // name of user
    "Happy",
    "birthday",
    "to",
    "you!",
    "For " + gender + "'s a jolly good fellow,",
    "For " + gender + "'s a jolly good fellow,",
    "For " + gender + "'s a jolly good fellow, which nobody can deny!"
  ];

  for(let i=0; i<songLines.length; i++){
    let index = i % guestData.length;
    const singer = guestData[index];
    const newLine = `${singer}: ${songLines[i]}`

    const p = document.createElement("p");
    p.innerHTML = newLine;
    outputDiv.appendChild(p);
  }
})