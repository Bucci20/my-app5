import React,{ useState } from "react";



function App() {
  const initialValues = {name:"", lastname:"", age:"", Email:"", Gender:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState();
  const [remove, setDelete] = useState({});
  const handleDelete = (index,e) => {
      setDelete(remove.filter((i) => i !== index));
  }
  


const handleCHange = (e) => {
  const {name, value} = e.target;
  setFormValues({...formValues, [name]: value});
};
const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true)
};
const validate = (values) => {
  const errors = {};
  if(values.name.length < 4){
  errors.name = "Name is Requiers at list 4 characters";
}
if (values.lastname.length< 4) {
  errors.lastname = "Last Name is Requiers at list 4 characters";
}
if(!values.Email){
  errors.Email = "Email is requierd!";
}else if(!values.Email.includes("@")){
  errors.Email= "This Email is not valid"
}
if(values.age.length < 18){
errors.age = "User has to be over 18";
 }
  if(!values.Gender){
    errors.Gender = "pleas Select your gender";
  };
}

return(
  <div>
<div className="container">


<input 
type="text"
name="name"
value={formValues.name}
onChange={handleCHange}/> <button onClick={e =>handleDelete(e) }>Delete</button> <label>Name</label>
  
  

<div>

<input 
type="text"
name="lastname"
value={formValues.lastname}
onChange={handleCHange}/> <button>Delete</button> <label>Last Name</label>
</div>

<div>
  

 <input 
type="number"
name="age"
value={formValues.age}
onChange={handleCHange}/> <button>Delete</button> <label>Age</label>
</div>
<div>

 <input 
type="text"
name="Email"
value={formValues.Email}
onChange={handleCHange}/> <button>Delete</button> <label>Email</label>
</div>

<select onChange={handleCHange}>
  <option value={formValues.Gender}>Male</option>
  <option value={formValues.Gender}>Female</option>
  <option value={formValues.Gender}>Other</option>
  
</select>

<button onClick={isSubmit}
type="submit"
value={handleSubmit}
>Submit</button>

</div>
</div>
)


};

export default App;
