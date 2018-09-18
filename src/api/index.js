class Helper {
  static baseURL() {
    return "https://yelp.apie.xyz";
  }
  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
  }

  /**
   * Simplifies the api request
   * @param urlQuery
   * @param method
   * @param sendData
   * @returns {Promise<Response | never>}
   */
  static simpleFetch(urlQuery, method, sendData) {
    let requestData = {
      method,
      headers: Helper.headers(),
      body: JSON.stringify(sendData)
    };
    if (method === "GET") delete requestData.body;
    return fetch(`${Helper.baseURL()}${urlQuery}`, requestData).then(res => {
      return res.json();
    });
  }
}

export default class YelpApi {
  /**
   * Look up business by alias
   * @param {String} alias
   * @returns {*}
   */
  static lookup(alias) {
    return Helper.simpleFetch("/lookup", "POST", { alias });
  }

  /**
   * Search by options
   * @param {Object} query
   * @param {Object} options
   * @returns {*}
   */
  static search(query, options) {
    return Helper.simpleFetch("/search", "POST", Object.assign(query, options));
  }

  /**
   * Get delivery's by location
   * @param {Object} location
   * @returns {*}
   */
  static delivery(location) {
    return Helper.simpleFetch("/delivery", "POST", location);
  }

  /**
   * Auto complete search field
   * @param {Object} query
   * @param {Object} options
   * @returns {*}
   */
  static autoComplete(query, options) {
    return Helper.simpleFetch(
      "/complete",
      "POST",
      Object.assign(query, options)
    );
  }

  /**
   * Get Business reviews by alias
   * @param {Object} alias
   * @returns {*}
   */
  static getReviews(alias) {
    return Helper.simpleFetch("/complete", "POST", alias);
  }

  /**
   * Get Lat,lng based on address,zip
   * @param {Object} location
   * @returns {*}
   */
  static getLatLng(location) {
    return Helper.simpleFetch("/location", "POST", location);
  }
}
