const hasHighOpenRate = true;
const isRecent = true;
const hasStrongReplyRate = false;
const canBeResent = true;
const isFlaggedAsSpam = false;

// don't touch above this line
let isHighEngagement;
if ((hasHighOpenRate && isRecent === true) && 
    (hasHighOpenRate === true || canBeResent === true)) {
  isHighEngagement = true;
} else {
  isHighEngagement = false;
}
// 
  // don't touch below this line

  console.log(`The campaign is high-engagement: ${isHighEngagement}`);
