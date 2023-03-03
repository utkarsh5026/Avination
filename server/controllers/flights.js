const Flight = require("../models/flights");
const respone = require("../utils/response");

async function getFlights(req, res, next) {
  const { date, from, to } = req.query;
  const flights = await Flight.getFlights(date, from, to);
  return respone.Http200Response(flights).send(res);
}

module.exports = {
  getFlights,
};
