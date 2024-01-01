This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Development Server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (Port may be different if multiple servers are being run)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build the Project

To build the project in static form, run:
```bash
npm run build
```

This will create the website in the `/out/` directory to be uploaded to UCSD servers.

# Upload the website

Using [Cisco AnyConnect](https://www.cisco.com/c/en/us/support/security/anyconnect-secure-mobility-client-v4-x/model.html), connect to the UCSD VPN (vpn.ucsd.edu).

Next, run

```bash
scp -r ./out/* eceusc@acsweb.ucsd.edu:~/public_html
```

Enter the password to the ECE USC account and the website should upload.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
