import React from 'react'
import { useState } from "react";

import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Slider,
    IconButton

} from "@mui/material"

import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const funderSchema = yup.object().shape({
  investmentRange: yup.array().of(yup.number().min(0).max(1000)).required('Investment Range is required'),
  interestedTypes: yup.array().of(yup.string()).required('At least one type of startup is required'),
  about: yup.string().required('About is required'),
});

const funderInitialValues ={
  investmentRange: [10000, 20000],
  interestedTypes: [],
  about: ''
}

const funderForm = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  
  const startupTypes = ['Tech', 'Health', 'Finance', 'Education', 'Energy'];

  const handleFormSubmit = async (values, onSubmitProps) => {
      // this allows us to send form info with image
      const formData = new FormData();
      for (let value in values) {
          formData.append(value, values[value]);
      }
      formData.append("documentPath", values.document.name);

      console.log(formData);
      /*const savedUserResponse = await fetch(
          "http://localhost:5000/auth/register",
          {
              method: "POST",
              body: formData,
          }
      );
      const savedUser = await savedUserResponse.json();
      onSubmitProps.resetForm();
  
      if (savedUser) {
          navigate('/');
      }*/
  };

return (
  <Formik
          onSubmit={handleFormSubmit}
          initialValues={funderInitialValues}
          validationSchema={funderSchema}
      >
          {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
              resetForm,
          }) => (
              <form onSubmit={handleSubmit}>
                  <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                      }}
                  >
                          <>
                              <TextField
                                  label="About"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.about}
                                  name="about"
                                  error={Boolean(touched.about) && Boolean(errors.about)}
                                  helperText={touched.about && errors.about}
                                  sx={{ gridColumn: "span 4" }}
                              />


                            <Typography color="primary">Types of Startups You're Interested In</Typography>
                                  <FormGroup>
                                    {startupTypes.map((type) => (
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={values.interestedTypes.includes(type)}
                                            onChange={(event) => {
                                              const newTypes = event.target.checked
                                                ? [...values.interestedTypes, type]
                                                : values.interestedTypes.filter((t) => t !== type);
                                              setFieldValue('interestedTypes', newTypes);
                                            }}
                                          />
                                        }
                                        label={type}
                                        key={type}
                                        className = {theme.palette.mode==="dark"? 'dark-mode':'light-mode'}
                                      />
                                    ))}
                                  </FormGroup>
                                  {touched.interestedTypes && errors.interestedTypes && (
                                    <p style={{ color: "red", fontSize: "0.75rem", marginTop: "4px" }}>
                                      {errors.interestedTypes}
                                    </p>
                                  )}




                              <FormControl
                                  fullWidth
                                  sx={{ gridColumn: "span 4" }}
                                  error={Boolean(touched.investmentRange) && Boolean(errors.investmentRange)}
                              >
                              <Typography color="primary">Investment Range</Typography>

                              <Slider
                              value={values.investmentRange}
                              onChange={(event, newValue) => setFieldValue('investmentRange', newValue)}
                              valueLabelDisplay="auto"
                              min={50000}
                              max={5000000}
                              />
                              </FormControl>
                                 

                             
                          </>

                      <Box>
                      <Button
                          fullWidth
                          type="submit"
                          sx={{
                              m: "2rem 0",
                              p: "1rem",
                              backgroundColor: palette.primary.main,
                              color: palette.background.alt,
                              "&:hover": { color: palette.primary.main },
                          }}
                      >
                          Submit
                      </Button>
                      </Box>
                  </Box>
              </form>
          )}
      </Formik>
)
}

export default FunderForm
