<script src="../assets/themHooks.js"></script>
<style>    button{
    border:solid 2px;
    border-radius: 25px;
    padding: 10px;
}
button:hover{
    background-color:rgb(195, 193, 201);
}
</style>

### Configure webhook for incoming bot messages
The webhook for Webex Contact Center Events has already been configured for you, but you will still need to subscribe to the Webex Messages `created` event from your bot account. To create the webhook, you will be using [this API](https://developer.webex.com/messaging/docs/api/v1/webhooks/create-a-webhook){target="_blank"}.  To make this step easier we have provided a button which will read the variables you have updated during the configuration steps to create and send the necessary API call.   

<button onClick="ensureWebexWebhook()">Create Webhook</button>

---

### Setting up your .env with the required variables
> Open the terminal pane in VS Code  
> ??? gif w50 "Show Me"
    ![Open Terminal](howToUse/assets/openTerminal.gif)
> Copy the .env.example file using this command in the terminal: <copy>Copy-Item .env.example .env</copy>    
>
> ---


### Use the values listed below to update your .env file  
!!! note w50
    If your .env file does not include ALL of these variables, that is okay.  
    This section should contain all of the potential options.  
    If you have questions, ask one of the proctors.
>
> Webex Bot Token: <copy><w class=botToken></w></copy>  
Webex Bot ID: <copy><w class=botID></w></copy>  
Webex API Base URL: <copy>https://webexapis.com</copy>  

> WxCC Business Address: <copy><w class="podInfo"></w>-LAB-21184</copy>  
WxCC API Base URL: <copy>https://api.wxcc-us1.cisco.com</copy>   
WxCC Client ID: <copy><w class=clientID></w></copy>  
WxCC Client Secret: <copy><w class=clientSecret></w></copy>  
WxCC Refresh Token: <copy><w class=rt></w></copy>  
WxCC Token URL: <copy>https://webexapis.com/v1/access_token</copy>  

> Webex Channel Name: <copy><w class=podInfo></w></copy>  

> Pair ID: <copy><w class=podInfo></w></copy>  
Bridge Base Web Socket URL: <copy>wss://hook-to-socket.onrender.com</copy>  
Bridge Base HTTP URL: <copy>https://hook-to-socket.onrender.com</copy>  
>
> ---