import Layout from '../../components/layout/Layout'
import MenuContainer from '../../components/home/MenuContainer'
import MenuContainerShop from '../../components/home/MenuContainerShop'


export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop');
  const products= await response.json()
  return {
    props:{
      products
    } 

  };
}
const Shop=({products})=> {
 
  return (

    <Layout>
        <MenuContainerShop key={products[0].cid}  products={products}  category='SHOP' />
    </Layout>

   
  )
}
export default Shop
