import { ButtonType } from "@/types/button";
import { NextJSButtonParams } from "@/types/nextjs";
import "@/assets/styles/main.scss"


const Button = ({ children, type="button", style=ButtonType.PRIMARY, onClick=()=>{}}:NextJSButtonParams) => {
  return (
    <button className={`btn btn${style}`} type={`${type}`} onClick={onClick}>{children}</button>
  )
}

export default Button;