--8<-- "test123.md"

## Start Your Server
> Look in the package.json file for a section labeled "scripts".  
> Here you will find a list of scripts which act as shortcuts for you to run and/or test your project.  
> Most commonly you will use the start script.  
> If the **start** script is listed, in the terminal paste: <copy>npm start</copy>  
> You should see your server start and connect to the websocket server.  
> If you are having issues during this step, ask a proctor for assistance.  
> 
> ---

## Log Into Accounts For Testing

### Log into the Webex Contact Center Agent Desktop
> Launch the Webex Contact Center [Agent Desktop](https://desktop.wxcc-us1.cisco.com){:target="_blank"} 
> Log in using the admin credentials   
> Select **Handle calls using**: Desktop  
> Click **Save & Continue**  
> 
> ---

### Log into Webex Messages
> Launch the Webex [web UI](https://web.webex.com){:target="_blank"}  
> Log in using the admin credentials  
> 
> ---

## Basic Testing
In this section you will be testing the basic functionality of a new message creating a new interaction (task), being able to send messages in both directions, having the close task action send a message to alert the user that the interaction has completed, and that sending a new message after the task is completed will create a new interaction with the same functionality. 

### Send a new message from Webex to your bot
> In the Webex Messaging Web UI  
>> In the search box at the top of the window, Enter your bot's address: <copy><w class="podInfo"></w>-LAB-21184@webex.bot</copy>  
Select your bot from teh search results  
Send your first test message to create a new task in the Webex Contact Center: <copy>First inbound test message</copy>  

> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received two response messages from WxCC  
      1. Welcome to the test chat.
      2. You are in the queue

---

### Accept the new incoming contact in the **Agent Desktop**
> In the Agent Desktop, change your agent state to **Available**  
> You will be offered the task, click the accept button  
> 
> ---

#### Confirm the following
1. You should see The initial message you sent to start the interaction.  
2. You should see the messages sent from the flow.  

---

### Send a response/greeting message from the **Agent Desktop**
> In the **Agent Desktop** sent the test reply message: <copy>Test greeting from the agent desktop</copy>
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message from WxCC and sending the message you Webex.  
2. In the Webex Messaging Web UI, you should see the message sent from the agent desktop in the conversation with your bot. 
 
---

### Send a response/greeting message from the **Webex Messaging Web UI**
> In the **Webex Messaging Web UI** send the message: <copy>Test response to agent greeting.</copy>
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message
2. You should have received the response message in WxCC. 
---

### End the Task in the **Agent Desktop**
> In the Agent Desktop, Click the red End button to end the interaction.
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the task:ended event
2. You should have received a response message from WxCC noting that the conversation has ended.
---

### Create a New Message in the **Webex Messaging Web UI**
This will test that new messages after closing a previous task will create a new task.
> In the Webex WebUI:  
>> Send a new message to your bot to create a new task in the Webex Contact Center: <copy>New message after a closed task to create a new task</copy>  
> 
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
---

### Accept the new incoming contact in the **Agent Desktop**
> In the Agent Desktop, change your agent state to **Available** (if it is not currently set to **Available** from the previous test)  
> You will be offered the task, click the accept button  
> 
> ---

#### Confirm the following
1. You should see The initial message you sent to start the interaction.  
2. You should see the messages sent from the flow.  

---

### Send a response/greeting message from the **Agent Desktop**
> In the **Agent Desktop** sent the test reply message: <copy>Test greeting from the agent desktop</copy>
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message from WxCC and sending the message you Webex.  
2. In the Webex Messaging Web UI, you should see the message sent from the agent desktop in the conversation with your bot. 
 
---

### Send a response/greeting message from the **Webex Messaging Web UI**
> In the **Webex Messaging Web UI** send the message: <copy>Test response to agent greeting.</copy>
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message
2. You should have received the response message in WxCC. 
---

### End the Task in the **Agent Desktop**
> In the Agent Desktop, Click the red End button to end the interaction.
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the task:ended event
2. You should have received a response message from WxCC noting that the conversation has ended.
---


## Adding A Second Interaction
In this section you will be adding a second concurrent interaction from another webex account (the user account) to confirm that the message threads and actions are kept separate. 


### Log Into the **Webex Messaging Web UI** in a Private Browser Session  
> Open a private browser session/incognito browser session  
> Navigate to: <copy>https://web.webex.com</copy>  
> Log in using the user credentials  
> 
> ---

### Send a new message from the **user** account's Webex to your bot
> In the Webex Messaging Web UI  
>> In the search box at the top of the window, Enter your bot's address: <copy><w class="podInfo"></w>-LAB-21184@webex.bot</copy>  
Select your bot from teh search results  
Send your first test message to create a new task in the Webex Contact Center: <copy>Message from user account</copy>  

> ---


#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
---

### Accept the new incoming contact in the **Agent Desktop**
> In the Agent Desktop, change your agent state to **Available** (if it is not currently set to **Available** from the previous test)  
> You will be offered the task, click the accept button  
> 
> ---

#### Confirm the following
1. You should see The initial message you sent to start the interaction.  
2. You should see the messages sent from the flow.  

---

### Send a new message from the **admin** account's Webex to your bot
> In the Webex Web UI of the **admin account**:  
>> Send a new message to your bot to create a new task in the Webex Contact Center: <copy>Message from admin account</copy>     

> ---
#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
---

### Accept the new incoming contact in the **Agent Desktop**
> In the Agent Desktop, change your agent state to **Available** (if it is not currently set to **Available** from the previous test)  
> You will be offered the task, click the accept button  
> 
> ---

#### Confirm the following
1. You should see The initial message you sent to start the interaction.  
2. You should see the messages sent from the flow.  
---

### Send a reply from the agent desktop to the **user account** interaction 
> Send the message: <copy>Response to User Account</copy>
> 
> ---

#### Confirm the following
1. The response message was sent to the user account and not the admin account
   
---

### Send a reply from the agent desktop to the **admin account** interaction 
> Send the message: <copy>Response to Admin Account</copy>
> 
> ---

#### Confirm the following
1. The response message was sent to the admin account and not the user account
   
---

### Send a reply from the admin account's webex
> Send the message: <copy>Response from Admin Account</copy>
>
> ---

#### Confirm the following
1. The response message was sent to the admin account interaction and not the user account interaction
   
---

### Send a reply from the user account's webex
> Send the message: <copy>Response from user Account</copy>
>
> ---

#### Confirm the following
1. The response message was sent to the user account interaction and not the admin account interaction
   
---

### End the task of the admin account's interaction
> In the Agent Desktop, Click the red End button to end the admin account's interaction.
>
> ---

#### Confirm the following
1. In the admin account's Webex, the task receives the message that the interaction has closed.
2. In the user account's Webex, the task has not received the message about the interaction ending.
---

### End the task of the user account's interaction
> In the Agent Desktop, Click the red End button to end the admin account's interaction.
>
> ---


#### Confirm the following
1. In the user account's Webex, the task has not received the message about the interaction ending.

---


