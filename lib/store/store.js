import {configureStore} from '@reduxjs/toolkit';
import wearDrinkApp from './reducer';

export let store = configureStore({reducer: wearDrinkApp});
