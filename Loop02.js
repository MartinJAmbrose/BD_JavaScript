// Support.ai can send as many messages as the budget allows. 
// We want to find out how many messages we can send 
// before the total cost of those messages would exceed the given budget.

//Complete the maxMessagesWithinBudget function. 
// It should use an infinite loop to keep track of the totalCost
//  and a count of the messages sent.

//Use a few variables to keep track of the totalCost, 
// and a count of all the messages sent.
//Each message sent costs 1.0 + i * 0.01 
// where i starts at 0 for the first message, 
// and increases by 1 for each message sent.
//Use break to exit the loop when the totalCost + the cost of the current message exceeds the budget
//Return the count of messages that can be sent within the budget
function maxMessagesWithinBudget(budget) {
  
  let totalCost = 0;
  let count = 0;
  let i = 0;
  
  while (true) {
    
    const cost = 1.0 + i * 0.01;
    
    if (totalCost + cost > budget) {
      break;
    }

    totalCost += cost;
    count++;
    i++;
  } 
  return count;
}

export { maxMessagesWithinBudget };
