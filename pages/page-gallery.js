import Layout from "@/components/layout/Layout";
import Gallery from "@/components/sections/innerpages/Gallery";
import PageTitle from "@/components/sections/PageTitle";

export default function PageGallery() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} pageName="gallery"  canonicalPath="/page-gallery" >
        <PageTitle pageName="Gallery" />
        <Gallery />
      </Layout>
    </>
  );
}
