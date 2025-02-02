import { auth } from "../_lib/auth";
import NavigationClient from "./NavigationClient";

export default async function NavigationServer() {
    const session = await auth();

    return <NavigationClient session={session} />;
}
