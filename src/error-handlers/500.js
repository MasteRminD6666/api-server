module.exports=(req ,res) => {
    const error = err.message ? err.message : err;

    const errormessage = {
      status: 500,
      message: error
    }
    res.status(500).json(errormessage);
  }