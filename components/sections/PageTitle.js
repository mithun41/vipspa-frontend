import Link from "next/link";
import React from "react";

const PageTitle = (props) => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: "url(/images/background/pagetitlebg.webp)" }}
    >
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{props.pageName}</h1>
          {/* <div className="image-curve"></div> */}
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{props.pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
