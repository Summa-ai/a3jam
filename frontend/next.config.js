/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['cdn.builder.io']
    }
}

module.exports = nextConfig
