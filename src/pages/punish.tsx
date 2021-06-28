import { Layout } from '@components/main/layout'
import { withSSRGuest } from '@utils/withSSRGuest'

const info = {
  page: 'Puniçõs',
  description: 'Tenha acesso a todas as punições realizadas em nossa rede!'
}

export default function Punish() {
  return (
    <Layout title="Punições" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} }
})
