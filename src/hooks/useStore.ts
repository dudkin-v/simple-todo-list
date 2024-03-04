import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from 'src/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
