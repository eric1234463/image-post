function recursiveDeepCopy(object) {
  if (!object) {
    return object;
  }

  if (typeof object !== 'object') {
    return object;
  }

  if (object instanceof Date && !Number.isNaN(object.valueOf())) {
    return object;
  }

  if (/^[0-9a-fA-F]{24}$/.test(object)) {
    return object.toString();
  }

  if (object instanceof Map) {
    const newObject = {};
    for (const [key, value] of object) {
      newObject[key] = value;
    }
    return recursiveDeepCopy(newObject);
  }

  if (Array.isArray(object)) {
    return object.map((element) => recursiveDeepCopy(element));
  }

  if (object.constructor.schema) {
    return recursiveDeepCopy(object.toObject());
  }

  return Object.keys(object).reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      acc[key] = recursiveDeepCopy(object[key]);
    }
    return acc;
  }, {});
}

module.exports = recursiveDeepCopy;
