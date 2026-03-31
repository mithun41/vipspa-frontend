import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Faq from "@/components/sections/innerpages/Faq"

export default function PageFaq() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Faq" />

    <Faq />
    </Layout>
    </>
  )
}