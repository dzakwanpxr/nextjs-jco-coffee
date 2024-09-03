import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Cookies from "js-cookie";

interface User {
  username: string;
}

export const authTokenAtom = atomWithStorage<string | null>("authToken", null, {
  getItem: (key) => {
    const storedValue = Cookies.get(key);
    return storedValue ? JSON.parse(storedValue) : null;
  },
  setItem: (key, value) => {
    if (value === null) {
      Cookies.remove(key);
    } else {
      Cookies.set(key, JSON.stringify(value), { expires: 7 });
    }
  },
  removeItem: (key) => Cookies.remove(key),
});

export const userAtom = atomWithStorage<User | null>("user", null);

export const isAuthenticatedAtom = atom((get) => !!get(authTokenAtom) && !!get(userAtom));

export const loadingAtom = atom(false);

export const loginAtom = atom(
  null,
  async (get, set, { username, password }: { username: string; password: string }) => {
    set(loadingAtom, true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      set(authTokenAtom, data.token);
      set(userAtom, { username });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      set(loadingAtom, false);
    }
  }
);

export const logoutAtom = atom(null, (get, set) => {
  set(authTokenAtom, null);
  set(userAtom, null);
});
