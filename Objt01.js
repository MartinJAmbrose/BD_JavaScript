function createMessage(phoneNumber, message) {

// return an object literal.  No temp variables needed
// creates properties phoneNumber, message and messageLength
// and stores the functions arguments(2)
// and evaluate the length of the message
  return {
    phoneNumber: phoneNumber,       
    message: message,
    messageLength: message.length
  }; 
}

export { createMessage };
