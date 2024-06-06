import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
  label?: string
  containerStyle?: string
}

const Input = ({
  label,
  id,
  name,
  className,
  containerStyle,
  ...restProps
}: InputProps) => {
  return (
    <div className={twMerge('flex flex-col gap-2', containerStyle)}>
      {label && (
        <label htmlFor={id} className='text-base font-normal'>
          {label}
        </label>
      )}
      <input
        name={name}
        id={id}
        className='outline-none border border-shade-400 h-10 rounded px-3 transition-colors duration-300 focus:border-primary'
        {...restProps}
      />
    </div>
  )
}

export default Input
