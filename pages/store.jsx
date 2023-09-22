import Product from '../components/product/product';
import Detail from '../components/product/detail'
import { useRouter } from 'next/router';
import data from "../components/product/data";

export default function store() {
  const router = useRouter();
  const myParam = router.query.product;
  console.log(myParam);
  if(myParam) {
    return <Detail myParam={myParam} />
  }else {
    return <Product/>;
  }
}