import Head from 'next/head';
import { Charts, Form, Header } from '../components';
import { FetchProvider } from '../contexts';

export default function Home() {
  return (
    <FetchProvider>
      <Head>
        <title>Banxico Visualizer</title>
        <meta
          name='description'
          content='Banxico Visualizer created using NextJS and deployed with Vercel.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Form />
        <Charts />
      </main>
    </FetchProvider>
  );
}
