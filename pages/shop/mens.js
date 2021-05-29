import Layout from '../../components/layout/Layout'
import MenuContainerShop from '../../components/home/MenuContainerShop'


export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/mens');
  const products= await response.json()
  return {
    props:{
      products
    }
  }
}
const Mens=({products})=> {
  return (
    <Layout>
      <MenuContainerShop key={products[0].cid}  products={products} category='MENS'/>
    </Layout>

   
  )
}
export default Mens;
