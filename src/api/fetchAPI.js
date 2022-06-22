import BadResponseError from './errors/BadResponseError';
import InvalidResourceError from './errors/InvalidResourceError';

export default class FetchAPI {
  constructor(url) {
    this.url = url;
  }

  async fetch(query) {
    try {
      const response = await fetch(this.url + query);
      const { status } = response;
      if (status >= 200 && status <= 299) {
        const responseJSON = await response.json();
        return [responseJSON, null];
      }
      return [null, new BadResponseError(`Error fetching data, code ${status}`)];
    } catch (e) {
      return [
        null,
        new InvalidResourceError(
          `Error when attempting to fetch resource ${this.url + query}`,
        ),
      ];
    }
  }

  async fetchAll(urls) {
    const response = await Promise.all(
      urls.map((url) => this.fetch(url.substring(this.url.length))),
    );
    return response;
  }
}
