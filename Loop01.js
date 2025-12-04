// Calculate the combined cost for all messages. 
// Each message costs 1.0 base fee plus a dynamic fee 
// which increases by 0.01 for each additional message.
function bulkSendCost(numMessages) {
  let combinedCost = 0.00;
  
  for (let i = 1; i <= numMessages; i++) {
    
    combinedCost += 1.0 + (i - 1) * 0.01;
  } 
  return combinedCost;
}

export { bulkSendCost };
