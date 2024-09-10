'use client'

import { ButtonType } from "@/types/button.enum";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Form from "./Form"
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RouterURL } from "@/types/router.enum";

const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });


  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('user', user);
    await signOut({
      redirect: false,
    })
    signIn('credentials', {
      username: user.username,
      password: user.password,
      redirect: false
    }).then((data) => {
      console.log('resp', data);
      if (data?.error) {
        console.log('error', data.error); // TODO: show error message using toast
        return;
      }
      router.push(RouterURL.GUIDE_STYLES);
    });
  }

  return (
    <>
      <section className="login__container">
        <Form className="login__form " onSubmit={handleSubmitLogin}>
          <section className="header">
            <Image src="/nrg_logo.svg" alt="" width={150} height={150}/>
          </section>
          <section className="body">
            <Input type="text" title="Login" placeholder="Enter your username..." id="username" name="username" value={user.username} onChange={handleInputChange}/>
            <Input type="text" title="Password" placeholder="Enter your password..." id="password" name="password" value={user.password} onChange={handleInputChange}/>
          </section>
          <section className="bottom ">
            <article>
              <Button type="submit"> Sign in </Button>
              <Button style={ButtonType.PRIMARY_OUTLINE}> Forgot password </Button>
            </article>
            <hr className="rounded"/>
            <Button style={ButtonType.PRIMARY_EMPTY}> Register</Button>
          </section>
        </Form>
      </section>
    </>
  );
    
}

export default LoginForm
