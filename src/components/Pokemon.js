import React from 'react';


class Pokemon extends React.Component {
  render() {
   const pokemonCard = this.props.data.map((item, i)=>{
     return(
       <li>{item}</li>
     )
   }
   )
   }

    return (      
      <>
        <img src={this.props.url} ></img>
        <h2></h2>
        <h3></h3>
     </>
     
    );
  }
}
export default Pokemon;
