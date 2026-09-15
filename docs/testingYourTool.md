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
> Launch the Webex Contact Center [Agent Desktop](https://desktop.wxcc-us1.cisco.com){target:"_blank"}  
> Log in using the admin credentials   
>
> ---

### Log into Webex Messages
> Launch the Webex [web UI](https://web.webex.com){target:"_blank"}  
> Log in using the admin credentials  
>
> ---

## Basic Testing

### Send a new message from Webex to your bot
> In the Webex Messaging Web UI  
>>  
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
3. 
---

### Accept the new incoming contact in the **Agent Desktop**
> Change your agent state to Available
> 
> ---

#### Confirm the following
1. You should see The initial message you sent to start the interaction.  
2. You should see the messages sent from the flow.  
3. 
---

### Send a response/greeting message from the **Agent Desktop**
> In the **Agent Desktop**
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
3. 
---

### Send a response/greeting message from the **Webex Messaging Web UI**
> In the **Webex Messaging Web UI**
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
3. 
---

### End the Task in the **Agent Desktop**
>
>
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
3. 
---

### Create a New Message in the **Webex Messaging Web UI**
>
> 
> ---

#### Confirm the following
1. You should see entries in the terminal window from receiving the message and creating the new task.  
2. You should have received a response message from WxCC. 
3. 
---

## Adding A Second Interaction

### Log Into the **Webex Messaging Web UI** in a Private Browser Session  
> 
> 
> ---



---

Testing should include:  
Prerequisites:  
- logging into the agent desktop  
- logging into webex as Admin  
- Logging into webex as user  
- Ability to change status  

Tests:  
- Creating a new message which creates a new task  
- task gets routed and answered  
- bidirectional communications  
- ending the task sends the message.  
- user account doing the same as above.  
- concurrent tasks.  
- maybe do a transfer??  


