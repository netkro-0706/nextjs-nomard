import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <style jsx global>{`
                a{
                    color: black;
                }
                `}</style>
        </div>
    );
}