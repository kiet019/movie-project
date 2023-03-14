import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  FormControlLabel,
  FormGroup,
  InputAdornment,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import DialogOpen from "../../Dialog";
import { UserAuth } from "../../login/AuthContext";

// function generateUniqueId() {
//   return parseInt(uuidv4().replace(/-/g, ""), 16);
// }
export default function Contact() {
  const {user} = UserAuth()
  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formik = useFormik({
    initialValues: {
      usercode: user.uid,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      program: "0",
      title: "",
      message: "",
      agree: false,
      status: false,
      note: ""
    },
    onSubmit: (values) => {
      setOpen(true)
      const baseURL = "https://64048c453bdc59fa8f3b5897.mockapi.io/api/films/contact"
      fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      lname: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      title: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf([true], "Must be confirm before sending."),
    }),
  });
  useEffect(() => {
    if (
      Object.keys(formik.touched).length > 0 &&
      Object.keys(formik.errors).length === 0 &&
      formik.values.program !== "0"
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.touched, formik.errors, formik.values.program]);
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="name">
          <TextField
            id="fn"
            label="First Name"
            variant="outlined"
            name="fname"
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div></div>
          <TextField
            id="ln"
            label="Last Name"
            variant="outlined"
            name="lname"
            value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.touched.fname && <>{formik.errors.fname}</>}
          </div>
          <div></div>
          <div className="error">
            {formik.touched.lname && <>{formik.errors.lname}</>}
          </div>
        </div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.email && <>{formik.errors.email}</>}
        </div>
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          name="phone"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.phone && <>{formik.errors.phone}</>}
        </div>
        <div style={{ float: "right" }}>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            name="program"
            value={formik.values.program}
            onChange={formik.handleChange}
            style={{ fontSize: "15px", color: "white" }}
          >
            <MenuItem value="0">
              <em>Please select</em>
            </MenuItem>
            <MenuItem value="Support">Support</MenuItem>
            <MenuItem value="Report">Report</MenuItem>
            <MenuItem value="Feedback">Feedback</MenuItem>
          </Select>
        </div>
        <div className="error">
          {formik.touched.program && <>{formik.errors.program}</>}
        </div>
        <TextField
          id="outlined-basic"
          label="Title"
          fullWidth
          variant="outlined"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.title && <>{formik.errors.title}</>}
        </div>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={5}
          fullWidth
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.message && <>{formik.errors.message}</>}
        </div>
        <div className="button" style={{ textAlign: "right" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      name="agree"
                      value={formik.values.agree}
                      onClick={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  }
                  label="Confirm before send"
                />
              </FormGroup>
              <div className="error">
                {formik.touched.agree && <>{formik.errors.agree}</>}
              </div>
            </div>
            <Button
             type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={isDisabled}
              style={{ width: "150px" }}
            >
              Send
            </Button>
          </div>
        </div>
      </form>
      <DialogOpen to="/home" message="Adding success" open={open} handleClose={handleClose}/>
    </div>
  );
}
