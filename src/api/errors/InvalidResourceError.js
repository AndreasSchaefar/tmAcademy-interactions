export default class InvalidResourceError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'InvalidResourceError';
  }
}
