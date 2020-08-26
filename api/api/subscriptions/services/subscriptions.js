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

  async create(data, { files } = {}) {
    const entry = await strapi.query("subscriptions").create(data);

    if (files) {
      // automatically uploads the files based on the entry and the model
      await strapi.entityService.uploadFiles(entry, files, {
        model: "subscriptions"
        // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
      });
      return this.findOne({ id: entry.id });
    }

    return entry;
  }
};
