import Link from "next/link";

const Team2 = ({ teamData }) => {
  const items = teamData?.items || [];

  // Jodi data na thake tahole section-ta dekhano dorkar nai
  if (items.length === 0) return null;

  return (
    <>
      <section className="team-section-two">
        <div className="team2-2 bounce-y"></div>
        <div className="leaf4 bounce-x"></div>
        <div className="auto-container">
          {/* Section Title */}
          <div className="sec-title text-center">
            <figure className="image">
              <img src="/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">Our team</span>
            <h2 className="words-slide-up text-split">
              Meet Certified Therapist
            </h2>
          </div>

          <div className="row">
            <div className="team-column col-xl-12">
              <div className="inner-column">
                {items.map((member) => (
                  <div className="team-block-two" key={member.id}>
                    <div className="inner-box">
                      <div className="info-box">
                        <h3 className="name">
                          {/* Profile details page thakle member.id pass kora jay */}
                          <Link href={`/page-team-details`}>{member.name}</Link>
                        </h3>
                        <span className="designation">
                          {member.designation}
                        </span>
                      </div>

                      <Link className="icon" href={`/page-team-details`}>
                        <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                      </Link>

                      {/* Dynamic Background Image */}
                      <div
                        className="bg-image"
                        style={{
                          backgroundImage: `url(${member.photo || "/images/resource/1.png"})`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team2;