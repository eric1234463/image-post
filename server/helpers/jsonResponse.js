const { STATUS_CREATED, STATUS_OK } = require('../constants/Response');
const recursiveDeepCopy = require('./recursiveDeepCopy');

class JsonResponse {
  constructor(data = {}, statusCode) {
    if (statusCode === STATUS_CREATED || statusCode === STATUS_OK) {
      this.data = data;
    } else {
      this.error = data;
    }
    this.statusCode = statusCode;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getResponse() {
    return recursiveDeepCopy({
      data: Array.isArray(this.data) ? this.data : {...this.data, },
      error: { ...this.error },
    });
  }
}

module.exports = JsonResponse;
