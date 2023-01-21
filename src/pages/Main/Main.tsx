import { Typography } from '@alfalab/core-components/typography/component'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button/Button'
import { Gallery } from '../../components/Gallery/Gallery'
import { useAppDispatch, useAppSelector } from '../../hook'
import { useGetItemsQuery } from '../../services/cardsDataApi'
import { setInitRequest } from '../../store/cardsDataSlice'
import {
  favoriteItemsSelector,
  initRequestSelector,
} from '../../store/selectors/cardsData'
import { CardData } from '../../types'

import styles from './style.module.css'

export const Main = () => {
  const { data, error, isLoading } = useGetItemsQuery()

  const dispatch = useAppDispatch()

  const favoriteItems = useAppSelector(favoriteItemsSelector)
  const initRequestState = useAppSelector(initRequestSelector)

  const [items, setItems] = useState<CardData[]>(data?.data || [])

  useEffect(() => {
    if (data?.data.length) {
      setItems(data.data)
      return
    }

    if (!initRequestState || !data) {
      setItems([])
      return
    }

    dispatch(setInitRequest(false))
  }, [data, dispatch, initRequestState])

  return (
    <div className={styles.main}>
      <Link to="/favorites">
        <Button disabled={!Boolean(favoriteItems.length)}>
          Показать избранные
        </Button>
      </Link>

      {isLoading && (
        <Typography.Text view="primary-large" weight="medium" tag="p">
          Загрузка данных...
        </Typography.Text>
      )}
      {error && (
        <Typography.Text view="primary-large" weight="medium" tag="p">
          Произошла ошибка, не удалось загрузить данные!
        </Typography.Text>
      )}
      {!data?.data.length && !initRequestState && (
        <Typography.Text view="primary-large" weight="medium" tag="p">
          Все карточки удалены. Обновите, пожалуйста, страницу!
        </Typography.Text>
      )}

      {!!data?.data.length && <Gallery items={items} />}
    </div>
  )
}
