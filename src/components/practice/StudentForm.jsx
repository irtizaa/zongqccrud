import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	No_of_Pit: Yup.string().required("Required"),
	Ring_Tag: Yup.string()
	// .email("You have enter an invalid email address")
	.required("Required"),
	Trench_Distance: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="No_of_Pit" type="text"
				className="form-control" />
			<ErrorMessage
			name="No_of_Pit"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="Ring_Tag" type="text"
				className="form-control" />
			<ErrorMessage
			name="Ring_Tag"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="Trench_Distance" type="number"
				className="form-control" />
			<ErrorMessage
			name="Trench_Distance"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;