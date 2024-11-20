// export const formErrors = (formdata: any) => {
//   const { email, password } = formdata;

//   const newErrors: any = {};

//   if (!email) {
//     newErrors.email = 'Email is required';
//   } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//     newErrors.email = 'Please enter a valid email address.';
//   } else if (!password) {
//     newErrors.password = 'Password is required';
//   } else if (password.length < 6) {
//     newErrors.password = 'Password must be at least 6 characters long.';
//   }

//   return newErrors;
// };

export interface ValidationDataProps {
  textErrors?: string | string[];
  email?: string | undefined;
  password?: string | undefined;
  checkbox?: string;
  confirm_password?: string;
}

export const formErrors =
  (/*formdata: ValidationDataProps, type: string */) => {
    //const { email, password, checkbox, textErrors, confirm_password } = formdata;
    // const newErrors: any = {};
    // // if (type === 'text' && textErrors?.length) {
    // //   newErrors.textErrors = 'This field is required!';
    // // } else if (type === 'email' && !email) {
    // //   newErrors.email = 'Email is required!';
    // // } else if (type === 'email' && email && !/^\S+@\S+\.\S+$/.test(email)) {
    // //   newErrors.email = 'Please enter a valid email address!';
    // // } else if (type === 'password' && !password) {
    // //   newErrors.password = 'Password is required!';
    // // } else if (type === 'password' && password && password.length < 6) {
    // //   newErrors.password = 'Password must be at least 6 characters long!';
    // // } else if (type === 'password' && password !== confirm_password) {
    // //   newErrors.confirm_password = 'Passwords do not match!';
    // // } else if (type === 'checkbox' && !checkbox) {
    // //   newErrors.checkbox = 'Please accept';
    // // }
    // return newErrors;
  };
