import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { singInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('o e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve term entre 6 e 14 caracters')
        .max(14, 'A senha deve term entre 6 e 14 caracters')
        .required('A senha é obrigatória')
});

export default function SingIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(singInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">
                    {loading ? 'Carregando...' : 'Acessar'}
                </button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
