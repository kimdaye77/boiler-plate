import { Axios } from "axios";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '../_actions/user_action';

export default function (SpecifiComponent, option, adminRoute = null) {
    function AuthenticationCheck() {
        const dispatch = useDispatch();
        let navigate = useNavigate();

        useEffect(() => {

            dispatch(auth()).then(response => {
                //로그인하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        navigate('/login')
                    }
                } else {
                    //로그인 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    } else {
                        if (option === false) 
                            navigate('/')
                    }
                }
            })
            
        }, [])
        
        return (
            <SpecifiComponent />
        )
            
    }


    return AuthenticationCheck
}