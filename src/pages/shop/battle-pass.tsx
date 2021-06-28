import { Layout } from '@components/shop/layout'
import { withSSRAuth } from '@utils/withSSRAuth'

const info = {
  page: 'Passe de Batalha',
  description: 'Conheça e fique por dentro de nosso passe de batalha!'
}

export default function BattlePass() {
  return (
    <Layout title="Passe de Batalha" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
