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

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";

const setupSchema = yup.object().shape({
    startupName: yup.string().required("required"),
    description: yup.string().required("required"),
    startupType: yup.string().required("required"),
    totalEmployees: yup.string().required("required"),
    expectedInvestmentAmount: yup.string().required("required"),
    document: yup.string().required("required")
});

const setupInitialValues ={
    startupName: '',
    description: '',
    startupType: '',
    totalEmployees: '',
    expectedInvestmentAmount: '',
    document: '',
    keyPeople: [{name:'',position:''}]

}



const StartupForm = () => {

    
    

    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();

    const handleFormSubmit = async (values, onSubmitProps) => {
        // this allows us to send form info with image
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("documentPath", values.document.name);
    
        const savedUserResponse = await fetch(
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
        }
    };

  return (
    <Formik
            onSubmit={handleFormSubmit}
            initialValues={setupInitialValues}
            validationSchema={setupSchema}
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
                                    label="Startup Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.startupName}
                                    name="startupName"
                                    error={
                                        Boolean(touched.startupName) && Boolean(errors.startupName)
                                    }
                                    helperText={touched.startupName && errors.startupName}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    label="Description"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.description}
                                    name="description"
                                    error={Boolean(touched.description) && Boolean(errors.description)}
                                    helperText={touched.description && errors.description}
                                    sx={{ gridColumn: "span 4" }}
                                />
    
                                <FormControl
                                    fullWidth
                                    sx={{ gridColumn: "span 4" }}
                                    error={Boolean(touched.startupType) && Boolean(errors.startupType)}
                                >
                                    <InputLabel>Type of StartUp</InputLabel>
                                    <Select
                                        label="Startup Type"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.startupType}
                                        name="startupType"
                                    >
                                        <MenuItem value="tech">Tech</MenuItem>
                                        <MenuItem value="health">Health</MenuItem>
                                        <MenuItem value="finance">Finance</MenuItem>
                                        <MenuItem value="social sevice">Social Service</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                    {touched.startupType && errors.startupType && (
                                        <p style={{ color: "red", fontSize: "0.75rem", marginTop: "4px" }}>
                                            {errors.startupType}
                                        </p>
                                    )}
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    sx={{ gridColumn: "span 4" }}
                                    error={Boolean(touched.totalEmployees) && Boolean(errors.totalEmployees)}
                                >
                                    <InputLabel>Total Number of Employees</InputLabel>
                                    <Select
                                        label="Total Employees"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.totalEmpolyees}
                                        name="totalEmployees"
                                    >
                                        <MenuItem value="1-10">1-10</MenuItem>
                                        <MenuItem value="10+">11-50</MenuItem>
                                        <MenuItem value="50+">51-200</MenuItem>
                                        <MenuItem value="200+">201-500</MenuItem>
                                        <MenuItem value="500+">500+</MenuItem>
                                    </Select>
                                    {touched.totalEmployees && errors.totalEmployees && (
                                        <p style={{ color: "red", fontSize: "0.75rem", marginTop: "4px" }}>
                                            {errors.totalEmployees}
                                        </p>
                                    )}
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    sx={{ gridColumn: "span 4" }}
                                    error={Boolean(touched.expectedInvestmentAmount) && Boolean(errors.expectedInvestmentAmount)}
                                >
                                <Typography color="primary">Expected Investment Amount</Typography>

                                <Slider
                                value={values.expectedInvestmentAmount}
                                onChange={(event, newValue) => setFieldValue('expectedInvestmentAmount', newValue)}
                                valueLabelDisplay="auto"
                                min={50000}
                                max={5000000}
                                />
                                </FormControl>

                                <Box
                                    gridColumn="span 4"
                                    border={`1px solid ${palette.neutral.medium}`}
                                    borderRadius="5px"
                                    p="2rem"
                                >
                                    {values.keyPeople.map((person, index) => (
                                    <div key={index}>

                                   
                                    <Box
                                    gridColumn="span 4"
                                    gap = "20px"
                                    >
                                        <TextField
                                        label="Name"
                                        name={`keyPeople[${index}].name`}
                                        value={values.keyPeople[index].name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.keyPeople && touched.keyPeople[index] && errors.keyPeople && errors.keyPeople[index] && Boolean(errors.keyPeople[index].name)}
                                        helperText={touched.keyPeople && touched.keyPeople[index] && errors.keyPeople && errors.keyPeople[index] && errors.keyPeople[index].name}
                                        fullWidth
                                        />
                                        </Box>

                                        <Box
                                    gridColumn="span 4"
                                    gap = "20px"
                                    >
                                        <FormControl fullWidth>
                                        <InputLabel>Position</InputLabel>
                                        <Select
                                            label="Position"
                                            name={`keyPeople[${index}].position`}
                                            value={values.keyPeople[index].position}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.keyPeople && touched.keyPeople[index] && errors.keyPeople && errors.keyPeople[index] && Boolean(errors.keyPeople[index].position)}
                                        >
                                            <MenuItem value="Founder">Founder</MenuItem>
                                            <MenuItem value="Co-Founder">Co-Founder</MenuItem>
                                            <MenuItem value="CEO">CEO</MenuItem>
                                            <MenuItem value="CTO">CTO</MenuItem>
                                            <MenuItem value="Manager">Manager</MenuItem>
                                            <MenuItem value="CMO">CMO</MenuItem>
                                            <MenuItem value="Sales Manager">Sales Manager</MenuItem>
                                            <MenuItem value="Product Manager">Product Manager</MenuItem>
                                        </Select>
                                        {touched.keyPeople && touched.keyPeople[index] && errors.keyPeople && errors.keyPeople[index] && errors.keyPeople[index].position && (
                                            <p style={{ color: "red", fontSize: "0.75rem", marginTop: "4px" }}>
                                            {errors.keyPeople[index].position}
                                            </p>
                                        )}
                                        </FormControl>
                                        </Box>

                                        <IconButton onClick={() => setFieldValue('keyPeople', values.keyPeople.filter((_, i) => i !== index))}>
                                        <DeleteIcon />
                                        </IconButton>

                                       
                                    
                                    </div>
                                    ))}
                                    <Button onClick={() => setFieldValue('keyPeople', [...values.keyPeople, { name: '', position: '' }])}>
                                    Add Key Person
                                    </Button>
                                </Box>

                                <Box
                                    gridColumn="span 4"
                                    border={`1px solid ${palette.neutral.medium}`}
                                    borderRadius="5px"
                                    p="1rem"
                                >
                                    <Dropzone
                                        acceptedFiles=".pdf,.docx,.ppt,.xls"
                                        multiple={false}
                                        onDrop={(acceptedFiles) =>
                                            setFieldValue("document", acceptedFiles[0])
                                        }
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <Box
                                                {...getRootProps()}
                                                border={`2px dashed ${palette.primary.main}`}
                                                p="1rem"
                                                sx={{ "&:hover": { cursor: "pointer" } }}
                                            >  
                                                <input {...getInputProps()} />
                                                {!values.document ? (
                                                    <p className={theme.palette.mode==='dark'? 'dark-mode':'light-mode'}>Add Document Here</p>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>{values.document.name}</Typography>
                                                        <EditOutlinedIcon />
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}
                                    </Dropzone>
                                </Box>
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

export default StartupForm
