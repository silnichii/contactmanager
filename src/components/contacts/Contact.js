import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';



class Contact extends Component {
  
  state = {
    showInfo: false
  }

  onShowClick = () => {
    this.setState({showInfo: !this.state.showInfo})
  };

  onDeleteClick = (id, dispatch) => {



    dispatch({type: 'DELETE_CONTACT', payload: id});
  };



  render() {
    return (

      <Consumer>
        {value => {
          return (
            <div className="card card-body my-2 p-3"> 
              <h4 style={{margin:"0"}}>
                {this.props.contact.name}
                {this.state.showInfo ? (
                  <i onClick={this.onShowClick} className="fas fa-angle-up ml-3" style={{cursor: "pointer"}}></i>
                ) : (
                  <i onClick={this.onShowClick} className="fas fa-angle-down ml-3" style={{cursor: "pointer"}}></i>
                )}
                <i 
                  onClick={this.onDeleteClick.bind(this, this.props.contact.id, value.dispatch)}
                  className="fas fa-trash-alt text-secondary" 
                  style={{
                    fontSize: "15px",
                    float: "right", 
                    cursor: "pointer",
                    lineHeight: "28px"
                  }}>
                </i>
                
              </h4>
              {this.state.showInfo ? (
                <ul className="list-group mt-3">
                  <li className="list-group-item">
                    <i className="fa fa-envelope mr-2"></i>
                    {this.props.contact.email}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-mobile-alt mr-2"></i>
                    {this.props.contact.phone}
                  </li>
                </ul>
                ) : null
              }
            </div>
          )
        }}
      </Consumer>



    )
  }
}


Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;
