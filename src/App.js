
import './App.css';
import { Formik, Form, Field, FieldArray, yupToFormErrors, ErrorMessage } from "formik"
import * as Yup from 'yup';

import { KerrorMessage } from './KerrorMessage';

const validationscheme = Yup.object({
  name: Yup.string().required("Name is Required").max(50, "tolarge").min(2, "oshort"),
  pass: Yup.string().matches("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$", "must required 8 character upper case lowercase").required(),
  gender: Yup.string().required("gender is Required!"),
  date: Yup.string().required("date is Required"),
  data: Yup.string().required("data is Required"),
  select: Yup.string().required("choice is Required"),
  social: Yup.string().required("required")

})
function App() {
  return (
    <div id='formm1'>

      <Formik
        validationSchema={validationscheme}
        initialValues={{


          name: "",
          pass: "",
          gender: "",
          data: "",
          date: "",
          select: "",
          social: [],
          friends: [],
          file:[]
        }}
        onSubmit={(value) => {
          console.log(value)
        }} render={({ values}) => (<Form>
          <label>NAME : </label>
          <Field name="name" type="text"   ></Field>
          <KerrorMessage name="name" /><br></br>
          <div>
          <label>PASS : </label>
          <Field name="pass" type="password" ></Field>
          <KerrorMessage name="pass" /><br></br>
          </div>
          <label>gender:</label><br></br>
          <Field type="radio" name="gender" value="male"></Field>
          <label>Male</label>&nbsp;&nbsp;
          <Field type="radio" name="gender" value="female" ></Field>
          <label>female</label>
          <KerrorMessage name="gender" /><br></br>
            <label>Date oF Birth</label>&nbsp;&nbsp;&nbsp;
           
          <Field type="date" name="date"></Field> <KerrorMessage name="date" /><label>Select Course</label>&nbsp;&nbsp;&nbsp;
          
          <Field name="data" as="select">   <KerrorMessage name="data" /><br></br><br></br>
            <option>pcm</option>
            <option>pcb</option>
            <option>m.com</option>
          </Field><br></br><br></br>
          <label>Feedback : </label>
          <Field as="textarea" name="text"></Field>
          <br></br><br></br>
          <label>social : </label><br></br> <label>facebook : </label>
          <Field type="text" name="social.facebook"></Field><br></br> <label>twitter : </label>
 &nbsp;&nbsp;     <Field type="text" name="social.twitter"></Field><br></br><br></br>

          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((friend, index) => (
                    <div key={index}>
                      <Field name={`friends.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                
                )}
                
                <div>
                <br></br>
                <label>upload image : </label>
                  <input type="file" name="file" accept="image/*" ></input><br></br><br></br>
                  <Field id="btn1" type="submit" name="submit"></Field>&nbsp;&nbsp;&nbsp;
                  <Field id="btn2" type="reset" name="reset"></Field>
                </div>
              </div>
            )}
          />



        </Form>
        )}
      />
    </div>
  )
}
export default App;
