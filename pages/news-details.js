import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsDetails from "@/components/sections/innerpages/NewsDetails"
export default function pageNewsDetails() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="News Details" />
    <NewsDetails />
    </Layout>
    </>
  )
}