"use client";

import Gallery_section from "$component/about/Gallery_section/Gallery_section";
import About_section from "../../../components/about/About_section/About";
import Team_Section from "../../../components/about/Team_section/Team";

export default function AboutPage() {
  return (
    <>
      <main className="main">
        <About_section />

        <Gallery_section />

        <Team_Section />
      </main>
    </>
  );
}
