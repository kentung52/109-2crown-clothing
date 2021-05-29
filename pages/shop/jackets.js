import Layout from '../../components/layout/Layout'
import MenuContainerShop from '../../components/home/MenuContainerShop'


export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/jackets');
  const products= await response.json()
  return {
    props:{
      products
    }
  }
}
const Jackets=({products})=> {
  return (
    <Layout>
      <MenuContainerShop key={products[0].cid}  products={products} category='JACKETS'/>
    </Layout>

   
  )
}
export default Jackets;
