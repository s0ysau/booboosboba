module.exports = (req, res, next) => {
  if (!req.customer) return res.status(401).json('Unauthorized')
  next()
}
