import React from "react";
import { Formik, Form, Field,ErrorMessage} from "formik";
import * as yup from "yup"
const App = () => {
  const defaultvalue = {// yah pura key hs ishi say check karte ha 
    name: "",// yaha per by default name v likh shakty ho ex--  name:"Lolly"
    email: "",
    password: "",
    com_password:"",
    gender:"",
    term:false,
    vec:""
  };

  const vaildationscema=yup.object().shape({ /// ea  check karta ha or match nhe kia to error dayga
    name:yup.string().required("please enter your name").min(2).max(8),
    password:yup.string().required("please enter your password"),
    com_password:yup.string().oneOf([yup.ref('password'),null],"password  must be match"),
    email:yup.string().required("please enter your email").email("please enter "),
    gender:yup.string().required("please select your gender"),
    term:yup.boolean().oneOf([true],"please accpet terms and conditions"),
    vec:yup.string().required("please  select transport")

  })

  const handlesumbit =(values)=>
  {
    console.log(values)
  }
  return (
    <>
      <div className="container">
        <div className="col-md-12 text-center mt-5">
          <Formik initialValues={defaultvalue}
          validationSchema={vaildationscema}
          onSubmit={handlesumbit}
          >
            <Form>
              {/* eak baat yaad rakhna jo name may dia w-o upper key banaya ha 4 number per whe dayna warna error hoga */}
              
              <div className="col-md-12 mt-5">
                <Field type="text" name="name" placeholder="Enter your name" />
                <p className="text-danger">
                  <ErrorMessage name="name"/>
                </p>
              </div>

            {/* email field */}

            
              <div className="col-md-12 mt-5">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                 <p className="text-danger">
                  <ErrorMessage name="email"/>
                </p>
              </div>


              <div className="col-md-12  mt-5">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                 <p className="text-danger">
                  <ErrorMessage name="password"/>
                </p>
              </div>


              <div className="col-md-12  mt-5">
                <Field
                  type="password"
                  name="com_password"
                  placeholder="Enter your com_password"
                />
                 <p className="text-danger">
                  <ErrorMessage name="com_password"/>
                </p>
              </div>



              <div className="col-md-12 mt-4">
                <Field component="select" name="gender" placeholder="please select your gender" className="form-control">
                  <option value="" disabled>please select</option>
                  <option value="male">male</option>
                  <option value="male">female</option>
                </Field>
                <p className="text-danger">
                  <ErrorMessage name="gender"/>
                </p>
              </div>
 


            <div className="col-md-12 mt-4">
              <label className="form-inline">
                <Field type="checkbox" name="term">

                </Field>
                i accept terms and conditions
              </label>
              <p className="text-danger">
                  <ErrorMessage name="term"/>
                </p>
            </div>

              

            <div className="col-md-12 mt-4">
              <label>
                <Field type="radio" name="vec" value="bike"/>
                bike
              </label>
              <label>
                <Field type="radio" name="vec" value="car"/>
                car
              </label>
              <p className="text-danger">
                  <ErrorMessage name="vec"/>
                </p>
            </div>


              <button className="btn btn-primary mt-4" type="sumbit">
                click me
              </button>




            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default App;
