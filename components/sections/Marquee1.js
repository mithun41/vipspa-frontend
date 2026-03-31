const Marquee1 = ({ marqueeData }) => {
  // Data array ta ke items variable e nilam
  const items = marqueeData?.items || [];

  // Jodi backend theke kono karone data na ashe, tahole section-tai render hobe na
  if (items.length === 0) return null;

  return (
    <>
      <section className="marquee-section">
        <div className="marquee">
          {/* Prothom Group */}
          <div className="marquee-group">
            {items.map((item) => (
              <div key={`group1-${item.id}`} className="text" data-text={item.text}>
                {item.text}
              </div>
            ))}
          </div>

          {/* Dwitiyo Group (Seamless animation er jonno duplicate) */}
          <div aria-hidden="true" className="marquee-group">
            {items.map((item) => (
              <div key={`group2-${item.id}`} className="text" data-text={item.text}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Marquee1;