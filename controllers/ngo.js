const Ngo = require("../models/Ngo");

const getAllNgos = async (req, res) => {
  try {
    const ngos = await Ngo.find();
    res.status(200).json(ngos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNgo = async (req, res) => {
  try {
    const ngo = await Ngo.create(req.body);
    res.status(200).send(ngo);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getNgo = async (req, res) => {
  try {
    const ngoId = req.params.id;
    const ngo = await Ngo.findOne({
      _id: ngoId,
    });
    res.status(200).send(ngo);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllNgos,
  getNgo,
  createNgo,
};
