/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: [
         "cdn.imagin.studio",
         "firebasestorage.googleapis.com",
         "lh3.googleusercontent.com",
      ],
   },
   async headers() {
      return [
         {
            source: "/auth",
            headers: [
               {
                  key: "Cross-Origin-Embedder-Policy",
                  value: "unsafe-none",
               },
            ],
         },
      ];
   },
};

module.exports = nextConfig;
