const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {

            delContact: (contact) => {
                let aux = getStore().contacts;
                aux.splice(contact, 1)
                console.log(aux)
                setStore ({contacts: aux})
            },

            addContact: (fName, email, phone, address) => {
                const newContact = { fName, email, phone, address };
                const store = getStore();
                setStore({ contacts: [...store.contacts, newContact] });
            },
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                // fetch().then().then(data => setStore({ "foo": data.bar }))
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;