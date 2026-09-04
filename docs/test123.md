<style>
    #modalOpen{
        position: fixed;
        right: 2%;
        top:15%;
        z-index: 1000;
    }
    button{
    border:solid 2px;
    border-radius: 25px;
    padding: 10px;
}
button:hover{
    background-color:rgb(195, 193, 201);
}
</style>
<script>
    function carl(pod){
        let domain
        let orgID
        let podInfo
        switch(true){
            case (pod <= 10):
                domain = "@lab-21184-a.wbx.ai";
                orgID = "8c5a6aca-2e8a-4e93-b126-893b8378ee76"
                break;
            case (pod >=11 && pod <=20):
                domain = "@lab-21184-b.wbx.ai";
                orgID = "b9d6615a-7267-490c-a513-e1dc7cc2683b"
                break;
        
            case (pod >=21 && pod <=30):
                domain = "@lab-21184-c.wbx.ai";
                orgID = "13739921-6768-4c01-aa42-b5a602ef4c54"
                break;
        }
        podInfo = "SPEC-"+pod
        sessionStorage.setItem("podInfo", podInfo)
        sessionStorage.setItem("admin", podInfo + "-admin" + domain)
        sessionStorage.setItem("user", podInfo + "-user" + domain)
        sessionStorage.setItem("orgID", orgID)
        loadem()
    }
</script>
<button id="modalOpen" popovertarget="my-dialog">Credential Store</button>
<dialog id="my-dialog" popover>

<form id="info">

    <label for="podNumber">POD Number:</label>
    <input type="number" id="podNumber" name="podNumber" onChange="carl(this.value)"><br>

    <label for="PW">Password:</label>
    <input type="text" id="PW" name="PW" onChange="setValues()"><br>

    <label for="admin">Admin Login:</label>
    <w class="admin"></w><br>

    <label for="user">User Login:</label>
    <w class="user"></w><br>

    <label for="clientID">Client ID:</label>
    <input type="text" id="clientID" name="clientID" onChange="setValues()"><br>

    <label for="clientSecret">Client Secret:</label>
    <input type="text" id="clientSecret" name="clientSecret" onChange="setValues()"><br>

    <label for="saId">Service App ID:</label>
    <input type="text" id="saId" name="saId" onChange="setValues()"><br>

    <label for="at">Service App Access Token:</label>
    <input type="text" id="at" name="at" onChange="setValues()"><br>
    
    <label for="rt">Service App Refresh Token:</label>
    <input type="text" id="rt" name="rt" onChange="setValues()"><br>
    
    <!-- <label for="saId">Service App ID:</label>
    <input type="text" id="saId" name="saId" onChange="setValues()"><br> -->




    <label for="botToken">Bot Token:</label>
    <input type="text" id="botToken" name="botToken" onChange="setValues()"><br>

    <label for="botID">Bot ID:</label>
    <input type="text" id="botID" name="botID" onChange="setValues()"><br>
    
    <!-- <label for="EP">Inbound Channel Name:</label>
    <input type="text" id="EP" readonly name="EP" onChange="setValues()"><br>

    <label for="DN">Inbound Channel Phone Number:</label>
    <input type="text" id="DN" name="DN" onChange="setValues()"><br> -->

    <label for="Queue">Queue  Name:</label>
    <input type="text" id="Queue" readonly name="Queue" onChange="setValues()"><br>
    
    <label for="Team">Team Name:</label>
    <input type="text" id="Team" readonly name="Team" onChange="setValues()"><br>

    <!-- <button onclick="setValues()">Update Lab Guide</button> -->
</form>
<center><button id="modalClose" popovertarget="my-dialog" popovertargetaction="hide">Close</button></center>
</dialog>