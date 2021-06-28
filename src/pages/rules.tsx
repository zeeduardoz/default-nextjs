import { Layout } from '@components/main/layout'
import { withSSRGuest } from '@utils/withSSRGuest'

const info = {
  page: 'Regras',
  description: 'Fique por dentro de todas as regras de nossa rede!'
}

export default function Rules() {
  return (
    <Layout title="Regras" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} }
})
