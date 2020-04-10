import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import {Form} from './Form';

test('input is available',()=>{
    const { getByLabelText } = render(<Form />);
    const Input = getByLabelText(/Full Name/i);
    fireEvent.change(Input,{target:{value:'Mary'}})
    expect(Input.value).toBe('Mary');
})

test('input is visible',()=>{
    const { getByLabelText } = render(<Form />);
    const Input = getByLabelText(/Full Name/i);
    expect(Input).toBeVisible;
})