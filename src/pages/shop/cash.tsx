import { Layout } from '@components/shop/layout'
import { withSSRAuth } from '@utils/withSSRAuth'

const info = {
  page: 'Cash',
  description: 'Conheça todos nossos pacotes de cash no servidor!'
}

export default function Cash() {
  return (
    <Layout title="Cash" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
