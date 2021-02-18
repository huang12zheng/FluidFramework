/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

'use strict';

// This package adds getTestLogger to global
process.env.FLUID_DI_LOGGERPKG = `${__dirname}/node_modules/@ff-internal/aria-logger`;
