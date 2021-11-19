// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'useraccounts:iron-routing',
  summary: 'UserAccounts package providing routes configuration capability via iron:router.',
  version: '1.15.0',
  git: 'https://github.com/meteor-compat/useraccounts-iron-routing.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');

  api.use([
    'check',
    'iron:router@1.2.0',
    'underscore',
    'useraccounts:core@1.15.0',
  ], ['client', 'server']);

  api.imply([
    'useraccounts:core',
    'iron:router',
  ], ['client', 'server']);

  api.addFiles([
    'lib/core.js',
    'lib/server.js',
  ], ['server']);

  api.addFiles([
    'lib/core.js',
    'lib/client.js',
    'lib/templates_helpers/at_input.js',
  ], ['client']);
});
