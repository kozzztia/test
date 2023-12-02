import { useTranslations } from 'next-intl';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import s from "./Table.module.scss";
import { SecondaryButton } from 'ui/components/Button';
import { SeacrhIcon } from 'components/icons/social/SeacrhIcon';




const BalanceSearchPanel = ({panelHandler} : {panelHandler: (param: string[]) => void}) => {
    const t = useTranslations('ProfilePage.FinancialBalance');
    const [search, setSearch] = useState<string>('');
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>(''); 
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        panelHandler([search, fromDate, toDate])
        setSearch("")
        setFromDate("")
        setToDate("")
      };
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
          case 'search':
            setSearch(value);
            break;
          case 'from':
            setFromDate(value);
            break;
          case 'to':
            setToDate(value);
            break;
          default:
            break;
        }
      };
      return (
        <form className={s.searchPanel} onSubmit={handleSubmit}>
          <label>
          <h5 className={s.label}>{t('search')}:</h5>
            <input
              className={s.input}
              type="text"
              id="search"
              name="search"
              placeholder={t('search_placeholder')}
              value={search}
              onChange={handleChange}
            />
          </label>
          <label>
            <h5 className={s.label}>{t('search_date')}:</h5>
            <input
              className={s.input}
              type="date"
              id="from"
              name="from"
              placeholder={t('search_date_from')}
              value={fromDate}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
            className={s.input}
              type="date"
              id="to"
              name="to"
              placeholder={t('search_date_to')}
              value={toDate}
              onChange={handleChange}
            />
          </label>
          <SecondaryButton type="submit" className={s.button}>
            <SeacrhIcon/>
          </SecondaryButton>
        </form>
      );
    };
    
    export default BalanceSearchPanel;