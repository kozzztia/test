import { ArrowRight } from 'components/icons/ArrowIcons'
import { ROUTES } from 'constants/routes'
import Link from 'next/link'
import React from 'react'


const TableLink = ({page} : {page : number}) => {
  return (
    <Link href={`${ROUTES.PRIVATE.SELLER.FINANCIAL_BALANCE_DETAILS}?${page}`}><ArrowRight/></Link>
  )
}

export default TableLink