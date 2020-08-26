"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */
  async find(ctx) {
    let entities;

    if (ctx.query._q) {
      entities = await strapi.services.subscriptions.search(ctx.query);
    } else {
      entities = await strapi.services.subscriptions.find(ctx.query);
    }

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.subscriptions })
    );
  },

  /**
   * Count records.
   *
   * @return {Number}
   */
  count(ctx) {
    return strapi.services.subscriptions.count(ctx.query);
  },

  /**
   * Create a record.
   *
   * @return {Object}
   */
  async create(ctx) {
    const entity = await strapi.services.subscriptions.create(ctx.request.body);

    return sanitizeEntity(entity, { model: strapi.models.subscriptions });
  }
};
