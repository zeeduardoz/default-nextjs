import Link from 'next/link'
import Router from 'next/router'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaDiscord } from 'react-icons/fa'

import { AuthContext } from '@contexts/AuthContext'
import { AlertError } from '@hooks/useAlert'
import { DiscordSignIn } from '@hooks/useOauth'

export function LoginForm() {
  const { signIn } = useContext(AuthContext)
  const [useLoading, setLoading] = useState(false)
  const [useLoadingDc, setLoadingDc] = useState(false)

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Informe o email!')
      .email('Informe um email válido!'),
    password: Yup.string().required('Informe a senha!')
  })

  const initialValues = {
    email: '',
    password: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  async function handleSignIn(data: any) {
    setLoading(true)
    try {
      await signIn(data)
    } catch (err) {
      AlertError('Ocorreu um erro na requisição!')
    }
    setLoading(false)
  }

  async function signInDiscord() {
    setLoadingDc(true)
    DiscordSignIn().then(url => {
      Router.push(url)
    })
    setLoadingDc(false)
  }

  return (
    <div className="px-14 w-full">
      <h1 className="text-5xl font-black text-color-light">Entrar</h1>
      <p className="text-xl font-thin text-color-medium">
        Acesse sua conta, inserindo suas credenciais no servidor!
      </p>

      <form onSubmit={handleSubmit(handleSignIn)} className="mt-10 w-full">
        <div className="mt-6">
          <label htmlFor="email" className="block text-color-medium">
            E-mail
          </label>
          <input
            {...register('email')}
            defaultValue={initialValues.email}
            type="email"
            name="email"
            placeholder="nome@email.com"
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-color-light w-full"
          />
          {errors.email && (
            <p className="text-sm py-1 text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="mt-6">
          <label htmlFor="password" className="block text-color-medium">
            Senha
          </label>
          <input
            {...register('password')}
            defaultValue={initialValues.password}
            type="password"
            name="password"
            placeholder="Insira sua senha"
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-color-light w-full"
          />
          {errors.password && (
            <p className="text-sm py-1 text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mt-2 text-right">
          <Link href="/auth/recover-pass-step1">
            <a className="hover:text-utils-primary focus:text-utils-primary cursor-pointer text-sm font-semibold text-color-medium">
              Esqueceu a senha?
            </a>
          </Link>
        </div>

        <button
          type="submit"
          className="items-center bg-color-success hover:bg-opacity-90 rounded shadow-md inline-flex text-lg font-bold justify-center tracking-wider mt-10 focus:outline-none px-4 py-3 text-white uppercase duration-150 transition ease-in-out w-full"
          disabled={useLoading}
        >
          {useLoading && (
            <svg
              className="animate-spin h-5 -ml-1 mr-3 text-white w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {useLoading && <span>Aguarde</span>}
          {!useLoading && <span>Entrar</span>}
        </button>
        <div className="items-center inline-flex justify-center my-10 w-full">
          <hr className="border-hr-color w-1/3" />
          <p className="text-2xl tracking-wider px-5 text-center text-color-medium">
            OU
          </p>
          <hr className="border-hr-color w-1/3" />
        </div>
        <button
          type="button"
          onClick={() => signInDiscord()}
          className="items-center bg-blue-900 hover:bg-opacity-90 rounded shadow-md inline-flex text-lg font-bold justify-center tracking-wider focus:outline-none px-4 py-3 text-white duration-150 transition ease-in-out w-full"
          disabled={useLoadingDc}
        >
          {useLoadingDc && (
            <svg
              className="animate-spin h-5 -ml-1 mr-3 text-white w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {useLoadingDc && <span>Aguarde</span>}
          {!useLoadingDc && (
            <span className="items-center flex">
              <FaDiscord className="mr-2" /> Entrar com Discord
            </span>
          )}
        </button>
      </form>
    </div>
  )
}
