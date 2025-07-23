export const emptyContact = () => ({
  Name: "",
  addres: "",
  telefono: "",
  mail: "",
});

export const initialStore = () => {
  return {
    contacts: [emptyContact()],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };
    default:
      throw new Error("no action");
  }
}
