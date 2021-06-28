import { Layout } from '@components/main/layout'
import { withSSRGuest } from '@utils/withSSRGuest'

const info = {
  page: 'Equipe',
  description: 'Fique por dentro e conheça todos os nosso membros da equipe!'
}

export default function Team() {
  return (
    <Layout title="Equipe" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} }
})
