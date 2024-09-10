import { ButtonType } from "@/types/button.enum";
import { NextJSButtonParams } from "@/types/nextjs";


const Button = ({ children, type="button", style=ButtonType.PRIMARY, onClick=()=>{}}:NextJSButtonParams) => {
  return (
    <button className={`btn btn${style}`} type={`${type}`} onClick={onClick}>{children}</button>
  )
}

export default Button;