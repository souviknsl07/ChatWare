import React,{forwardRef} from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './Message.css'

const Message=forwardRef(({message,username}, ref)=> {
	
	const isUser= username===message.username;
	
	return (
		<div ref={ref} className={`message ${isUser && 'message_user'}`}>
			<div style={{marginBottom:'5px'}}>
			{!isUser&&`${message.username || 'Unknown User'}`}
			</div>
			<Card className={isUser?'message_userCard':'message_guestCard'}>
		      <CardContent>
		      	<Typography className='text' color="white" variant="h5" component="h2">
		           {message.message}
		        </Typography>
	          </CardContent>
		    </Card>
		    
		</div>
		
		
	)
})

export default Message;