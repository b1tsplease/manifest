"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, populate) {
    return strapi.query("subscriptions").find(params, populate);
  },

  /**
   * Promise to search records
   *
   * @return {Promise}
   */
  search(params) {
    return strapi.query("subscriptions").search(params);
  },

  /**
   * Promise to count record
   *
   * @return {Promise}
   */
  count(params) {
    return strapi.query("subscriptions").count(params);
  },

  /**
   * Promise to add record
   *
   * @return {Promise}
   */
  async create(data) {
    const entry = await strapi.query("subscriptions").create(data);
    return entry;
  }
};
