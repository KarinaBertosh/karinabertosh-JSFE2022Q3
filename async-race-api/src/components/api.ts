const url = 'http://127.0.0.1:3000';

export const getCarsWinners = async (): Promise<any> => {
  try {
    const carsWinners = await fetch(`${url}/winners`).then((data) => data.json());
    return carsWinners;
  } catch (err) {
    console.error(err);
  }
  // if (response.ok) {
  //   const data = await response.json();

  //   // this.renderTitle(data);
  //   // this.renderTable(data);
  // }
};

export const getCarsGarage = async (): Promise<any> => {
  try {
    const carsGarage = await fetch(`${url}/garage`).then((data) => data.json());
    return carsGarage;
  } catch (err) {
    console.error(err);
  }
};
