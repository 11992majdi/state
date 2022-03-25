import React from 'react'
import ProfilePhoto from './ProfilePhoto';


class Profession extends React.Component {
  state={
    Profession:'footballeur'
  };
  componentDidMount(){
    console.log('class component did mount');
}
componentDidUpdate(){
    console.log('class component did update');
}
componentWillUnmount(){
    console.log('class component will unmount');
}

  render(){
  return (
    <div>
       <h3>{this.state.Profession}</h3>
       <ProfilePhoto />
    </div>
  )};
}
export default Profession