import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import InfoSectionThree from "../components/infoSectionThree";
import InforSectionFour from "../components/InforSectionFour";
import InfoSectionFive from "../components/infoSectionFive";

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <InfoSection /> */}
      {/* <InfoSectionThree/> */}
      <InforSectionFour/>
      <InfoSectionFive/>

    </Layout>
  );
}
