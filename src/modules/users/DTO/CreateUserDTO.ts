export interface CreateUserDTO {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface CreateUserAddressDTO {
  user_id: string;
  address_line1: string
  address_line2: string;
  city: string;
  postal_code: string;
  country: string;
  phone: string;
  mobile: string;
}