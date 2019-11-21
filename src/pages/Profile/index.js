import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { singOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarIpunt from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSingOut() {
        dispatch(singOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarIpunt name="avatar_id" />
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />
                <hr />
                <Input
                    tyoe="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    tyoe="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    tyoe="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="submit" onClick={handleSingOut}>
                Sair do GoBarber
            </button>
        </Container>
    );
}
