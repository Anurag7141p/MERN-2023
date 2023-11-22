const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err;
    console.log(message.errors[0].message);
    res.status(400).json({ message: message.errors[0].message });
  }
};

module.exports = validate;
