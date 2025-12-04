// Getter and Setters.  Define special methods

class Contact {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  set phoneNumber(value) {
    const digits = value.replace(/\D/g, "");

    if (digits.length !== 10) {
      throw new Error("Invalid phone number.");
    }
    this._phoneNumber = digits;
  }
  get phoneNumber() {
    const p = this._phoneNumber;
    return `(${p.slice(0, 3)}) ${p.slice(3, 6)}-${p.slice(6)}`;
  }

}

// don't touch below this line

export { Contact };
