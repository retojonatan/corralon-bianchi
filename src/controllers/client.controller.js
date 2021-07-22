const clientCtrl = {};
const Client = require("../models/Client");

clientCtrl.index = (req, res) => {
  res.render("clientes");
};

clientCtrl.listClients = async (req, res) => {
  const clientList = await Client.find();
  res.json(clientList);
};

clientCtrl.getClient = async (req, res) => {
  const { id } = req.params;
  const client = await Client.findById(id);
  res.json(client);
};

clientCtrl.createClient = async (req, res) => {
  try {
    const { name, alias, email, tel, cuil, fiscal, localidad, address, dni } =
      req.body;
    const client = new Client({
      name,
      alias,
      email,
      tel,
      cuil,
      fiscal,
      localidad,
      address,
      dni,
    });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send("There was a problem registering the client");
  }
};

clientCtrl.editClient = async (req, res) => {
  try {
    const clientEdited = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!clientEdited) {
      return res.status(204).json({ message: "client not found" });
    } else {
      return res.json(clientEdited);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("There was a problem editing the client");
  }
};

clientCtrl.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const clientDeleted = await Client.findByIdAndDelete(id);
    if (!clientDeleted) {
      return res.status(204).json({ message: "client not found" });
    } else {
      return res.json(clientDeleted);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a problem deleting the client");
  }
};

module.exports = clientCtrl;
