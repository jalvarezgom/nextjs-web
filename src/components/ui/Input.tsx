import { NextJSInputParams } from "@/types/nextjs";

const Input = ({title, placeholder, helper, id, name, type, value, isDisabled=false, onChange }:NextJSInputParams) => {
  
  return (
    <article className="input">
      <label className="input__title">{title}</label>
      <input type={type} className="input__input" placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} disabled={isDisabled} />
      <span className="input__helper">{helper}</span>
    </article>);
}

export default Input;