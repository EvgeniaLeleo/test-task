import { Typography } from '@alfalab/core-components/typography/component'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Gallery } from '../../components/Gallery/Gallery'
import { useAppSelector } from '../../hook'
import { useGetItemsQuery } from '../../services/cardsDataApi'
import { favoriteItemsSelector } from '../../store/selectors/cardsData'

export const Favorites = () => {
  const favoriteItems = useAppSelector(favoriteItemsSelector)
  const { data } = useGetItemsQuery()

  return (
    <div>
      <Link to="/">
        <Button disabled={false}>Показать все</Button>
      </Link>

      {!favoriteItems.length && (
        <Typography.Text view="primary-large" weight="medium" tag="p">
          Избранных карточек пока нет!
        </Typography.Text>
      )}

      <Gallery
        items={data?.filter((item) => favoriteItems.includes(item.id))}
      />
    </div>
  )
}
