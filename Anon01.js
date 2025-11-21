// Anonymous Functions
function printReports(intro, body, outro) {
//Intro
  printCostReport(
    (message) => message.length * 2,
    intro
  );
//Body
  printCostReport(
    (message) => message.length * 3,
    body
  );  
//Outro
  printCostReport(
    (message) => message.length * 4,
    outro
  );  
}

// don't touch below this line

function printCostReport(costCalculator, message) {
  const cost = costCalculator(message);
  console.log(`Message: "${message}" Cost: ${cost} cents`);
}

printReports(
  "Welcome to the Hotel California",
  "Such a lovely place",
  "Plenty of room at the Hotel California",
);
