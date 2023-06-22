import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`px-14 py-2.5 w-max rounded bg-brand hover:brightness-110 transition-all text-dark-40 text-sm font-semibold ${className}`}>
      {children}
    </button>
  )
}