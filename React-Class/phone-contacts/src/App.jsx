import AddContacts from "./AddContacts";
import ShowContacts from "./ShowContacts";
import "./App.css";
import StateComponent from "./StateComponent";

function App() {
  let phoneContactList = [
    {
      id: 1,
      name: "Gobi",
      phone: "123456567",
    },
    {
      id: 2,
      name: "Ajay",
      phone: "123456567",
    },
    {
      id: 3,
      name: "Rishi",
      phone: "123456567",
    },
    {
      id: 4,
      name: "Subash",
      phone: "123456567",
    },
    {
      id: 5,
      name: "Mahe",
      phone: "1299456567",
    },
  ];

  return (
    <div>
      <ShowContacts contactList={phoneContactList} />
      <hr />
      {<AddContacts />}
      <StateComponent />
    </div>
  );
}

export default App;
