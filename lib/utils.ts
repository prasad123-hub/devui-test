import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import prettier from 'prettier/standalone'
import babel from 'prettier/parser-babel'

export const format = (code: string) => {
  const formatedJsxString = prettier.format(code, {
    parser: 'babel',
    plugins: [babel],
    semi: false,
    printWidth: 80,
  })
  return formatedJsxString.slice(1)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
