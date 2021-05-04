import React from 'react'

class Pet extends React.Component {


  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}lbs</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
