"use client";

import "./globals.css";
import { Web3Modal } from "./contexts/web3Modal";
import { WrappedToastContainer } from "./components/Toast";
import { Navbar } from "./components/layout/Navbar";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ClientRehydration from "./utils/ClientRehydration";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export default function RootLayout(props: PropsWithChildren<{}>) {
  return (
    <html>
      <body>
        <ClientRehydration>
          <Web3Modal>
            <QueryClientProvider client={queryClient}>
              <WrappedToastContainer />
              <Navbar />
              <div className="pt-16">{props.children}</div>
            </QueryClientProvider>
          </Web3Modal>
        </ClientRehydration>
      </body>
    </html>
  );
}
