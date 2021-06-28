import { Layout } from '@components/account/layout'
import { withSSRAuth } from '@utils/withSSRAuth'

const info = {
  page: 'Minhas compras',
  description: 'Tenha acesso a todas as suas compras realizadas no site!'
}

export default function Perfil() {
  return (
    <Layout title="Minhas compras" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
