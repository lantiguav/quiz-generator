import { forwardRef } from 'react'

type InputTextProps = {
  className?: string
  id?: string
  name?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText(
    { className, id, name, placeholder, onChange, onBlur }: InputTextProps,
    ref
  ) {
    return (
      <input
        className={`border-2 mr-4 p-1 rounded-sm ${className}`}
        type='text'
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    )
  }
)
