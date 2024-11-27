import { createContext, useContext, useState, useEffect } from "react";

const Authcontext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({ user: null, loading: true })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setAuth({ user: user, loading: false })
        }
        else {
            setAuth({ user: null, loading: false })
        }
    }, [])

    //^ login method 
    const login = (data) => {
        localStorage.setItem("user", JSON.stringify(data))
        setAuth({ user: data, loading: false })
    }

    const logout = () => {
        localStorage.removeItem("user")
        setAuth({ user: null, loading: false })
    }

    return <Authcontext.Provider value={{ auth, login, logout }}>
        {!auth.loading ? children : <p>not possible to see the data</p>}
    </Authcontext.Provider>

}

// * custom hook to use authcontext 
export const useAuth = () => {
    return useContext(Authcontext)
}