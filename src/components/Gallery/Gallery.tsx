import { FC, useState } from 'react'
import { Gallery as AlphaGallery } from '@alfalab/core-components/gallery'

import { Card } from '../Card/Card'
import { CardData } from '../../types'
import { favoriteItemsSelector } from '../../store/selectors/cardsData'
import { useAppSelector } from '../../hook'

import styles from './style.module.css'

type Props = { items?: CardData[] }

export const Gallery: FC<Props> = ({ items }) => {
  const favoriteItems = useAppSelector(favoriteItemsSelector)

  const [open, setOpen] = useState<boolean>(false)
  const [initialSlide, setInitialSlide] = useState<number>(0)

  const openGallery = (slideIndex: number) => {
    setInitialSlide(slideIndex)
    setOpen(true)
  }

  const closeGallery = () => {
    setInitialSlide(0)
    setOpen(false)
  }

  return (
    <div>
      <div className={styles.gallery}>
        {items?.map((item, index) => (
          <Card
            item={item}
            index={index}
            id={item._id}
            isFavorite={favoriteItems.includes(item._id)}
            openGallery={openGallery}
            key={item.imageUrl}
          />
        ))}
      </div>

      {items && (
        <AlphaGallery
          open={open}
          onClose={closeGallery}
          images={items.map((item) => ({ ...item, src: item.imageUrl }))}
          initialSlide={initialSlide}
        />
      )}
    </div>
  )
}
