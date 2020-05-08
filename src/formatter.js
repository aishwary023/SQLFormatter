class Formatter {
  format = (tokens) => {
    console.log("inside formatter");
    const finalSQL = this.getFormattedSQL(tokens);
    return finalSQL;
  };

  getFormattedSQL = (tokens) => {
    console.log("inside getFOrmattedSQL");
    console.log(tokens);
    let finalSQL = "-";
    return finalSQL;
  };
}

export default Formatter;
