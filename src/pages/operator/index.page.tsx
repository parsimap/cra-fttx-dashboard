import ProtectedPage from "@/src/components/ProtectedPage";
import React from "react";
import Layout from "@/src/components/Layout";
import EXCards from "@/src/pages/operator/components/ExCards";

function Content() {
  return (
    <Layout mode={"light"}>
      <EXCards />
    </Layout>
  );
}

export default function Operator() {
  return (
    <ProtectedPage>
      <Content />
    </ProtectedPage>
  );
}
