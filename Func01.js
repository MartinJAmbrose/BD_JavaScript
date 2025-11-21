/* Apply Rules and create a Rewards function. Read the three inputs.
Use if, else if, and else statements to apply the rules in the correct order.
Keep track of the current tier in a variable and update it when an upgrade rule applies.
Return the final tier string.
Do not use loops or arrays for this task. Focus on functions, variables, and conditional logic.
*/

export function getRewardTier(level, questsCompleted, hasBattlePass) {

// Rule 1  
  if (level <= 0 || questsCompleted <= 0) {
    return "None";
  }
  let tier = "";
// Rule 2
  if (questsCompleted < 5) {
    tier = "Bronze";
  } else if (questsCompleted < 10) {
    tier = "Silver";
  } else {
    tier = "Gold";
  }
// Rule 3
  if (questsCompleted >= 30) {
    return "Platinum";
  }
// Rule 4
  if (hasBattlePass) {
    if (level >= 20 && questsCompleted >= 15) {
      tier = "Platinum";
    }
    else if (level >= 10 && tier == "Bronze") {
      tier = "Silver";
    }
  }
  return tier
}
