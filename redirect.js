const codeflow = new URLSearchParams(window.location.search).get("codeflow")
if(codeflow) window.location.replace("codeflow:open?pullrequest="+codeflow)