/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    transpilePackages: ['lucide-react'],
    images: {
        remotePatterns: [
            {
                hostname: 'firebasestorage.googleapis.com',
                protocol: 'https',
                port: '',
                pathname: '**'
            },
            {
                hostname: 'img.clerk.com',
                protocol: 'https',
                port: '',
                pathname: '**',
            },
            {
                hostname: 'lh3.googleusercontent.com',
                protocol: 'https',
                port: '',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
