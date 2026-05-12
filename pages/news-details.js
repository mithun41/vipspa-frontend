import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsDetails from "@/components/sections/innerpages/NewsDetails"
export default function pageNewsDetails() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1} pageName="blog" canonicalPath="/news-details" headTitle="News Details">
    <PageTitle pageName="News Details" />
    <NewsDetails />
    </Layout>
    </>
  )
}