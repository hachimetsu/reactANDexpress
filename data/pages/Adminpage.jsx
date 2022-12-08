// import * as React from 'react'
// import { Form, Button } from 'react-bootstrap'
// const DB = './DB.json';
// export default function _Admin() {
//     const Change = async (e) => {
//         e.preventDefault();
//         // store the states in the form data
//         const { email, password } = e.target.elements;
//         const loginFormData = new FormData();
//         loginFormData.append("username", email)
//         loginFormData.append("password", password)

//         try {
//             // make axios post request
//             const response = await axios({
//                 method: "post",
//                 url: "/post",
//                 data: loginFormData,
//             });
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return <>
//         <hr />
//         <Form onSubmit={Change} >
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" name="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" name="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             <Button variant="primary" type="submit">Save</Button>
//         </Form>
//         <hr />
//     </>
// }