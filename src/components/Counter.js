
import React from 'react'

class Counter extends React.Component {
state = { count: 0 };
 
componentDidMount() {
  const newInterval = setInterval(() => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }, 1000);
  }

   componentWillUnmount(){
       clearInterval();
     }
     
render() {

  return (
    <div>
         <h1> {this.state.count} seconds</h1>
    </div>
  );
};
}
export default Counter