import Product from '../components/product/product';
import Detail from '../components/product/detail'
import { useRouter }  from 'next/router';

export default function Store() {
  const router = useRouter();
  const myParam = router.query.product;

  if(myParam) {
    return <Detail myParam={myParam} />
  }else {
    return <Product/>;
  }
}