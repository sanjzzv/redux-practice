import { useSelector, useDispatch } from 'react-redux'

export const count = useSelector((state) => state.counter)
export const dispatch = useDispatch()