import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

export default function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();

    function handleDelete(){
     dispatch(deleteItem(pizzaId))
    }
  return (
    <div><Button type="small" onClick={handleDelete}>Delete</Button></div>
  )
}
