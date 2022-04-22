let data = {};

export const getWsiteData = (req, res) => {
  res.send(data);
};

export const setWsiteData = (req, res) => {
  data = { ...req.body };

  res.status(200).send("Successfully posted new data");
};
