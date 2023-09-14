import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";

export const Routes = () => {
    const authLogged = true;

    return authLogged ? <AppRoutes /> : <AuthRoutes />
}   