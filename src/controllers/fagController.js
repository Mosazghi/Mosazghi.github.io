const asyncHandler = require("express-async-handler");
const Fag = require("../models/fagmodel");



const getFag = asyncHandler(async (req, res) => {
  const fag = await Fag.findById(req.params.id);
  console.log("GET: ", fag);
  res.status(200).send(JSON.stringify(fag));
});

const getAlleFag = asyncHandler(async (req, res) => {
  const fager = await Fag.find();
  res.status(200).send(fager);
});

const setFag = asyncHandler(async (req, res) => {
  const fag = await Fag.create({
    emne: req.body.emne,
    semester: req.body.semester,
    beskrivelse: req.body.beskrivelse,
    karakter: req.body.karakter,
    link: req.body.link,
    emnetype: req.body.emnetype,
  });
  console.log("POST: ", fag);
  res.status(201).send(fag);
});

const updateFag = asyncHandler(async (req, res) => {});

const deleteFag = asyncHandler(async (req, res) => {});

module.exports = {
  getFag,
  getAlleFag,
  setFag,
  updateFag,
  deleteFag,
};
