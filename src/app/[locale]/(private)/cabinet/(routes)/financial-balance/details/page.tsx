'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import s from './Financial.module.scss';
import { Section } from 'components/common/profile/Section';

export const Details: FC = () => {
  const t = useTranslations('ProfilePage.FinancialBalance.Details');
  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        hello
      </Section.Body>
    </Section>
  );
};
export default Details