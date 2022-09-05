import { createContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from 'aws-amplify'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    try{
        let user;

        setTimeout(() => {
            Auth.currentAuthenticatedUser()
            .then(_user => {
                user = _user;
            })
            .catch(err => console.log(err));
        }
        , 1000);

        const navigate = useNavigate();

        // call this function when you want to authenticate the user
        const login = async (data) => {
            try {
                const user = await Auth.signIn(data.username, data.password);
                console.log(user);
                navigate("/");
            }
            catch (err) {
                console.log(err);
            }
        };

        // call this function to sign out logged in user
        const logout = () => {
            Auth.signOut()
            .then(data => {
                console.log(data);
                navigate("/login");
            }).catch(err => {
                console.log(err);
            }
            );
        };

        const value = useMemo(
            async () => ({
                user,
                login,
                logout
            }),
            [user]
        );

        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    }catch(er){
        console.log(er);
    }
}