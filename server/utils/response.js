const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class Response {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  send(res) {
    res.status(this.status).json(this);
  }
}

class Http200Ok extends Response {
  constructor(data) {
    super(StatusCodes.OK, ReasonPhrases.OK, data);
  }
}

class Http201Created extends Response {
  constructor(data) {
    super(StatusCodes.CREATED, ReasonPhrases.CREATED, data);
  }
}

class Http204NoContent extends Response {
  constructor(data) {
    super(StatusCodes.NO_CONTENT, ReasonPhrases.NO_CONTENT, data);
  }
}

class ErrorResponse extends Response {
  constructor(status, message) {
    super(status, message, data, null);
  }
}

class Http400BadRequest extends ErrorResponse {
  constructor() {
    super(StatusCodes.BAD_REQUEST, ReasonPhrases.BAD_REQUEST);
  }
}

class Http401UnAuthorized extends ErrorResponse {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED);
  }
}

class Http404NotFound extends ErrorResponse {
  constructor() {
    super(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
  }
}

module.exports = {
  Http200Ok,
  Http201Created,
  Http204NoContent,
  Http400BadRequest,
  Http404NotFound,
  Http401UnAuthorized,
};
