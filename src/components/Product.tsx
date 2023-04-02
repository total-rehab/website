import { ApiComponents } from '@jambff/oac';
import getUserLocale from 'get-user-locale';
import { FC, useCallback, useEffect, useState } from 'react';
import { Button } from './Button';

type ProductProps = {
  product: ApiComponents['Product'];
};

export const Product: FC<ProductProps> = ({ product }: ProductProps) => {
  const [paymentAmount, setPaymentAmount] = useState<string>();
  const [perUnitCost, setPerUnitCost] = useState<string>();

  const getLocalAmount = useCallback(
    (amount: number) => {
      return new Intl.NumberFormat(getUserLocale() ?? 'en-UK', {
        style: 'currency',
        currency: product.price.currency,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }).format(amount / 100);
    },
    [product.price],
  );

  useEffect(() => {
    setPaymentAmount(getLocalAmount(product.price.amount));
    setPerUnitCost(getLocalAmount(product.price.amount / product.quantity));
  }, [getLocalAmount, product]);

  return (
    <div className="border border-gray-400 overflow-hidden shdow bg-white text-on-surface-base rounded">
      <div className="px-7 py-5 flex flex-col h-full">
        <div className="flex flex-col flex-1">
          <div>
            <h3 className="text-xl lg:text-3xl tracking-wide lg:tracking-wide font-medium">
              {product.name}
            </h3>
            <p className="mt-2 text-lg lg:text-xl">{product.description}</p>
          </div>
          <div className="flex flex-col flex-1 justify-end">
            <p className="text-3xl mt-8">{perUnitCost} / unit</p>
            <p className="text-3 mt-2">
              Billed as a one-time {paymentAmount} payment
            </p>
          </div>
        </div>
        <div>
          <Button className="mt-8">Buy now</Button>
        </div>
      </div>
    </div>
  );
};
