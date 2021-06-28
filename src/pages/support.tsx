import { Layout } from '@components/main/layout'
import { withSSRGuest } from '@utils/withSSRGuest'

const info = {
  page: 'Suporte',
  description: 'Precisa de suporte ou tem alguma duvida? Podemos te ajudar!'
}

export default function Support() {
  return (
    <Layout title="Suporte" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} }
})
