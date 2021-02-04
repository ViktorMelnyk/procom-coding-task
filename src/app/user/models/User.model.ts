export type User = {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  addresses: Address[]
};

export type Address = {
  streetName: string,
  postalCode: string,
  apartmentNumber: number,
  state: string,
  country: string
};
