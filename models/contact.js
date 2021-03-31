let lastId = 4;
/**
 * id: Number
 * name: String
 * phone: String
 * address: Object
 */
const contacts = [
  {
    id: 1,
    name: 'reza',
    phone: '091234567890',
    address: {
      country: 'Iran',
      city: 'Tehran',
    },
  },
  {
    id: 2,
    name: 'ahmad',
    phone: '091234567890',
    address: {
      country: 'Iran',
      city: 'Isfahan',
    },
  },
  {
    id: 3,
    name: 'ahmad',
    phone: '091234567890',
    address: {
      country: 'Iran',
      city: 'Isfahan',
    },
  },
];

class Contact {
  /**
   * index all contacts
   */
  static index() {
    return contacts;
  }

  /**
   * store new contact
   * @param {any} contact
   */
  static store(contact) {
    const newContact = {
      ...contact,
      id: lastId++,
    };

    contacts.push(newContact);

    return newContact;
  }

  /**
   * get contact with id
   * @param {string} id
   */
  static getById(id) {
    return contacts.find(c => c.id == id);
  }

  /**
   * delete contact with id
   * @param {string} id
   */
  static deleteById(id) {
    const contactIndex = contacts.findIndex(c => c.id == id);
    const contact = contacts[contactIndex];

    contacts.splice(contactIndex, 1);

    return contact;
  }
}

module.exports = Contact;
