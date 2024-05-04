import { Contact } from "@prisma/client";
import { prisma } from "../db";

export const createContact = async (
  contact: Omit<Contact, "id" | "createdAt">
) => {
  const newContact = await prisma.contact.create({
    data: contact,
  });

  return newContact;
};

export const getAllContacts = async () => {
  return await prisma.contact.findMany();
};

export const getContactById = async (contactId: string) => {
  return await prisma.contact.findUnique({ where: { id: contactId } });
};

export const deleteContactById = async (contactId: string) => {
  return await prisma.contact.delete({ where: { id: contactId } });
};
