import Image from 'next/image';
import Styles  from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import NewsList from './_components/NewsList';
import { getNewsList } from './_libs/microcms';
import { TOP_NEWS_LIMIT } from './_constants';


export default async function Home() {

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={Styles.top}>
        <div>
          <h1 className={Styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={Styles.description}>私達は市場をリードしているグローバルカンパニーです</p>
        </div>
        <Image className={Styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200}/>
      </section>
      <section className={Styles.news}>
        <h2 className={Styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={Styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  )
}