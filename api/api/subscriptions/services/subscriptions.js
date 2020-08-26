"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Promise to fetch the last 3 records
   *
   * @return {Promise}
   */
  find() {
    return strapi
      .query("subscriptions")
      .find({ _limit: 3, _sort: "created_at:desc" });
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
