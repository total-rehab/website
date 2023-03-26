import type { FC } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Button } from './Button';

export const PurchaseForm: FC = () => (
  <form>
    <PaymentElement />
    <div className="flex justify-end mt-6">
      <Button className="text-lg">Submit</Button>
    </div>
  </form>
);
