import { Form } from "../Form/Form";
import { useFetchContactsQuery } from "../../redux/contactSlice";
import { ContactItem } from "../ContactItem/ContactItem";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { SectionDiv } from "./Section.styled";
import Filter from "../Filter/Filter";

export default function Section() {
  const res = useFetchContactsQuery();
  const data = res.data;
  const [filter, setFilter] = useState("");

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContact = () => {
    if (data) {
      const normalizeFilter = filter.toLowerCase();

      return data.filter((data) =>
        data.name.toLowerCase().includes(normalizeFilter)
      );
    } else {
      return data;
    }
  };

  const visibleContact = getVisibleContact();

  return (
    <SectionDiv>
      <h1>Phonebook</h1>
      <Form data={data} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactItem contacts={visibleContact} />
      <Toaster />
    </SectionDiv>
  );
}
