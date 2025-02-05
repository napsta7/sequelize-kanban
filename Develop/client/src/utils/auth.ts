import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    // TODO: return the decoded token✅
    const token = this.getToken();
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in✅
    const token = this.getToken();
    return token;
  }

  isTokenExpired() {
    //(token: string)
    // TODO: return a value that indicates if the token is expired
    const decodedToken: JwtPayload = this.getProfile();
    if (!decodedToken.exp) {
      return true;
    }
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  }

  getToken(): string {
    // TODO: return the token✅
    const loggedUser = localStorage.getItem("id_token") || "";
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage✅
    localStorage.setItem("id_token", idToken);
    console.log(idToken);

    // TODO: redirect to the home page✅
    window.location.assign("/");
  }

  logout() {
    // TODO: remove the token from localStorage✅
    localStorage.removeItem("id_token");
    // TODO: redirect to the login page✅
    window.location.assign("/login");
  }
}

export default new AuthService();
