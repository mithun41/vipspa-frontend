import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetails from "@/components/sections/innerpages/ServiceDetails";

export default function PageServiceDetails() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Services Details" />

        <ServiceDetails />
      </Layout>
    </>
  );
}
