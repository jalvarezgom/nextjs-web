import { NextJSFormParams } from "@/types/nextjs";

const Form = ({title, subtitle, onSubmit, children, className=''}:NextJSFormParams) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  }

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
        {title && <h2>{title}</h2>}
        {subtitle && <p>{subtitle}</p>}
        {children}
      </form>
    </>
  );
}

export default Form;