import { FC, useState } from 'react'
import { Loader } from '@alfalab/core-components/loader'
import { Typography } from '@alfalab/core-components/typography'
import { HeartMIcon } from '@alfalab/icons-glyph/HeartMIcon'
import { HeartLineMIcon } from '@alfalab/icons-glyph/HeartLineMIcon'
import { TrashCanLineMIcon } from '@alfalab/icons-glyph/TrashCanLineMIcon'

import { cardsDataApi } from '../../services/cardsDataApi'
import { useAppDispatch } from '../../hook'
import { CardData } from '../../types'
import { addToFavorites, removeFromFavorites } from '../../store/cardsDataSlice'

import styles from './style.module.css'

type Props = {
  item: CardData
  index: number
  id: number
  isFavorite: boolean
  openGallery: (slideIndex: number) => void
}

export const Card: FC<Props> = ({
  item,
  index,
  id,
  isFavorite,
  openGallery,
}) => {
  const dispatch = useAppDispatch()

  const [favorite, setFavorite] = useState<boolean>(isFavorite)
  const [loading, setLoading] = useState<boolean>(true)

  const handleFavorite = () => {
    setFavorite(!favorite)
    if (!favorite) {
      dispatch(addToFavorites(id))
    } else {
      dispatch(removeFromFavorites(id))
    }
  }

  const handleDelete = () => {
    dispatch(removeFromFavorites(id))
    dispatch(
      cardsDataApi.util.updateQueryData('getItems', undefined, (items) =>
        items.filter((item) => item.id !== id)
      )
    )
  }

  const handleLoad = () => setLoading(false)

  return (
    <div className={styles.card}>
      <div
        className={styles.imageWrapper}
        onClick={() => {
          openGallery(index)
        }}
      >
        {loading && <Loader className={styles.loader} />}
        <img
          className={styles.image}
          src={item.image_link}
          alt={item.name}
          onLoad={handleLoad}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Typography.TitleResponsive
            tag="h2"
            view="xsmall"
            color="primary"
            weight="medium"
          >
            {item?.name}
          </Typography.TitleResponsive>
          <div className={styles.iconsWrapper}>
            <span onClick={handleFavorite} className={styles.iconWrapper}>
              {favorite ? (
                <HeartMIcon className={styles.icon} />
              ) : (
                <HeartLineMIcon className={styles.icon} />
              )}
            </span>
            <TrashCanLineMIcon
              onClick={handleDelete}
              className={styles.icon}
            ></TrashCanLineMIcon>
          </div>
        </div>
        <div>
          <Typography.Text tag="p" view="primary-small">
            {item?.geo_range}
          </Typography.Text>
        </div>
      </div>
    </div>
  )
}
