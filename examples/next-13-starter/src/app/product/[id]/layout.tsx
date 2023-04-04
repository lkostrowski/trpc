import React from 'react';
import { api } from 'trpc-api';
import { Boundary } from '~/components/boundary';
import { Header } from './(components)/header';

export const metadata = {
  title: 'Streaming (Edge Runtime)',
};

export default async function Layout(props: { children: React.ReactNode }) {
  const session = await api.session.query();
  const user = session?.user;

  return (
    <>
      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <ul>
          <li>
            Primary product information is loaded first as part of the initial
            response.
          </li>
          <li>
            Secondary, more personalized details (that might be slower) like
            ship date, other recommended products, and customer reviews are
            progressively streamed in.
          </li>
          <li>Try refreshing or navigating to other recommended products.</li>
        </ul>
      </div>

      <Boundary animateRerendering={false} labels={['Demo']} size="small">
        <div className="space-y-10">
          {/** @ts-expect-error Async Server Component */}
          <Header user={user} />

          {props.children}
        </div>
      </Boundary>
    </>
  );
}