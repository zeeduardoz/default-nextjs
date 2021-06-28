import { useContext, useEffect, useState } from 'react'
import {
  FaGlobe,
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingBag,
  FaSignOutAlt
} from 'react-icons/fa'
import axios from 'axios'

import { AuthContext } from '@contexts/AuthContext'
import { Theme } from '@components/utils/theme'

export function Header(props: any) {
  const { useUser, useLoading, signOut } = useContext(AuthContext)
  const [useNav, setNav] = useState(false)
  const [useOnline, setOnline] = useState(0)
  const [useMain, setMain] = useState(true)

  useEffect(() => {
    if (props.info != null) setMain(false)
    axios
      .get(`https://api.mcsrvstat.us/2/hylex.net`)
      .then(response => {
        setOnline(response.data.players.online)
      })
      .catch()
  }, [])

  return (
    <header
      className={
        useMain ? 'bg-header bg-cover h-screen' : 'bg-header bg-cover h-1/2'
      }
    >
      <nav>
        <div className="bg-color-info p-5">
          <p className="italic text-center text-white">
            {' '}
            Promoção de Inverno! Toda a loja tem 15% de desconto por tempo
            limitado.
          </p>
        </div>
        <div className="bg-secondary">
          <div className="items-center flex justify-between">
            <a
              href="/"
              className="items-center flex hover:opacity-80 px-10 delay-100 transition"
            >
              <img src="/logo.png" alt="Logo" width="50" />
              <hr className="bg-gray-300 hidden px-10 rotate-90 transform xl:block" />
              <p className="hidden text-4xl font-black tracking-wider text-white uppercase xl:block">
                hylex.net
              </p>
            </a>
            <div className="items-center flex justify-between">
              <a className="items-center hidden text-xl font-thin mr-5 hover:opacity-90 p-10 text-color-success delay-100 transition lg:flex">
                <FaGlobe className="mr-2" /> {useOnline} Jogadores online.
              </a>
              <Theme />
              {useLoading ? (
                <div className="animate-pulse bg-color-info cursor-pointer hidden p-14 px-28 lg:block"></div>
              ) : (
                <>
                  {useUser ? (
                    <div className="items-center hidden justify-between lg:flex">
                      <a
                        href="/cart"
                        className="text-3xl font-black tracking-wider hover:opacity-90 px-10 text-white uppercase delay-100 transition lg:block"
                      >
                        <FaShoppingBag />
                      </a>
                      <a
                        href="/account/perfil"
                        className="bg-color-info hidden text-2xl font-black tracking-wider hover:opacity-90 p-11 text-white uppercase delay-100 transition lg:block"
                      >
                        <FaUser />
                      </a>
                      <a
                        onClick={() => signOut()}
                        className="bg-color-info cursor-pointer hidden text-2xl font-black tracking-wider hover:opacity-90 p-11 text-white uppercase delay-100 transition lg:block"
                      >
                        <FaSignOutAlt />
                      </a>
                    </div>
                  ) : (
                    <a
                      href="/auth/login"
                      className="bg-color-info hidden text-2xl font-black tracking-wider hover:opacity-90 p-10 text-white uppercase delay-100 transition lg:block"
                    >
                      Minha conta
                    </a>
                  )}
                </>
              )}
              <a
                onClick={() => setNav(!useNav)}
                className="bg-color-info block text-4xl font-black tracking-wider hover:opacity-90 p-8 text-white uppercase delay-100 transition lg:hidden"
              >
                {useNav ? <FaTimes /> : <FaBars />}
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            useNav
              ? 'bg-black h-auto absolute w-screen py-12 space-y-10'
              : 'hidden'
          }
        >
          <div className="items-center flex justify-center">
            <a
              href="/account/perfil"
              className="block text-3xl font-bold hover:opacity-70 px-8 text-center text-white uppercase delay-100 transition"
            >
              <FaUser />
            </a>
            <a
              href="/cart"
              className="0 block text-3xl font-bold hover:opacity-70 px-8 text-center text-white uppercase delay-100 transition"
            >
              <FaShoppingBag />
            </a>
            <a
              onClick={() => signOut()}
              className="block text-3xl font-bold hover:opacity-70 px-8 text-center text-white uppercase delay-100 transition"
            >
              <FaSignOutAlt />
            </a>
          </div>
          <hr className="border-hr-color mx-auto pb-5 w-1/3" />
          <a
            href="/"
            className="block text-xl font-bold hover:opacity-70 text-center text-white uppercase delay-100 transition w-full"
          >
            Início
          </a>
          <a
            href="/shop"
            className="block text-xl font-bold hover:opacity-70 text-center text-white uppercase delay-100 transition w-full"
          >
            Loja
          </a>
          <a
            href="/shop/battle-pass"
            className="block text-xl font-bold hover:opacity-70 text-center text-white uppercase delay-100 transition w-full"
          >
            Passe de Batalha
          </a>
          <a
            href="/team"
            className="block text-xl font-bold hover:opacity-70 text-center text-white uppercase delay-100 transition w-full"
          >
            Equipe
          </a>
          <a
            href="/punish"
            className="block text-xl font-bold hover:opacity-70 text-center text-white uppercase delay-100 transition w-full"
          >
            Punições
          </a>
          <a
            href="/rules"
            className="block text-xl font-bold hover:opacity-70 text-center text-white uppercase delay-100 transition w-full"
          >
            Regras
          </a>
          <a
            href="/support"
            className="block text-xl font-bold hover:opacity-70 text-center text-white uppercase delay-100 transition w-full"
          >
            Suporte
          </a>
        </div>
        <div className="bg-black bg-opacity-50">
          <div className="items-center hidden justify-center py-5 space-x-16 lg:flex">
            <a
              href="/"
              className="text-lg font-bold hover:opacity-70 text-white uppercase delay-100 transition"
            >
              Início
            </a>
            <a
              href="/shop"
              className="text-lg font-bold hover:opacity-70 text-white uppercase delay-100 transition"
            >
              Loja
            </a>
            <a
              href="/shop/battle-pass"
              className="text-lg font-bold hover:opacity-70 text-white uppercase delay-100 transition"
            >
              Passe de Batalha
            </a>
            <a
              href="/team"
              className="text-lg font-bold hover:opacity-70 text-white uppercase delay-100 transition"
            >
              Equipe
            </a>
            <a
              href="/punish"
              className="text-lg font-bold hover:opacity-70 text-white uppercase delay-100 transition"
            >
              Punições
            </a>
            <a
              href="/rules"
              className="text-lg font-bold hover:opacity-70 text-white uppercase delay-100 transition"
            >
              Regras
            </a>
            <a
              href="/support"
              className="text-lg font-bold hover:opacity-70 text-white uppercase delay-100 transition"
            >
              Suporte
            </a>
          </div>
          <div className="items-center flex justify-center py-5 space-x-16 lg:hidden">
            <a
              href=""
              className="items-center flex text-lg font-thin mr-5 hover:opacity-90 text-color-success delay-100 transition lg:hidden"
            >
              <FaGlobe className="mr-2" /> {useOnline} Jogadores online.
            </a>
          </div>
        </div>
      </nav>

      {useMain ? (
        <></>
      ) : (
        <div className="items-center flex justify-center w-full">
          <div className="py-36">
            <h1 className="text-4xl font-black text-center text-white">
              {props.info.page}
            </h1>
            <p className="text-xl font-light text-color-medium">
              {props.info.description}
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
