"use strict";

const isProd = () => {
  process.env.NODE_ENV === "production";
};

if (isProd) {
  require("dotenv").config;
}

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */
const { subscriptions } = require("../../scripts/seed");

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup"
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
};

const findPublicRole = async () => {
  const result = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" });
  return result;
};

const setDefaultPermissions = async () => {
  const allowedActions = ["count", "create", "find"];
  const role = await findPublicRole();
  const permissions = await strapi
    .query("permission", "users-permissions")
    .find({ type: "application", role: role.id });

  await Promise.all(
    permissions
      .filter(permission => {
        return allowedActions.includes(permission.action);
      })
      .map(permission =>
        strapi
          .query("permission", "users-permissions")
          .update({ id: permission.id }, { enabled: true })
      )
  );
};

const createSeedData = async () => {
  const subscriptionsPromises = subscriptions.map(subscription => {
    return strapi.services.subscriptions.create({
      ...subscription,
      author: null
    });
  });

  await Promise.all(subscriptionsPromises);
};

module.exports = async () => {
  const shouldSetDefaultPermissions = await isFirstRun();

  if (shouldSetDefaultPermissions) {
    await setDefaultPermissions();
    !isProd && (await createSeedData());
  }
};
