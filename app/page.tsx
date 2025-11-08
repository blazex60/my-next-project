import Image from 'next/image';
import Styles  from './page.module.css';

export default function Home() {
  const name:string = "世界";
  return (
    <div>
      <h1 className="title">テクノロジーの力で{name}を変える</h1>
      <p className='description'>私達は市場をリードしているグローバルカンパニーです</p>
    </div>
  )
}