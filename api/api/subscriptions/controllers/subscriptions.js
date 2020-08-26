"use strict";

const { sanitizeEntity } = require("strapi-utils");

const sanitizeSubscription = entity => {
  const subscription = sanitizeEntity(entity, {
    model: strapi.models.subscriptions
  });

  // Deletes default fields.
  delete subscription.created_by;
  delete subscription.updated_by;
  delete subscription.updated_at;

  return subscription;
};

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve the last 3 records.
   *
   * @return {Array}
   */
  async find() {
    const entities = await strapi.services.subscriptions.find();

    return entities.map(entity => sanitizeSubscription(entity));
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

    return sanitizeSubscription(entity);
  }
};
