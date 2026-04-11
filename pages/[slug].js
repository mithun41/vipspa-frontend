import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head"; // ১. Head ইমপোর্ট করুন
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";

const DynamicPage = ({ data, error }) => {
  const router = useRouter();

  if (router.isFallback)
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <div className="text-center py-5">Loading...</div>
      </Layout>
    );

  if (error || !data) {
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Page Not Found" />
        <div className="container py-5 text-center">
          <h3>Page not found!</h3>
        </div>
      </Layout>
    );
  }

  return (
    <>
      {/* ২. এসইও এর জন্য মেটা ডাটা সেকশন */}
      <Head>
        <title>{data.meta_title || data.title} | VIP SPA</title>
        <meta
          name="description"
          content={
            data.meta_description ||
            data.subtitle ||
            "Best Spa service in the city"
          }
        />
        <meta property="og:title" content={data.meta_title || data.title} />
        <meta
          property="og:description"
          content={data.meta_description || data.subtitle}
        />
        {data.banner_image && (
          <meta property="og:image" content={data.banner_image} />
        )}
        <meta name="robots" content="index, follow" />
      </Head>

      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName={data.title} />

        <section className="service-details-area py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="content-side">
                  {/* মেইন কন্টেন্ট */}
                  <div
                    className="main-content mb-4"
                    style={{
                      lineHeight: "1.8",
                      fontSize: "1.1rem",
                      color: "#444",
                    }}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />

                  {/* ইমেজ */}
                  {data.banner_image && (
                    <div className="page-main-image my-4">
                      <img
                        src={data.banner_image}
                        alt={data.title}
                        className="img-fluid rounded shadow"
                        style={{
                          width: "100%",
                          maxHeight: "500px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}

                  {/* ইমেজের নিচের কন্টেন্ট */}
                  {data.bottom_content && (
                    <div
                      className="bottom-content mt-4"
                      style={{
                        lineHeight: "1.8",
                        fontSize: "1.1rem",
                        color: "#444",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.bottom_content }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    // আপনার সঠিক এপিআই ইউআরএলটি এখানে দিন
    const res = await axios.get(
      ` https://vipspa.pythonanywhere.com/api/vipspa/pages/${slug}/`,
    );
    return { props: { data: res.data, error: false } };
  } catch (err) {
    return { props: { data: null, error: true } };
  }
}

export default DynamicPage;
