import Form from './styles/Form';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'; 
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
import { 
    faEye,
} from '@fortawesome/free-solid-svg-icons';
import { CURRENT_USER_QUERY } from './User';

const EyeReveal = styled.div`
  .cursor-pointer {
    cursor: pointer;
  }

  .show{
  	opacity: 1;
  }

  .hide {
  	opacity: 0.5;
  }
`;

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($email: String! $password: String! $token: String!){
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
        code
        message
    }
  }
`;

export default function Reset({ token }) {

    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
        token,
    });

    const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, 
        {
            variables: inputs,
        }
    );

    const successfulError = data?.redeemUserPasswordResetToken?.code ? data?.redeemUserPasswordResetToken : undefined;

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        const res = await reset().catch(console.error);
        console.log(res);
        console.log({ data, loading, error });
        resetForm();
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Reset Your Password</h2>
            <fieldset>
                {data?.redeemUserPasswordResetToken === null && (
                    <p>Success! You can now sign in</p>
                )}
                <Error error={error || successfulError} />
                <label htmlFor="email">
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email Address" 
                        autoComplete="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                        Password
                            
                            <div className="float-right mt-1 cursor-pointer">
                                <small>
                                    <span className="pr-1">Show Password </span>
                                    <FontAwesomeIcon icon={faEye} />
                                </small>
                            </div>
                                                            
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Password" 
                            autoComplete="password"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                        
                    </label>
                <button type="submit">Request Reset</button>
                <div className="float-right mt-1">
                    <small>
                        <a className="member-link" href="/signin"><span className="cursor-pointer">Sign In</span></a> or <a className="member-link" href="/signup"><span className="pr-1 cursor-pointer">Sign Up</span></a>
                    </small>
                </div>
            </fieldset>
        </Form>
    );
}