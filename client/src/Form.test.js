import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Form} from './Form';


test('input is visible',()=>{
    const { getByTestId } = render(<Form />);
    const Input = getByTestId("input");
    expect(Input).toBeVisible();
})

test('form submit adds new animals to the list',()=>{
    const { getByTestId } = render(<Form />);
    const Input = getByTestId("input");
    fireEvent.change(Input,{target:{value:'Mary'}})
    expect(Input).toBe('Mary');
})