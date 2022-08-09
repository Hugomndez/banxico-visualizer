import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import { Form, Header } from '../components';
import { FetchProvider } from '../contexts';

const Charts = dynamic(() => import('../components/Charts/'), {
  suspense: true,
});

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
        <Suspense fallback={`Loading...`}>
          <Charts />
        </Suspense>
      </main>
    </FetchProvider>
  );
}
