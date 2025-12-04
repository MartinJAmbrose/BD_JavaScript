class Message {
  static TOTAL_MESSAGES = 0;
  static TOTAL_MESSAGE_LENGTH = 0;
  
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;

    Message.TOTAL_MESSAGES++;
    Message.TOTAL_MESSAGE_LENGTH += body.length;
    
  }
  static getAverageMessageLength() {
    if (Message.TOTAL_MESSAGES === 0) return 0;

    const avg = 
      Message.TOTAL_MESSAGE_LENGTH / Message.TOTAL_MESSAGES;
    return Math.round(avg * 100) / 100;
  }
}

// don't touch below this line

export { Message };
