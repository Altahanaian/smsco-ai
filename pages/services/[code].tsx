import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface Service {
  code: string;
  name_ar: string;
  name_en: string;
  related: string[];
}

interface Props {
  service: Service;
}

export default function ServicePage({ service }: Props) {
  return (
    <>
      <Head>
        {/* اجمع كل النص في عبارة واحدة لتجنب Warning */}
        <title>{`${service.name_en} | ${service.name_ar}`}</title>
        <meta name="description" content={`Service: ${service.name_en}`} />
      </Head>
      <main>
        <h1>
          {service.name_en} / {service.name_ar}
        </h1>
        <p>Related Services: {service.related.join(', ')}</p>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services: Service[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data/services.json'), 'utf-8')
  );
  const paths = services.map((svc) => ({
    params: { code: svc.code },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const services: Service[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data/services.json'), 'utf-8')
  );
  const service = services.find((s) => s.code === params?.code)!;
  return { props: { service } };
};
