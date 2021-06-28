import { Layout } from '@components/account/layout'
import { withSSRAuth } from '@utils/withSSRAuth'

const info = {
  page: 'Meu perfil',
  description: 'Acesse todas as informações disponíveis sobre seu perfil!'
}

export default function Perfil() {
  return (
    <Layout title="Meu perfil" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
