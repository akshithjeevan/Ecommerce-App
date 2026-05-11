import React from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

function DeliveryOptions({ cartItem, deliveryOptions, loadCart }) {
  return (
    <div>
      <div className="delivery-options">
        <div className="delivery-options-title">Choose a delivery option:</div>
        {deliveryOptions.map((deliveryOption) => {
          let priceString = " FREE Shipping";

          if (deliveryOption.priceCents > 0) {
            priceString = `${formatMoney(deliveryOption.priceCents)}-shipping`;
          }

          const updateDeliveryOption = async () => {
         await axios.put(
  `https://ecommerce-app-i8sy.onrender.com/api/cart-items/${cartItem.productId}`,
  {
    deliveryOptionId: deliveryOption.id,
  }
);
            await loadCart();
          };

          return (
            <div
              key={deliveryOption.id}
              className="delivery-option"
              onClick={updateDeliveryOption}
            >
              <input
                type="radio"
                checked={deliveryOption.id === cartItem.deliveryOptionId}
                onChange={()=>{}}
                className="delivery-option-input"
                name={`delivery-option-${cartItem.productId}`}
              />
              <div>
                <div className="delivery-option-date">
                  {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMM, D "
                  )}
                </div>
                <div className="delivery-option-price">{priceString}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeliveryOptions;
