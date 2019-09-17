require('@babel/register')({
   presets: ['@babel/preset-env', '@babel/preset-react']
})

const Sitemap = require('react-router-sitemap').default
const router = require('../src/components/AppRoutesSitemap')

function generateSitemap() {
   return new Sitemap(router).build('https://jump-park-test.netlify.com/').save('./dist/sitemap.xml')
}

generateSitemap()
