import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home.main',
            component: Home
        },
        {
            path: '/about',
            name: 'about.main',
            component: About
        },
        {
            path: '/portfolio',
            name: 'portfolio.main',
            component: Portfolio
        },
        {
            path: '/blog',
            name: 'blog.main',
            component: Blog
        },
        {
            path: '/contact',
            name: 'contact.main',
            component: Contact
        },
    ],
    mode: 'history'
})