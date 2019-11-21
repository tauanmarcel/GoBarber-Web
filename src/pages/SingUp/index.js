import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { singUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('o e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve term entre 6 e 14 caracters')
        .max(14, 'A senha deve term entre 6 e 14 caracters')
        .required('A senha é obrigatória')
});

export default function SingUp() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ name, email, password }) {
        dispatch(singUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">
                    {loading ? 'Carregando...' : 'Criar conta'}
                </button>
                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </>
    );
}
