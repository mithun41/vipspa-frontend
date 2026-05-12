import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Contact from "@/components/sections/innerpages/Contact";

export default function PageContact() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}   pageName="contact" canonicalPath="/page-contact" >
        <PageTitle pageName="Contact Us" />

        <Contact />
      </Layout>
    </>
  );
}
