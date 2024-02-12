/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 **/

const routes = (module.exports = require('next-routes')());

routes
    .add({name: 'login', pattern: 'login'})
    .add('detailView', '/detailView/:id', 'detailView')
    .add('UserProfile', '/UserProfile/:user_id', 'UserProfile')
    .add('searchResult', '/searchResult/:searchData', 'searchResult')
    .add('profile', '/profile/:go_state', 'profile');