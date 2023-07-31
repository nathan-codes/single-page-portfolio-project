import "./Experience.css";

function Experience({ skills }) {
  return (
    <section className="Experience container">
      <div className="row">
        {skills.map((item,index) => {
          return (
            <div className="skill-card col col-12 col-md-6 col-lg-4"key={index}  >
              <h2 className="skill-title">{item.skill}</h2>
              <p className="skill-experience">{item.experience}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
