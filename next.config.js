require('dotenv').config()

const withPlugins = require('next-compose-plugins')
const path = require('path')
const withReactSvg = require('next-react-svg')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const { hostname } = new URL(process.env.REACT_APP_API)

const nextConfig = {
  env: {
    REACT_APP_API: process.env.REACT_APP_API,
    REACT_APP_DEVELOPER_NAMESPACE: process.env.REACT_APP_DEVELOPER_NAMESPACE,
  },
  include: path.resolve(__dirname, '.'),
  
}

module.exports = withPlugins([withBundleAnalyzer, withReactSvg], nextConfig)
