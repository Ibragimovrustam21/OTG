import './observe.scss'
import Pageheader from '../../../general/PageHeader';
import Overview from './OverviewProduct';
import Comments from './Comments';
import { useParams } from 'react-router';

const Observe = () => {
  const params = useParams()
  
  return (
    <div className='observe__wrapper'>
      <Pageheader arr={['products', `${params.id}`, `${params.item}`]} title={params.id || ''} />
      <Overview />
      <Comments />
    </div>
  )
}
export default Observe
