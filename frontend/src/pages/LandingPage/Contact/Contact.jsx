import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Contactez-nous</h1>
      <div className="row">
        <div className="col-md-6">
          
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Localisation</h2>
          <p>Hôpital Taher Sfar, Mahdia, Tunisie</p>
          <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="URL_DE_GOOGLE_MAPS" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
