const renderJson = (res, result) => {
  try {
    return res.status(result.getStatusCode()).json(result.getResponse());
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = renderJson;
