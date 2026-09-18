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
<button id="modalOpen" popovertarget="my-dialog">Credential Store</button>
<dialog id="my-dialog" popover>

<form id="info">

    <!-- <label for="podNumber">POD Number:</label>
    <input type="number" id="podNumber" name="podNumber" onChange="carl(this.value)"><br>

    <label for="PW">Password:</label>
    <input type="text" id="PW" name="PW" onChange="setValues()"><br> -->

    <label for="admin">Admin Login:</label>
    <copy><w class="admin"></copy></w><br>

    <label for="user">User Login:</label>
    <copy><w class="user"></w></copy><br>

    <label for="PW">Password:</label>
    <copy> <w class="PW"></w></copy><br>

    <!-- <label for="Queue">Queue  Name:</label>
    <input type="text" id="Queue" readonly name="Queue" onChange="setItem(this.id, this.value)"><br>
    
    <label for="Team">Team Name:</label>
    <input type="text" id="Team" readonly name="Team" onChange="setItem(this.id, this.value)"><br> -->

    <label for="clientID">Client ID:</label>
    <input type="text" id="clientID" name="clientID" onChange="setItem(this.id, this.value)"><br>

    <label for="clientSecret">Client Secret:</label>
    <input type="text" id="clientSecret" name="clientSecret" onChange="setItem(this.id, this.value)"><br>

    <label for="saId">Service App ID:</label>
    <input type="text" id="saId" name="saId" onChange="setItem(this.id, this.value)"><br>

    <label for="at">Service App Access Token:</label>
    <input type="text" id="at" name="at" onChange="setItem(this.id, this.value)"><br>
    
    <label for="rt">Service App Refresh Token:</label>
    <input type="text" id="rt" name="rt" onChange="setItem(this.id, this.value)"><br>
    
    <!-- <label for="saId">Service App ID:</label>
    <input type="text" id="saId" name="saId" onChange="setItem(this.id, this.value)"><br> -->




    <label for="botToken">Bot Token:</label>
    <input type="text" id="botToken" name="botToken" onChange="setItem(this.id, this.value)"><br>

    <label for="botID">Bot ID:</label>
    <input type="text" id="botID" name="botID" onChange="setItem(this.id, this.value)"><br>
    
    <!-- <label for="EP">Inbound Channel Name:</label>
    <input type="text" id="EP" readonly name="EP" onChange="setItem(this.id, this.value)"><br>

    <label for="DN">Inbound Channel Phone Number:</label>
    <input type="text" id="DN" name="DN" onChange="setItem(this.id, this.value)"><br> -->



    <!-- <button onclick="setValues()">Update Lab Guide</button> -->
</form>
<center><button id="modalClose" popovertarget="my-dialog" popovertargetaction="hide">Close</button></center>
</dialog>