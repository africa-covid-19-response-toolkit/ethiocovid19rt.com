import React from 'react';
let listOfImages = [];

class Partners extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context('assets/img/partners', false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    const logos = listOfImages.map((image) => (
      <div>
        <img alt="..." src={image} />
      </div>
    ));

    const content = (
      <div>
        <div className="partners-section  ">
          <div className="title">
            <h2 class="display-3">Corporate Sponsor</h2>
          </div>
          <div className="partners-list">{logos}</div>
        </div>
        <div className="partners-section  ">
          <div className="title">
            <h2 class="display-3">More Partners</h2>
            <div > Coming soon ...</div>
          </div>
        </div>
      </div>
    );

    return listOfImages.length ? content : '';
  }
}

export default Partners;
