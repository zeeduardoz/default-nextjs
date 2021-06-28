import { Layout } from '@components/shop/layout'
import { withSSRAuth } from '@utils/withSSRAuth'

const info = {
  page: 'Loja',
  description:
    'Compre em nossa loja, e consiga vantagens ou benefícios em nosso servidor!'
}

export default function Shop() {
  return (
    <Layout title="Loja" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
