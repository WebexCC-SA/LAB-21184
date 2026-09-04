--8<-- "test123.md"

For this lab you will need to create a **Service App** and a **Webex Bot** in the Webex Developer Portal, create an asset and entrypoint for BYOC, and create a flow in the Webex Contact Center.

!!! Note
    These steps **DO NOT** need to be completed before continuing with the lab, but they **MUST** be completed before testing the lab.  Your lab proctors may instruct you to complete these steps while the AI is actively working on other portions of the lab.


<!-- Log into the **[Developer Portal](https://developer.webex.com/){:target="_blank"}**   -->

#### Create a new **Service App**
> Log into the **[Developer Portal](https://developer.webex.com/){:target="_blank"}** (If you are not already logged in)  
> Click in the avatar menu in the upper left corner and select **My Webex Apps**  
> Click **Create A New App**  
> Click **Create a Service APP**  
>> App Name: <copy><w class="podInfo"></w>_sa</copy>  
> Select any icon from the icon choices.   
> Description: <copy>BYOC for <w class="podInfo"></w></copy>   
> Contact Email: <copy><w class="admin"></w></copy>  
> Select the scopes:  cjp:config, cjp:config_write, cjp:config_read, cjp:task_write, cjp:task_read  
> Click Add Service App  
> Copy your **Client ID**, **Client Secret**, and **Service App ID** into the Credential Store
>> ---
> 
> Log into the **[Collaboration Control Hub](https://admin.webex.com/){:target="_blank"}** (If you are not already logged in)  
> Navigate to **Apps** in the left side pane and select **Service Apps** from the options in the top ribbon  
> Select **Other service apps** in the sub ribbon  
> In the search bar, paste in your **Service App ID**: <copy><w class="saId"></w></copy>
>> Click on your **Service App**  
> Toggle the Authorize switch on and click Save  
>> ---  
>
> Return to the **Developer Portal**
> Refresh the page  
> In the **Org Authorizations** section of your **Service App**  
>> Select your **Org** from the dropdown  
> Paste your **Client Secret** in to the **Client Secret** box: <copy><w class="clientSecret"></w></copy>     
> Press **Generate Tokens**  
> Copy the **Authorization Token** and the **Refresh Token** into the Credential Store
>> ---
>
> ---

#### Create a new Webex Bot
> Log into the **[Developer Portal](https://developer.webex.com/){:target="_blank"}** (If you are not already logged in)  
> Click in the avatar menu in the upper left corner and select **My Webex Apps**  
> Click **Create A New App**  
> Click **Create a Bot**  
>> Bot Name: <copy><w class="podInfo"></w>-LAB-21184</copy>  
> Bot Username: <copy><w class="podInfo"></w>-LAB-21184</copy>  
> Select any icon from the icon choices.   
> App Hub Description: <copy>Bot for <w class="podInfo"></w>-LAB-21184</copy>   
> Click Add Bot
>> ---
>
> Copy the **Bot Token** and **Bot ID** into the Credential Store   
> 
> ---

!!! note
    For these next three steps
    > Log into the **[Collaboration Control Hub](https://admin.webex.com/){:target="_blank"}** (If you are not already logged in)  
    > Navigate to Contact Center in the left pane



#### Create a New Custom Channel
> In the left pane under Contact Center find the section labeled Digital setting  
> Click **Custom Channels**  
> Click the **Create a custom channel** button  
>> Name: <copy><w class="podInfo"></w></copy>  
Channel Type: Custom messaging   
Logo: click select from library and search for: <copy>webex-helix-regular</copy>  
Max message characters: <copy>5400</copy>  
Allow file attachments: False  
Click Create
>
> ---

#### Create a New Asset
> In the left pane under Contact Center find the section labeled Digital Setting  
> Click **Assets**  
> Select **Custom messaging** in the ribbon options  
> Click the **Create an asset** button
>> Name: <copy><w class="podInfo"></w></copy>  
Channel type: Custom messaging  
Channel: <copy><w class="podInfo"></w></copy>  
Business Address: <copy><w class="podInfo"></w>-LAB-21184@webex.bot</copy>  
Messaging webhook URL: <copy>https://hook-to-socket.onrender.com/v1/pairs/<w class="podInfo"></w>/webhook</copy>  
Messaging webhook secret: <copy>AlbDwtA76K_TpCp7GweKcMTzbi2gsGxmIJplFUKZ0A-IQX0mKw6v3ly4LrfZARhN</copy>   
Click Create 
>
> ---

#### Create a New Flow


#### Create a New Entry Point 
> In the left pane under Contact Center find the section labeled Customer Experience  
> Click Entry Points  
> Click Create an Entry Point  
>> Name: <copy><w class="podInfo">podName</w></copy>  
Channel type: Custom messaging  
Channel Asset: <w class="podInfo"></w>  
Service level threshold: <copy>3600</copy>  
Custom messaging routing flow:  <w class="podInfo"></w>Flow **This needs to be updated because dashes are not allowed in names**  
Version Label: Latest  
>
> Click Create  
> 
> ---

