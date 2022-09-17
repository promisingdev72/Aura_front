// import { useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

export const firebaseConfig = {
  apiKey: "AIzaSyCtzveYVKunyJZfK4Ptklgc8CDQI-qdyAw",
  authDomain: "shop-aura.firebaseapp.com",
  databaseURL: "https://shop-aura.firebaseio.com",
  projectId: "shop-aura",
  storageBucket: "shop-aura.appspot.com",
  messagingSenderId: "188819437988",
  appId: "1:188819437988:web:d42a9609bc9af7ced8a931",
  measurementId: "G-4PCWBG6V77",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const fns = getFunctions();

export const getOrderDetails = async (shipOrderId) => {
  const fn = httpsCallable(fns, "getShippoOrder");

  const { data } = await fn({
    shipOrderId,
    isTestMode: true,
  });
  return data;
};
