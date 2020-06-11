import { Admin } from "./components/xxx"
import {IdGenerator} from "./repository/testRepository"

class SpaceX{

  spacex:string = "spacex";
  _idGenerator:IdGenerator;
  constructor(idGenerator:IdGenerator) {
   this._idGenerator = idGenerator;
  }

  init() {
    var spacex = JSON.parse(localStorage.getItem("data"));
    spacex.forEach((val:any) => {

    if (val != null) {
      var tr = document.createElement("tr");      
      var td_id = document.createElement("td");      
      var td_name = document.createElement("td");      
      var td_create_at = document.createElement("td");      
      var td_update_at = document.createElement("td");      
      var btn_edit = document.createElement("button");      
      var btn_del = document.createElement("button");
      
      tr.setAttribute("id", "tr"+val.id);
      btn_edit.setAttribute("id", "edit"+val.id);
      btn_del.setAttribute("id", "del" + val.id);
      btn_edit.setAttribute("onclick", "edit(" + val.id+ ")")
      td_id.innerHTML = val.id;
      td_name.innerHTML = val.name;
      td_create_at.innerHTML = val.created_at;
      td_update_at.innerHTML = val.updated_at;
      btn_edit.innerHTML = "Edit";
      btn_del.innerHTML = "Delete";
      tr.append(td_id);
      tr.append(td_name);
      tr.append(td_create_at);
      tr.append(td_update_at);
      tr.append(btn_edit);  
      tr.append(btn_del);

      (<HTMLDivElement>document.getElementById("content")).append(tr);
    }
});
  }
  insert(name:string) {

    var data = JSON.parse(localStorage.getItem("data"));

    if (data == null) { data = [];}
    
    let task = {
      id: this._idGenerator.Get(this.spacex),
      name:name,
      created_at: new Date(),
      updated_at: new Date(),
    }

    data[task.id] = task;

    localStorage.setItem("data", JSON.stringify(data));
  }
}

var spaceX = new SpaceX(new IdGenerator());
spaceX.init();

var name = (<HTMLInputElement>document.getElementById('fullname')).value;

(<HTMLButtonElement>document.getElementById("btn_add")).onclick = function() {
  spaceX.insert(name);
}


function edit(id:number) {
  console.log(id);
}
// console.log(edit);
// var demoa = spacex[1];
// console.log(demoa.created_at)
