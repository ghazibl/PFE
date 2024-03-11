import React from 'react';
import '../Services/Services.css';

const Services = () => {
  return (
    <div>
      <section className="container" id="services">
        <h2 className="title">Services</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="icon">
                <i className="fas fa-edit"></i>
              </div>
              <div className="info">
                <h3>Script Writing</h3>
                <p>Research and write scripts for different topics that can then be directly recorded for video production</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="icon">
                <i className="fas fa-video"></i>
              </div>
              <div className="info">
                <h3>Video Production</h3>
                <p>Record and shoot videos taking into consideration proper settings, followed by production & post-production work</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="info">
                <h3>Curriculum Development</h3>
                <p>Develop complete curriculums for various technical topics to produce digital transformative courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
