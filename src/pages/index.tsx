import { Layout } from '@components/main/layout'

const info = {
  page: 'No page',
  description: 'No description'
}

export default function Home() {
  return (
    <Layout title="Início" header={info}>
      <div className="bg-primary py-16"></div>
    </Layout>
  )
}
