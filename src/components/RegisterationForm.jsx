import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Credentials from "./Credentials";
import { useNavigate } from "react-router-dom";
import "./RegisterationForm.css";
// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       name: '',
//     email: '',
//     phoneNumber: '',
//     role: '',
//     password: '',
//     confirmPassword: ''
//     }
//   }
//   changeName(event){
//     this.setState({
//       name:event.target.value
//     })
//   }
//   changeEmail(event){
//     this.setState({
//       email:event.target.value
//     })
//   }
//   changePhone(event){
//     this.setState({
//       phoneNumber:event.target.value
//     })
//   }
//   changeRole(event){
//     this.setState({
//       role:event.target.value
//     })
//   }
//   changePassword(event){
//     this.setState({
//       password:event.target.value
//     })
//   }
//   changeConfirm(event){
//     this.setState({
//       confirmPassword:event.target.value
//     })
//   }
// }
/*
import { registerUser } from './RegisterForm';
 // Import the registerUser function

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    role: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);


    try {
      const response = await fetch(`http://localhost:8000/api/auth/register-page`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body :JSON.stringify(user)
      });
      console.log('User registered successfully:', response);

      // Handle successful registration, e.g., show a success message or redirect the user
    } catch (error) {
      console.error('Error registering user:', error);
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      <input type="text" name="role" value={user.role} onChange={handleChange} placeholder="Role" />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
      <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
      <button type="submit">Register</button>
      {error && <div>{error}</div>}
    </form>
  );
};
*/
const RegisterationForm = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/dashboard-start");
  }, [navigate]);

  return (
    <form className="registeration-form">
      <div className="background25" />
      <div className="logo-frame">
        <h2 className="logo6">rEGISTER</h2>
      </div>
      <div className="credentials-group">
        <Credentials
          inputTextLabel="Name"
          typeHerePlaceholder="name"
          icon="pending_I113:4406;113:4270;3:258;1:38"
        />
        <Credentials
          inputTextLabel="Email"
          typeHerePlaceholder="Email"
          icon="pending_I113:4406;113:4271;3:258;1:38"
        />
        <Credentials
          inputTextLabel="Phone Number"
          typeHerePlaceholder="Phone Number"
          icon="pending_I113:4406;113:4272;3:258;1:38"
        />
        <div className="dropdowns">
          <div className="dropdown-title">Company Role</div>
          <Form.Select className="input-field-formselect">
            <option>Company Role</option>
            <option value="'Warehouse Manager'">'Warehouse Manager'</option>
            <option value="'Order Fulfillment Specialist'">
              'Order Fulfillment Specialist'
            </option>
            <option value="'Receiving Clerk'">'Receiving Clerk'</option>
            <option value="'Returns Clerk'">'Returns Clerk'</option>
          </Form.Select>
        </div>
        <Credentials
          inputTextLabel="password"
          typeHerePlaceholder="Enter username"
          icon="pending_I113:4406;113:4274;3:258;1:38"
        />
        <Credentials
          inputTextLabel="Confirm Password"
          typeHerePlaceholder="Enter username"
          icon="pending_I113:4406;113:4275;3:258;1:38"
        />
      </div>
      <div className="button-container">
        <button className="button18" onClick={onButtonClick}>
          <div className="input-field-instance">Register</div>
          <div className="background26" />
        </button>
      </div>
    </form>
  );
};

export default RegisterationForm;
