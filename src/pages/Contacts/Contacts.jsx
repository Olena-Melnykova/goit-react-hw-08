import toast, { Toaster } from "react-hot-toast";
import ContactForm from "../../components/Form/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Header } from './Contacts.styled'; 

export default function Contacts() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch((e) => {
        toast.error("Sorry, we were unable to access your contact list...");
        console.log(e);
      });
  }, [dispatch]);

  return (
    <div>
      <Header>Your contacts</Header> 
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong! Please try again.</p>}
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}





