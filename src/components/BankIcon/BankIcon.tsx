import React, { FC } from 'react';
import Icons from './sprite.svg';
import banksCode from './banksCode';

interface IBank {
  code: string;
  name: string;
  id: string;
}

interface BankIconProps {
  digits: number | string;
  onFindBankName?: (name: string) => void;
  size?: string;
  margin?: string;
}

const BankIcon: FC<BankIconProps> = ({ digits, onFindBankName, size = '40px', margin = '8px' }) => {
  const bankId = () => {
    if (!digits) return <></>;

    if (digits && digits.toString().length === 16) {
      const code = digits.toString().substr(0, 6);
      const findBank = (banksCode as IBank[]).find((bank) => bank.code === code);

      if (findBank) {
        if (onFindBankName) onFindBankName(findBank.name);
        return (
          <svg className="c-icon" style={{ width: size, height: size, margin }}>
            <use xlinkHref={`${Icons}#${findBank.id}`}></use>
          </svg>
        );
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  };
  return bankId();
};

export default BankIcon;