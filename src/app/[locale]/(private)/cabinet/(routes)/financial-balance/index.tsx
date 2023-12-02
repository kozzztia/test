'use client';
import { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import s from './Financial.module.scss';
import { Section } from 'components/common/profile/Section';
import BalanceTable from 'components/Table/BalanceTable';
import BalanceSearchPanel from 'components/Table/BalanceSearchPanel';
import { ItemType, generateRandomData } from 'components/Table/data';
import { Loader } from 'components/common/loader';



export const FinancialBalancePage: FC = () => {
  const t = useTranslations('ProfilePage.FinancialBalance');

  const [searchParam, setSearchParam] = useState<{[key: string]: string} | {}>({});
  const [financialData, setFinancialData] = useState<ItemType[] | []>([])

  const getSerchParam = (param : string[]): void => {
    const object = {
      search : param[0],
      from : param[1],
      to : param[2],
    }
    setSearchParam(object)
  };
  const data = generateRandomData(30);

  useEffect(()=>{

    setFinancialData(data)
  },[searchParam])

  return (
    <Section className={s.table_page}>
      <Section.Header className={s.table_header}>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body className={s.tabel_body}>
        <BalanceSearchPanel panelHandler={getSerchParam}/>
        {financialData.length <=0?<Loader/>:<BalanceTable data={financialData}/>}
      </Section.Body>
    </Section>
  );
};
