import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const [input, setInput] = useState('');
  const [input1, setInput1] = useState('');

  const { state, dispatch } = useContext(AuthContext);

  const getData = async (email, password) => {
    console.log(email, password);
    try {
        dispatch({type:'LOADING'})
      let res = await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
      });
      console.log(res);
      dispatch({type:'LOADING'})
      dispatch({type:'STORETOKEN', payload: res.data.token});
      dispatch({type:'AUTHSTATUS'})
    } catch (err) {
      console.log(err);
      dispatch({type:'ERROR'})
    }
  };

  const handleEmailChange = e => {
    setInput(e.target.value);
  };
  const handlePasswordChange = e => {
    setInput1(e.target.value);
  };

  const handleClick = () => {
    getData(input, input1);
  };

  const isError = input === '';
  const isError1 = input1 === '';

  return (
    <FormControl isInvalid={isError && isError1}>
      <FormLabel>Email</FormLabel>
      <Input type="email" value={input} onChange={handleEmailChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Password</FormLabel>
      <Input type="password" value={input1} onChange={handlePasswordChange} />
      {!isError1 ? (
        <FormHelperText>
          Enter the password you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
      <Button
        mt={4}
        colorScheme="teal"
        type="submit"
        onClick={() => handleClick()}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default Login;
