document$.subscribe(function(){loadem()})
    function loadem() {
    Object.keys(sessionStorage).forEach(key => { Array.from(document.getElementsByClassName(key)).forEach((index) => { index.innerHTML = sessionStorage.getItem(key) }) });

    [].forEach.call(document.getElementsByTagName("copy"), function (el) {
        el.addEventListener("click", function (event) {
            if (event.target.tagName == "COPY") { navigator.clipboard.writeText(event.target.innerText) }
            if (event.target.tagName == "W") { navigator.clipboard.writeText(event.target.parentNode.innerText) }
        })
    })
    document.querySelector("#info").querySelectorAll("input").forEach((input) => { input.value = sessionStorage.getItem(input.name) });
}; loadem()
function setValues() {
    document.querySelector("#info").querySelectorAll("input").forEach((input) => { sessionStorage.setItem(input.name, input.value) });
    // event.preventDefault()
    Event.preventDefault()
    loadem()
}
function setItem(key,value){
    sessionStorage.setItem(key, value);
    loadem();
}
function carl(pod){
    let domain
    let orgID
    let podInfo

    switch(true){
        case (pod <= 15):
            domain = "@lab-21184-a.wbx.ai";
            orgID = "8c5a6aca-2e8a-4e93-b126-893b8378ee76"
            break;
        case (pod >=16 && pod <=30):
            domain = "@lab-21184-b.wbx.ai";
            orgID = "b9d6615a-7267-490c-a513-e1dc7cc2683b"
            break;
    
        case (pod >=31 && pod <=45):
            domain = "@lab-21184-c.wbx.ai";
            orgID = "13739921-6768-4c01-aa42-b5a602ef4c54"
            break;
        case (pod >=46 && pod <=64):
            domain = "@lab-21184-d.wbx.ai";
            orgID = "1e09e8ff-3c5b-41b2-a133-a9ec3dde3c1f"
            break;
    }
    podInfo = "SPEC-"+pod
    sessionStorage.setItem("podNumber", pod)
    sessionStorage.setItem("podInfo", podInfo)
    sessionStorage.setItem("admin", podInfo + "-admin" + domain)
    sessionStorage.setItem("user", podInfo + "-user" + domain)
    sessionStorage.setItem("orgID", orgID)
    sessionStorage.setItem("flow", "SPEC_"+pod)
    sessionStorage.setItem("Queue", podInfo+"-queue")
    sessionStorage.setItem("Team", podInfo+"-team")
    loadem()
}