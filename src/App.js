import React, {useState, useEffect} from 'react';
import {FormControl,Input,BottomNavigation} from '@material-ui/core';
import db from './Firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';

const App=()=> {

  const [input, setInput]= useState('');
  const [messages, setMessages]= useState([{username:'',message:''}]);
  const [username, setUsername]= useState('');

  useEffect(()=> {
  	setUsername(prompt('Enter your name here'))
  },[])


  useEffect(() => {
  	db.collection('messages')
  	.orderBy('timestamp', 'desc')
  	.onSnapshot(snapshot=>{
  		setMessages(snapshot.docs.map(doc=>({id:doc.id, message:doc.data()})))
  	})
  }, [])
  
  const sendMessage=(event)=>{
  	event.preventDefault();
  	db.collection('messages').add({
  		message:input,
  		username:username,
  		timestamp:firebase.firestore.FieldValue.serverTimestamp()
  	})
  	
  	setInput('');
  }
  

  
 

  return (
    <div className="App">
    <div className="messages">
    <div className='content'>
    <p>Refresh to log out</p>
      <img className='image' 
      src="chat.png" 
      alt=''/>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital@1&display=swap" rel="stylesheet"/>
      <h1 style={{fontFamily:'Lobster,cursive'}}>ChatWare</h1>
      <p>Powered by ©Souvik Nath</p>
      <h3 style={{fontFamily:'Balsamiq Sans'}}>Welcome {username}</h3>

    </div>
      <FlipMove>
	  	{
      	messages.map(({message,id}) => 
      		
      		(
 				<Message key={id}  username={username} message={message}/>
 			)
      	)
      }
	  </FlipMove>
	  </div>

	  <BottomNavigation>
      <form className='form__app'>
      	<FormControl className='app__formControl'>
		  <Input className='app__input' type='text' placeholder='Type your messages here' value={input} onChange={event=>setInput(event.target.value)}/>
		  <IconButton className='app__iconButton' variant="contained"
	      	disabled={!input} 
	      	color="primary"
	      	type='submit' 
	      	onClick={sendMessage} >
	      	<SendIcon/>
	      </IconButton>
		</FormControl>
	  </form>
	  </BottomNavigation>
    </div>
  );
}

export default App;
