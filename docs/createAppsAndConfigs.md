For this lab you will need to create a **Service App** and a **Webex Bot** in the Webex Developer Portal, create an asset and entrypoint for BYOC, and create a flow in the Webex Contact Center.

!!! Note
    These steps **DO NOT** need to be completed before continuing with the lab, but they **MUST** be completed before testing the lab.  Your lab proctors may instruct you to complete these steps while the AI is actively working on other portions of the lab.


<!-- Log into the **[Developer Portal](https://developer.webex.com/){:target="_blank"}**   -->

#### Create a new **Service App**
> Log into the **[Developer Portal](https://developer.webex.com/){:target="_blank"}** (If you are not already logged in)  
> Click in the avatar menu in the upper left corner and select **My Webex Apps**  
> Click **Create A New App**  
> Click **Create a Service APP**  
>> App Name: <copy></copy>  
> Select any icon from the icon choices.   
> Description: <copy></copy>   
> Contact Email: <copy></copy>  
> Select the scopes:  cjp:config, cjp:config_write, cjp:config_read, cjp:task_write, cjp:task_read  
> Click Add Service App  
> Copy your **Client ID**, **Client Secret**, and **Service App ID** 
>> ---
> 
> Log into the **[Collaboration Control Hub](https://admin.webex.com/){:target="_blank"}** (If you are not already logged in)  
> Navigate to **Apps** in the left side pane and select **Service Apps** from the options in the top ribbon  
> Select **Other service apps** in the sub ribbon  
> In the search bar, paste in your **Service App ID**
>> Click on your **Service App**  
> Toggle the Authorize switch on and click Save  
>> ---  
>
> Return to the **Developer Portal**
> In the **Org Authorizations** section of your **Service App**  
>> Select your **Org** from the dropdown  
> Paste your **Client ID** in to the **Client ID** box and press **Generate Tokens**  
> Copy the **Authorization Token** and the **Refresh Token**
>> ---
>
> ---

#### Create a new Webex Bot
> Log into the **[Developer Portal](https://developer.webex.com/){:target="_blank"}** (If you are not already logged in)  
> Click in the avatar menu in the upper left corner and select **My Webex Apps**  
> Click **Create A New App**  
> Click **Create a Bot**  
>> Bot Name: <copy></copy>  
> Bot Username: <copy></copy>  
> Select any icon from the icon choices.   
> App Hub Description: <copy></copy>   
> Click Add Bot
>> ---
>
> Copy the **Bot Token**  
> 
> ---

!!! note
    For these next three steps
    > Log into the **[Collaboration Control Hub](https://admin.webex.com/){:target="_blank"}** (If you are not already logged in)  
    > Navigate to Contact Center in the left pane



#### Create a New Channel
> In the left pane under Contact Center find the section labeled Digital setting  
> Click **Custom Channels**  
> Click the **Create a custom channel** button  
>> Name: <copy></copy>  
Channel Type: Custom messaging   
Logo: click select from library and search for <copy>webex-helix-regular</copy>  
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
>> Name: <copy></copy>  
Channel type: Custom messaging  
Channel: <copy></copy>  
Business Address: <copy></copy>  
Messaging webhook URL: <copy></copy>  
Messaging webhook secret: <copy></copy> 
Click Create 
>
> ---

#### Create a New Flow


#### Create a New Entry Point 
> In the left pane under Contact Center find the section labeled Customer Experience  
> Click Entry Points  
> Click Create an Entry Point  
>> Name: <copy><w class="pod">podName</w></copy>  
Channel type: Custom messaging  
Channel Asset: <w class="pod">podName</w>  
Service level threshold: <copy>3600</copy>  
> ---

