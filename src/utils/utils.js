export const formatCategoryName = (category) => {
  return category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatCategoryURL = (category) =>
  category.toLowerCase().replace(/\s+/g, "-");

export const decodeCategoryName = (category) => category.replace(/-/g, " ");

export const handleCardholderNameChange = (e, setCardholderName) => {
  const value = e.target.value;
  const filteredValue = value.replace(/[^a-zA-Z\s]/g, "").slice(0, 50);
  setCardholderName(filteredValue);
};

export const handleCardNumberChange = (e, setCardNumber) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length <= 16) {
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(value);
  }
};

export const handleExpiryDateChange = (e, setExpiryDate) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }
  setExpiryDate(value);
};

export const handleCvvChange = (e, setCvv) => {
  const value = e.target.value;
  const filteredValue = value.replace(/[^0-9]/g, "").slice(0, 3);
  setCvv(filteredValue);
};
