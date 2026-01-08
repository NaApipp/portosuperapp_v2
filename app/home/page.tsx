import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experrience";
import SeeProject from "./components/SeeProject";
import Footer from "./components/footer";
import Head from "next/head";

export default function age() {
  return (
    <>
    <Head>
      <title>RPL 3 - SMKN 4 Kendal (Angkatan 23)</title>

        <meta
          name="description"
          content="Nabil Arif a.k.a Nabil Apipp Profile"
        />

        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Project Showcase" />
        <meta
          property="og:description"
          content="Education Of Nabil Arif, Experience Nabil Arif, and Contact Nabil Arif"
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        {/* opsional */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RPL 3 - SMKN 4 Kendal (Angkatan 23)",
              url: "https://rpl3-23.vercel.app/",
            }),
          }}
        />
    </Head>
      <div className="bg-[#08152F]">
        <Navbar />
        <main>
        <Hero/>
        <Education/>
        <Experience/>
        <SeeProject />
        </main>
        <Footer/>
      </div>
    </>
  );
}
