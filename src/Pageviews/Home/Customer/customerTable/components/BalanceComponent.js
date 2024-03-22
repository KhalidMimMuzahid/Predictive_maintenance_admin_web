import { useEffect, useState } from "react";
import { useStyle } from "../../styleComponents";
const BalanceComponent = (props) => {
  const [customerWalletInfo, setCustomerWalletInfo] = useState(null);

  const classes = useStyle();

  useEffect(() => {
    if (props?.value !== "") {
      let url =
        "https://api.showaapp.com/admin/wallet/get-customer-wallet-info/" +
        props?.value;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCustomerWalletInfo(data);
        });
    }
  }, [props?.value]);

  function displayBalance() {
    if (customerWalletInfo == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );
    return (
      <div>
        <div className={classes.balance}>
          {"\xA5 " + customerWalletInfo.showa_cash}
        </div>
        <div className={classes.yenText}>Yen</div>
      </div>
    );
  }

  return <div style={{ display: "flex" }}>{displayBalance()}</div>;
};

export default BalanceComponent;
