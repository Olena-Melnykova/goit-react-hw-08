import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectedContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectedContacts, selectNameFilter],
  (contacts, contactsFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  }
);