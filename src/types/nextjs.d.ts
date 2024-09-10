import { ButtonType } from "./button.enum"

export interface NextJSSlug {
  params: {
    slug: string
  }
}

export interface NextJSChildren {
  children: React.ReactNode  
}

export interface NextJSButtonParams {
  type?: "button" | "submit" | "reset"
  style?: ButtonType
  onClick?: () => void
  children: React.ReactNode
}
  
export interface NextJSInputParams {
  title: string
  placeholder?: string
  helper?: string | React.ReactNode
  id?: string
  name?: string
  type: string
  value?: string
  isDisabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface NextJSFormParams {
  title?: string
  subtitle?: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  className?: string
}

