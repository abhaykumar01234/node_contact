import { Router } from "express";
import {
  createContact,
  deleteContactById,
  getAllContacts,
  getContactById,
} from "./handlers/contact";
import { Contact } from "@prisma/client";

const router = Router();

router.get("/", async (req, res) => {
  const contacts = await getAllContacts();
  return res.json({ contacts });
});

router.get("/:id", async (req, res) => {
  const contact = await getContactById(req.params.id);

  if (!contact) return res.status(404).json({ error: "Contact Not found" });

  return res.json({ contact });
});

router.post("/", async (req, res) => {
  const name = String(req.body.name);
  const email = String(req.body.email);
  const phone = String(req.body.phone);
  const type: Contact["type"] =
    req.body.type === "PROFESSIONAL" ? "PROFESSIONAL" : "PERSONAL";

  const contact = await createContact({ name, email, phone, type });
  return res.json({ contact });
});

router.put("/:id", (req, res) => {
  return res.json({ msg: `Your Id is ${req.params.id}`, body: req.body });
});
router.patch("/:id", (req, res) => {
  return res.json({ msg: `Your Id is ${req.params.id}` });
});

router.delete("/:id", async (req, res) => {
  const contact = await deleteContactById(req.params.id);
  return res.json({ msg: `Contact Deleted ${req.params.id}`, contact });
});

export default router;
