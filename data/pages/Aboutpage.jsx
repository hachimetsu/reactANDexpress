import * as React from 'react'

export default function Aboutpage() {
    let url = "https://3000-hachimetsu-reactandexpr-rqmxcdeu0oe.ws-us78.gitpod.io/posts"; 
    fetch(url)
        .then(resp => resp.json())
        .then(({ email, password }) => {
            console.log(email);
            console.log(password);
        });
    return <>
        <div className="text-center">This is Apoutpage ...</div>

    </>
}