interface Props {
  bookingDetails: {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
  };
}

const OrderSummary: React.FC<Props> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Review Order Details</h2>

    <div className="flex items-center gap-4">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        alt="Property"
        className="w-28 h-28 object-cover rounded-md"
      />
      <div>
        <h3 className="font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    <div className="mt-6 space-y-2">
      <div className="flex justify-between">
        <span>Booking Fee</span>
        <span>${bookingDetails.bookingFee}</span>
      </div>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${bookingDetails.price}</span>
      </div>

      <div className="flex justify-between font-semibold border-t pt-2">
        <span>Grand Total</span>
        <span>${bookingDetails.price + bookingDetails.bookingFee}</span>
      </div>
    </div>
  </div>
);

export default OrderSummary;
