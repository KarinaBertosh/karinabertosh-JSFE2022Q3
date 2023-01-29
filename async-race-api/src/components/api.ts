import { ICar, IWinCar } from './type';

const url = 'http://127.0.0.1:3000';

export const getCarsWinners = async () => {
  try {
    const carsWinners = await fetch(`${url}/winners`).then((data) => data.json());
    return carsWinners;
  } catch (err) {
    console.error(err);
  }
  return false;
};

export const getCarsGarage = async () => {
  try {
    const carsGarage = await fetch(`${url}/garage`).then((data) => data.json());
    return carsGarage;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const getCarGarage = async (id: number) => {
  try {
    const carGarage = await fetch(`${url}/garage/${id}`).then((data) => data.json());
    return carGarage;
  } catch (err) {
    console.error(err);
  }
  return false;
};

export const createCar = async (carName: string, carColor: string): Promise<ICar[]> => {
  const newCar = JSON.stringify({
    name: carName,
    color: carColor,
  });
  const response = await fetch(`${url}/garage/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: (newCar),
  }).then((data) => data.json());
  return response;
};

export const deleteCar = async (id: number): Promise<ICar[]> => {
  const response = await fetch(`${url}/garage/${id}`, {
    method: 'DELETE',
  }).then((data) => data.json());
  return response;
};

export const upDateCar = async (id: number, carName: string, carColor: string): Promise<ICar[]> => {
  const newCar = JSON.stringify({
    name: carName,
    color: carColor,
  });
  const response = await fetch(`${url}/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: (newCar),
  }).then((data) => data.json());
  return response;
};
