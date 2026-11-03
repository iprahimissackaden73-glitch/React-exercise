import { useReducer } from "react";

const initialState = {
  step: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  },
};

// Magaca halkaan iyo halka hoose ee useReducer lagu wacayo waa inay isku mid ahaadaan
const Reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREV_STEP":
      return { ...state, step: state.step - 1 };

    case "UPDATE_FORM":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};

const MultibleRegistration = () => {
  // Halkan waxaa laga beddelay formReducer oo waxaa la geliyay Reducer
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { step, formData } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FORM", payload: { name, value } });
  };

  const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Submitted Data:', formData);
    // alert('Registration successful!');

    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>Step 1: Personal Information</h2>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
              />
            </div>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Step 2: Your full details</h2>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <button type="button" onClick={prevStep}>
                Back
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultibleRegistration;