import React from 'react'
import { ItemType } from './data'
import s from './Table.module.scss'
import TableLink from './TableLink'


const TableItem = ({item} : {item : ItemType}) => {
  const styleStatus = (status : string) =>{
    switch (status) {
      case 'fail': {
        return s.fail;
      };
      case 'pending':{
        return s.pending;
      };
      case 'success':{
        return s.success;
      };
      default:
        break;
    }
  }

  return (
  <tr key={item.id} className={s.item}>
    <td><span>{item.payCode}</span></td>
    <td><span>{item.user}</span></td>
    <td><span>{item.date} : {item.time}</span></td>
    <td><span className={`${s.status} ${styleStatus(item.status)}`}>{item.status }</span></td>
    <td><span className={s.amount}>{item.amount}</span></td>
    <td>
      <TableLink page={item.id}/>
    </td>
  </tr>
  )
}

export default TableItem