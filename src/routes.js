export default [{
        path: '/',
        name: 'ARI_Home',
        component: require('./views/Home.vue'),

    },

    {
        path: '/*',
        name: 'Redirect',
        redirect: '/'
    },

];
