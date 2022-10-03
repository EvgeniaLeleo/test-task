import { Typography } from '@alfalab/core-components/typography/component'

export const NotFound = () => {
  return (
    <div>
      <Typography.TitleResponsive
        tag="h2"
        view="medium"
        color="primary"
        weight="medium"
      >
        Ой! Такой страницы нет!
      </Typography.TitleResponsive>
    </div>
  )
}
