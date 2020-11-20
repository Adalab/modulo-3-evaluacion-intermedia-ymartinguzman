import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const card = this.props.family.map((item, i) => {
      return <li key={i}>{item}</li>;
    });

    return (
      <div className="container-border">
        <img className="image" src={this.props.img} alt={this.props.name}></img>
        <div>
          <h2 className="title-card">{this.props.name}</h2>
          <ul className="title-type">{card}</ul>
        </div>
      </div>
    );
  }
}
Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};
export default Pokemon;
