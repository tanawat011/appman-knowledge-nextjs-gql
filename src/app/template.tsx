"use client";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  if (true) {
    // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <ApolloProvider client={client}>
      <div className="bg-transparent">{children}</div>
    </ApolloProvider>
  );
}
