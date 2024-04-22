import React, { useContext, useState, useRef, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./NewUser.scss";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const NewUser = () => {
  const [submit, SetSubmit] = useState("Submit");
  const formRef = useRef(null);
  const fullNameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const { userData, setUserData } = useContext(UserContext);
  let { userId } = useParams();
  const [userInfo] = useState(userData.filter((item) => item.id === +userId));
  const currentUser = userInfo[0];
  const [totalUser] = useState(userData.length);
  const [formData, setFormData] = useState({
    fullName: currentUser?.fullName || "",
    email: currentUser?.email || "",
    role: currentUser?.role || "",
    id: currentUser?.id || totalUser + 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      fullNameRef.current.value = currentUser.fullName;
      emailRef.current.value = currentUser.email;
      roleRef.current.value = currentUser.role;
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !isEmailValid(formData.email) ||
        formData.fullName.trim().length >= 3 ||
        !isRoleValid(formData.role)
      ) {
        throw new Error("Form validation failed!");
      }
      SetSubmit("Submitting...");
      if (currentUser) {
        const updatedUserData = userData.map((user) =>
          user.id === currentUser.id ? { ...user, ...formData } : user
        );
        setUserData(updatedUserData);
      } else {
        userData.push(formData);
      }
      restForm();
      navigate(`/users`);
    } catch (error) {
      console.error("Error:", error);
      restForm();
    }
  };

  const restForm = async () => {
    SetSubmit("Done");
    formRef.current.reset();
    SetSubmit("Submit");
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const isRoleValid = (role) => {
    return ["user", "admin"].includes(role.trim());
  };

  return (
    <div className="new-user">
      <Sidebar />
      <div className="new-user__container">
        <Navbar />
        <div className="user-form">
          <div className="form-heading">
            <h1> Create/Edit User</h1>
          </div>
          <div className="form-body">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-input">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  id="fullName"
                  value={formData.fullName}
                  ref={fullNameRef}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  placeholder="johndoe@example.com"
                  id="email"
                  value={formData.email}
                  ref={emailRef}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="role">Role:</label>
                <input
                  type="text"
                  placeholder="user or admin"
                  id="role"
                  value={formData.role}
                  ref={roleRef}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                {submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
