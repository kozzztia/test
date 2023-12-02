import React, { useState } from 'react'
import { ItemType } from "./data"
import TableItem from './TableItem'
import { useTranslations } from 'next-intl';
import s from "./Table.module.scss";
import { SortReverseIcon } from 'components/icons/SortReverseIcon';



const BalanceTable = ({data}:{data : ItemType[]}) => {
  const t = useTranslations('ProfilePage.FinancialBalance');
  const [step, setStep] = useState<number>(10)
  return (
    <>
<table className={s.table}>
  <thead className={s.header}>
    <tr>
      <th>{t('table_code')}</th>
      <th>{t('table_user')}</th>
      <th className={s.btn}>
        <div>{t('tabel_date_time')}
          <SortReverseIcon/>
        </div>
      </th>
      <th className={s.btn}>
        <div>{t('tabel_status')}
          <SortReverseIcon/>
        </div>
        </th>
      <th className={s.btn}>
        <div>{t('table_amount')}
          <SortReverseIcon/>
        </div>
      </th>
      <th>{t('table_offers')}</th>
    </tr>
  </thead>
  <tbody className={s.body}>
    {data?.map((item) => (
      <TableItem item={item} key={item.id}/>
    ))}
  </tbody>
</table>
<div style={{display:'flex', justifyContent:'space-between', width: '100%'}}>
        <div>{`${step} ${t('table_article')} ${data.length}`}</div>
        <div>hello</div>
  </div>
</>
  )
}

export default BalanceTable