import Customer from '../models/customer.model';

export const addCustomer = async (body) => {
    const data = await Customer.create(body);
    return data;
};