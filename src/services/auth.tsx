interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'dfbeufhudhfudufhd213121211212',
        user: {
          name: 'Michael Luzx Paulo',
          email: 'michaelluzpaulo@gmail.com',
        },
      });
    }, 2000);
  });
}
