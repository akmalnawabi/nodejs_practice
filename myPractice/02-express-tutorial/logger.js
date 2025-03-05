const logger = (req, res, next) => {
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(url, time);
  // res.send('loading...')
  next();
};

module.exports = logger