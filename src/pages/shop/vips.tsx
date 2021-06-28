import { Layout } from '@components/shop/layout'
import { withSSRAuth } from '@utils/withSSRAuth'

const info = {
  page: 'Vips',
  description: 'Conheça e fique por dentro de todos os vips do servidor!'
}

export default function Vips() {
  return (
    <Layout title="Vips" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
