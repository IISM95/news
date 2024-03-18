//список новостей после главной новости которые мепятся в настроенную карточку
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./styles.module.css";


export const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {
        news.map(item => (
          <NewsItem key={item.id} item={item}/>
        ))
      }
    </ul>
  );
};