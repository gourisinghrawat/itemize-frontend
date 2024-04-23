import { useMemo } from "react";
import "./TransactionBg.css";

const TransactionBg = ({
  order,
  transactionAmount,
  order1,
  dpLabel,
  propBackgroundColor,
  propWidth,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propAlignSelf,
  propBackgroundColor1,
  propMinWidth2,
}) => {
  const companyNameStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const datePickerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const orderStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const transactionAmountStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay, propMinWidth1, propAlignSelf]);

  const transactionsItemStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const order1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="transaction-bg1">
      <div className="transaction-name">
        <div className="company-name" style={companyNameStyle} />
        <div className="date-picker" style={datePickerStyle}>
          <div className="order" style={orderStyle}>
            {order}
          </div>
          <div className="transaction-amount" style={transactionAmountStyle}>
            {transactionAmount}
          </div>
        </div>
      </div>
      <div className="transactions-list">
        <div className="transactions-item" style={transactionsItemStyle} />
        <div className="transactions-separator">
          <div className="order1" style={order1Style}>
            {order1}
          </div>
          <div className="dp-label">{dpLabel}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionBg;
