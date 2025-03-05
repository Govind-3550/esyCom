'use strict';

/**
 * mediatest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mediatest.mediatest');
