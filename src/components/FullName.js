import React from 'react'
import Profession from './Profession';


class FullName extends React.Component {
    state={
        name:'lionel messi'
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
        <h1>{this.state.name}</h1>
        <Profession/>
       
    </div>
  )}
};

export default FullName;