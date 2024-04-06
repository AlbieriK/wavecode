import type { AppProps } from 'next/app';
import "./styles.css"
import { Client, InternetIdentity } from '@bundly/ares-core';
import { IcpConnectContextProvider } from '@bundly/ares-react';
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    const client = Client.create({
        restCanisters: {
            backend: {
                baseUrl: process.env.NEXT_PUBLIC_API_REST_URL!
            }
        },
        providers: [
            new InternetIdentity({
                providerUrl: process.env.NEXT_PUBLIC_INTERNET_IDENTITY_URL!
            })
        ]
    });

    return (
        <IcpConnectContextProvider client={client}>
            <Component {...pageProps} />
        </IcpConnectContextProvider>
    )
}
