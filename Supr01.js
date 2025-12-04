// Super keyword allows us to call methods on an objects parent
class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }

  formatMessage(message) {
    return `To: ${this.recipient}, Message: ${message}`;
  }
}

// don't touch above this line

class SMSSender extends Sender {
  formatMessage(message) {
    const base = super.formatMessage(message);
    return base +" [SMS]";
  }
}
  
class EmailSender extends Sender {
  formatMessage(message) {
    const base = super.formatMessage(message);  
    return base + " [Email]";
  }
}

// don't touch below this line

export { Sender, SMSSender, EmailSender };
