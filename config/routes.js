/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  pages
  'get /':                            'HomeController.index',
  'get /login':                       'AuthController.login',
  'get /admin/dashboard':             'admin/DashboardController.index'
  // 'get /admin/users':             'admin/UsersController.index'

  //  downloads
  //  webhooks
  //  apis

};
