import {configureStore} from '@reduxjs/toolkit';
import wearDrinkApp from './reducer';

export const store = configureStore(wearDrinkApp);
