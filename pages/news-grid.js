import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import NewsGrid from "@/components/sections/innerpages/NewsGrid";
export default function News() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Blog" />
        <NewsGrid />
      </Layout>
    </>
  );
}
