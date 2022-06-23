export default class BadResponseError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'BadResponseError';
  }
}
