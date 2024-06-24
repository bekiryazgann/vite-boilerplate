import type {MiddlewareProps} from "@/type";
import useCookie from "react-use-cookie";

export default function DashboardMiddleware({children}: MiddlewareProps) {
    const [isLoggedIn] = useCookie("isLoggedIn", "false")

    return isLoggedIn === "false" ? (
        <div>
            lütfen Önce giriş yapın!
        </div>
    ) : children
}
