import {
  getContext as _getContext,
  put as _put,
  takeLatest as _takeLatest,
  takeEvery as _takeEvery,
  select as _select,
  delay as _delay,
  debounce as _debounce,
} from 'redux-saga/effects';
import { useDispatch as _useDispatch } from "react-redux";

import { ApplicationContext } from '../../interfaces/application';
import ActionTypes from './rootAction';

type TakeLatest = (actionType: ActionTypes['type'], ...rest: any) => any;
type Debounce = (
  ms: number,
  actionType: ActionTypes['type'],
  ...rest: any
) => any;
type TakeEvery = (actionType: ActionTypes['type'], ...rest: any) => any;

type Put = (action: ActionTypes) => any;
type GetContext = (key: keyof ApplicationContext) => any;

type UseDispatch = () => (action: ActionTypes) => any;

export { call, spawn, all } from 'redux-saga/effects';

export const takeLatest: TakeLatest = _takeLatest;

export const takeEvery: TakeEvery = _takeEvery;

export const put: Put = _put;

export const select = _select;

export const getContext: GetContext = _getContext;

export const delay = _delay;

export const debounce: Debounce = _debounce;

export const useDispatch: UseDispatch = _useDispatch;
