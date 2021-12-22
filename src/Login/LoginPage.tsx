import React, {FC, ReactElement} from 'react';
import {Form} from "react-bootstrap";
import {Button} from "../Components";
import { useState } from 'react';
import { useLoginContext } from './LoginProvider';

const checkPassword = (password : string)=>password === process.env.REACT_APP_PASSWORD;

export type LoginPageProps = {}

export const LoginPage : FC<LoginPageProps>  = () =>{

    const [failedLogin, setFailedLogin] = useState(false);
    const {
        set
    } = useLoginContext();

    const [passProvided, setPassProvided] = useState<string | undefined>(undefined);
    const handleLogin = ()=>{
        if(passProvided && checkPassword(passProvided)) set((state)=>{
            return {
                ...state,
                loggedIn : true
            }
        }); else setFailedLogin(true)
    }

    return (

        <div style={{
            height : "100vh",
            width : "100vw",
            display : "grid",
            alignContent : "center",
            alignItems : "center",
            justifyContent : "center",
            justifyItems : "center",
            background : "#ac72ac"
        }}>
            <img style={{
                width : "30%"
            }} src={"https://i.pinimg.com/originals/7d/b3/24/7db324ed27acf79d21e3a3132287623c.gif"} />
            <Form style={{
                height  : "20%",
                textAlign : "left"
            }}>
                <Form.Control 
                onKeyDown={(e)=>{
                    if(e.key=="Enter")handleLogin();
                }}
                placeholder={"Password"}
                style={{
                    width : "100%",
                    background : "#c8a2c8",
                    color : "white"
                }}
                onChange={(e)=>{
                    setPassProvided(e.target.value)
                }}
                type={"password"}/>
                <div style={{
                    height : "30px"
                }}>
                {failedLogin && <span style={{
                    color : "salmon"
                }}>That's not right, Nagu.</span>}
                </div>
               <div style={{
                   display : "flex",
                   flexDirection : "row-reverse"
               }}>
                    <Button 
                    color="#ac72ac"
                    onClick={handleLogin}>
                        Login
                    </Button>
               </div>
            </Form>
        </div>

    )

}