import { useState } from 'react';
  const Faq = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
  return (
    <>

    <section className="">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="accordion-box wow fadeInRight">
              {/* Block */}
              <li className="accordion block active-block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  How to soft launch your business?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  Is my technology allowed on tech?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  How to turn visitors into contributors
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  How can i find my solutions?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};
export default Faq