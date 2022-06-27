import Head from 'next/head';
import { Form, Header } from '../components';

export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}
