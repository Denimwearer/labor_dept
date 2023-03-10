import PersonForm from './PersonForm'

class Person extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src={this.props.person.avatar} alt={this.props.person.name} />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Name:</span> {this.props.person.name} </h3>
              <p className='tile is-child box'><span>Phone:</span> {this.props.person.phone} </p>
              <p className='tile is-child box'><span>Key Skill:</span> {this.props.person.key_skill} </p>
              <p className='tile is-child box'><span>Age:</span>{this.props.person.age} </p>
            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning' onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>See Full List</button>
          </div>
          </div>
          </div>
          <PersonForm person={this.props.person}   handleSubmit={this.props.handleSubmit}/>
        </div>
    );
  }
}