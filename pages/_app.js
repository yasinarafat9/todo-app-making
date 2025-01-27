import "@/styles/globals.css";
import { AuthUserProvider } from "@/firebase/auth";
import Head from "next/head";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>JS Dev - Todo App</title>
            </Head>
            <AuthUserProvider>
                <Component {...pageProps} />
            </AuthUserProvider>
        </>
    );
}
