import React from "react";

import "./recepty-styles.css";

class Recept extends React.Component {
  state = {
    isPostupTrue: true
  };

  handleClick = () => {
    this.setState(prevState => {
      return { isPostupTrue: !prevState.isPostupTrue };
    });
  };
  render() {
    const { img, receptName, postupTitle, popis, suroviny } = this.props;
    return (
      <article className="recept-container">
        <div className="recept-img">
          <img src={img} alt={receptName} />
        </div>
        <div className="recept-text">
          <h1>{receptName}</h1>
          {this.state.isPostupTrue ? (
            <div>
              <h2>Co budeme potřebovat?</h2>
              {suroviny}
            </div>
          ) : (
            <div>
              <h2 className="recept-postup-title">{postupTitle}</h2>
              <p className="recept-postup-text">{popis}</p>
            </div>
          )}

          <button className="recept-btn" onClick={this.handleClick}>
            {this.state.isPostupTrue ? <p>Postup</p> : <p>Suroviny</p>}
          </button>
        </div>
      </article>
    );
  }
}

export default Recept;
