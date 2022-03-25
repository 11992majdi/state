import {Card} from 'react-bootstrap';
import React from "react";
import Counter from './Counter';



class ProfilePhoto extends React.Component{
   
    
    componentDidMount(){
        console.log('class component did mount');
    }
    componentDidUpdate(){
        console.log('class component did update');
    }
    componentWillUnmount(){
        console.log('class component will unmount');
    }
   
render (){
  return (
    <div>
<Card style={{ width: '18rem',marginLeft:530 ,marginTop:30}}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lg57xifVxkWX_GNaU2lDs1zlCbY9YXFmmA&usqp=CAU" />
  <Card.Body>
    <Card.Title>messi</Card.Title>
      <Card.Text>

      </Card.Text>
  
  </Card.Body>
</Card>
<Counter />
</div>
  );
};
};
export default ProfilePhoto;