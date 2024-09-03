'use client'


import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ButtonType } from "@/types/button";


const TestPage = () => {
  const button_text = "Save changes";

  const test_fetch = async () => {
    let url = 'http://178.33.249.178:8002/api/auth/login/';
    let options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: '{"username":"kelsier_admin","password":"nrg"}'
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    url = 'http://178.33.249.178:8002/api/auth/me/';
    options = {method: 'GET', headers: {Authorization: 'Token c6b91908af062525eb6ee020ccfb741aa9d990d1'}};

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  } 

  const handleClick = () => {
    console.log("Button clicked");
    test_fetch()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <>
      <main className="flex flex-col min-h-screen  items-center p-24">
        <p>Guia de estilos</p>
        <p className="pt-5">Botones</p>
        <section>
          <Button onClick={handleClick}> {button_text} </Button>
          <Button style={ButtonType.PRIMARY_LIGHT}> {button_text} </Button>
          <Button style={ButtonType.PRIMARY_OUTLINE}> {button_text} </Button>
          <Button style={ButtonType.PRIMARY_EMPTY}> {button_text} </Button>
        </section>
        <p className="pt-5">Inputs</p>
        <Input type="text" title={"Username"} placeholder="Enter your username..." helper="Informacion del usuario" onChange={handleChange}></Input>
        <br />
        <Input type="password" title={"Password"} onChange={handleChange}></Input>
      </main>
    </>

    
  );
}

export default TestPage;