export default
{
    port: process.env.PORT || 1433,
    dbUser: process.env.DB_USER || "UsrExamen",
    dbPassword: process.env.DB_PASSWORD || "U12345*",
    dbServer: process.env.DB_SERVER || "localhost",
    instanceName: "SQLEXPRESS",
    bdd: "ServicioAndroid"
}