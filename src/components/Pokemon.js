import React from 'react';

class Pokemon extends React.Component {
  render() {
    console.log(this.props.family);
    const card = this.props.family.map((item, i) => {
      return (
        <li className="" key={i}>
          {item}
        </li>
      );
    });

    return (
      <div className="container-border">
        <img src={this.props.img} alt={this.props.name} className=""></img>
        <div className="">
          <h2>{this.props.name}</h2>
          <ul>{card}</ul>
        </div>
      </div>
    );
  }
}
export default Pokemon;
