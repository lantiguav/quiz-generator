type InputTextProps = {
  className?: string
  id?: string
  name?: string
  placeholder?: string
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
}

export const InputText = ({ className, id, name, placeholder, onChange, onBlur } : InputTextProps) => {
  return (
    <input
      className={`border-2 mr-4 p-1 rounded-sm ${className}`}
      type='text'
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}
