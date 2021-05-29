import Layout from '../../components/layout/Layout'
import MenuContainerShop from '../../components/home/MenuContainerShop'


export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/overview');
  const products= await response.json()
  return {
    props:{
      products
    }
  }
}
const Home=({products})=> {
  return (
    <Layout>
      <MenuContainerShop key={products[0].cid}  products={products} category='OVERVIEW'/>
    </Layout>

   
  )
}
export default Home
