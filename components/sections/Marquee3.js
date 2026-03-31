
const Marquee3 = () => {
    return (
        <>
        <section className="marquee-section-two">
          <div className="marquee-two">
            <div className="marquee-group">
              <div className="text" data-text="Mesotherapy">Mesotherapy</div>
              <div className="text" data-text="Treatments">Treatments</div>
              <div className="text" data-text="Relax">Relax</div>
              <div className="text" data-text="Manicure">Manicure</div>
            </div>
      
            <div aria-hidden="true" className="marquee-group">
              <div className="text" data-text="Mesotherapy">Mesotherapy</div>
              <div className="text" data-text="Treatments">Treatments</div>
              <div className="text" data-text="Relax">Relax</div>
              <div className="text" data-text="Manicure">Manicure</div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Marquee3
