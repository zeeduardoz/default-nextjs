import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AlertError, AlertSuccess, AlertWarn } from '@hooks/useAlert'
import { RecoverStep2 } from '@hooks/useRecoverPass'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AutoTabProvider } = require('react-auto-tab')

export function RecoverPassStep2Form() {
  const [useLoading, setLoading] = useState(false)

  const schema = Yup.object().shape({
    one: Yup.string().required(),
    two: Yup.string().required(),
    three: Yup.string().required(),
    four: Yup.string().required(),
    five: Yup.string().required()
  })

  const initialValues = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  async function handleRecover(data: any) {
    setLoading(true)
    try {
      const response = await RecoverStep2(data)

      if (response.data.status === 400) AlertWarn(response.data.message)
      if (response.data.status === 404) AlertError(response.data.message)
    } catch (err) {
      AlertError('Ocorreu um erro na requisição!')
    }
    setLoading(false)
  }

  const toInputUppercase = (e: any) => {
    e.target.value = ('' + e.target.value).toUpperCase()
  }

  const settings = {
    className: 'items-center flex justify-between mt-5',
    nextonmax: 1
  }

  return (
    <div className="px-14 w-full">
      <h1 className="text-5xl font-black text-color-light">Recuperar</h1>
      <p className="text-xl font-thin text-color-medium">
        Informe o código abaixo enviado para seu e-mail!
      </p>

      <form onSubmit={handleSubmit(handleRecover)} className="mt-10 w-full">
        <AutoTabProvider settings={settings}>
          <input
            {...register('one')}
            defaultValue={initialValues.one}
            type="text"
            name="one"
            maxLength={1}
            onInput={toInputUppercase}
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-center text-color-light w-full"
          />
          <input
            {...register('two')}
            defaultValue={initialValues.two}
            type="text"
            name="two"
            maxLength={1}
            onInput={toInputUppercase}
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-center text-color-light w-full"
          />
          <input
            {...register('three')}
            defaultValue={initialValues.three}
            type="text"
            name="three"
            maxLength={1}
            onInput={toInputUppercase}
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-center text-color-light w-full"
          />
          <input
            {...register('four')}
            defaultValue={initialValues.four}
            type="text"
            name="four"
            maxLength={1}
            onInput={toInputUppercase}
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-center text-color-light w-full"
          />
          <input
            {...register('five')}
            defaultValue={initialValues.five}
            type="text"
            name="five"
            maxLength={1}
            onInput={toInputUppercase}
            className="placeholder-gray-400 bg-transparent focus:border-blue-300 border-gray-300 border-b-2 text-sm mt-1 outline-none px-4 py-3 text-center text-color-light w-full"
          />
        </AutoTabProvider>

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
          {!useLoading && <span>Confirmar</span>}
        </button>
      </form>
    </div>
  )
}
