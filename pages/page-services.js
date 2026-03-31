import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/innerpages/Services";
import PageTitle from "@/components/sections/PageTitle";
import WhyChooseUs4 from "@/components/sections/WhyChooseUs4";


export default function PageTestimonial() {
  
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Services" />
        <Services />
        <WhyChooseUs4 />
      </Layout>
    </>
  );
}
