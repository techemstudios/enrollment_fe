import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Sections from '@/components/Sections'
import Section from '@/components/Section'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sections',
      component: Sections
    },
    {
      path: '/section',
      name: 'Section',
      component: Section
    }
  ]
})
