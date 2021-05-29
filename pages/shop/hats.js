import Layout from '../../components/layout/Layout'
import MenuContainerShop from '../../components/home/MenuContainerShop'


export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/hats');
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
    
      <MenuContainerShop key={products[0].cid}  products={products} category='HATS'/>
     
    </Layout>

   
  )
}
export default Home
