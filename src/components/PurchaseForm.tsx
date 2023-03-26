import type { FC } from 'react';
import {
  LinkAuthenticationElement,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { Button } from './Button';

export const PurchaseForm: FC = () => (
  <form>
    <LinkAuthenticationElement className="mb-2" />
    <PaymentElement />
    <div className="flex justify-center mt-10">
      <Button className="text-lg">Sign up</Button>
    </div>
  </form>
);
