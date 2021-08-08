
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction, tokenRetriveAction, fetchStateAction } from '../Redux/Actions';
import React, { Component } from 'react'

export default class Services extends Component {

    constructor() {
        this.dispatch = useDispatch();
    }


    loginUser = async (userName, password) => {
        try {
            const authResponce = await fetch('https://dev-saas-au.i4tradies.com/api/v2/auth', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: "3",
                    client_secret: "wYGlGHN3kZsUgEvfqNUFmiolfLUJBL6NE3yjElpD",
                    grant_type: "password",
                    username: userName,
                    password: password
                })
            })
            if (authResponce.status == 200) {
                const json = await authResponce.json()
                console.log('login Responce :', json)
                this.dispatch(loginAction(json.result.access_token));
            } else {
                this.dispatch(loginAction(null));
            }

        } catch (error) {
            console.error(error)
        } finally {
            console.log('Login API call Ended');
        }
    }
}

