import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AlertError, AlertSuccess, AlertWarn } from '@hooks/useAlert'
import { RecoverStep1 } from '@hooks/useRecoverPass'

export function RecoverPassStep1Form() {
  const [useLoading, setLoading] = useState(false)

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Informe o email!')
      .email('Informe um email válido!'),
    username: Yup.string().required('Informe o nome no servidor!')
  })

  const initialValues = {
    email: '',
    username: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  async function handleRecover(data: any) {
    setLoading(true)
    try {
      const response = await RecoverStep1(data)

      if (response.status === 200) AlertSuccess(response.message)
      if (response.status === 400) AlertWarn(response.message)
      if (response.status === 404) AlertError(response.message)
    } catch (err) {
      AlertError('Ocorreu um erro na requisição!')
    }

    setLoading(false)
  }

  return (
    <div className="px-14 w-full">
      <h1 className="text-5xl font-black text-color-light">Recuperar</h1>
      <p className="text-xl font-thin text-color-medium">
        Complete as informações abaixo, para prosseguir!
      </p>

      <form onSubmit={handleSubmit(handleRecover)} className="mt-10 w-full">
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
          <label htmlFor="username" className="block text-color-medium">
            Nome no servidor
          </label>
          <input
            {...register('username')}
            defaultValue={initialValues.username}
            type="username"
            name="username"
            placeholder="Insira seu nome no servidor"
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-color-light w-full"
          />
          {errors.username && (
            <p className="text-sm py-1 text-red-400">
              {errors.username.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="items-center bg-color-success hover:bg-opacity-90 rounded shadow-md inline-flex text-lg font-bold justify-center tracking-wider mt-14 focus:outline-none px-4 py-3 text-white uppercase duration-150 transition ease-in-out w-full"
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
          {!useLoading && <span>Solicitar</span>}
        </button>
      </form>
    </div>
  )
}
