class IdGenerator{
  Get(repoName:string) {
    
    var data = localStorage.getItem(repoName+"_dataid");
    var id = 0;
    if (data==="NaN" || data === null || parseInt(data) === 0) 
    {
      id = 1;
    } else {
      id = parseInt(data)+1;
    }

    localStorage.setItem(repoName+"_dataid", id.toString());
    return id;
  }
}

export {IdGenerator}