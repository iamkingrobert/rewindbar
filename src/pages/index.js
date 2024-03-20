import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <InfoSection />
    </Layout>
  );
}
