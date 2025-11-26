function addID(campaignRecord) {

// campaignRecord object has 3 properties.
// Add a new id property joining Campaign and Sender Name with a hyphen
  return {
    campaignName: campaignRecord.campaignName,       
    senderName: campaignRecord.senderName,
    messageCount: campaignRecord.messageCount,
    id: `${campaignRecord.campaignName}-${campaignRecord.senderName}`
  };
}

// don't touch below this line

export { addID };
